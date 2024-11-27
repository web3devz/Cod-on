import { AeSdk, CompilerHttp, MemoryAccount, Node, Contract } from "@aeternity/aepp-sdk";

import { NextResponse } from "next/server";
const ACCOUNT_SECRET_KEY = "sk_2CuofqWZHrABCrM7GY95YSQn8PyFvKQadnvFnpwhjUnDCFAWmf"; // Replace with your key
const NODE_URL = "https://testnet.aeternity.io";
const COMPILER_URL = "https://v8.compiler.aepps.com";

const account = new MemoryAccount(ACCOUNT_SECRET_KEY);
const node = new Node(NODE_URL);
const aeSdk = new AeSdk({
  nodes: [{ name: "testnet", instance: node }],
  accounts: [account],
  onCompiler: new CompilerHttp(COMPILER_URL),
});
const cd = `contract Multiplier =
record state = { factor: int }
entrypoint init(f : int) : state = { factor = f }
stateful entrypoint setFactor(f : int): int =
  put(state{ factor = f })
  f * 10
entrypoint multiplyBy(x : int) = x * state.factor`;

const parse = (code: string) => {
    const regex = /init\((?<args>.*)\)/gm;

    const matches = regex.exec(code);
    if (matches) {
        const { args } = matches.groups || {};
        return `[${args}]`;
    } else {
        return "[]";
    }
};

const test = (code: string) => {
    const regex = /init\(\)/gm;

    const matches = regex.exec(code);
    if (matches) {
        return true;
    } else {
        return false;
    }
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code") || "";
    const args = JSON.parse(searchParams.get("args") || "[]");
    console.log(code);
    console.log(args);

    const contract = await Contract.initialize({
        ...aeSdk.getContext(),
        sourceCode: code,
    });
    let txParams = {
        interval: 500,
        blocks: 3,
        allowUnsynced: true,
    };

    const bytecode = await contract.$compile();
    console.log(`Obtained bytecode ${bytecode}`);

    //@ts-ignore
    const deployInfo = await contract.$deploy([ 'ak_28gvDBQkwSjJEFLP5fU5a2tz6ctfyw5hzC2hXeUZ7cPkGkq5xL', '10', '1' ]);
    console.log(`Contract deployed at ${deployInfo.address}`);

    return NextResponse.json({ address: deployInfo.address });
}
