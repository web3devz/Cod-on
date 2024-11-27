import { ScrollText } from "lucide-react";

function MergeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m8 6 4-4 4 4" />
            <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
            <path d="m20 22-5-5" />
        </svg>
    );
}

function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export default function Features() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 animate-fadeIn">
                                Unlock Limitless Possibilities with Aeternity Features
                            </h1>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto animate-slideUp">
                                Experience the next level of blockchain development with features tailored to your needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                title="All-in-One Blockchain Solution"
                                description="Seamlessly build, deploy, and manage your smart contracts and decentralized applications."
                                Icon={ScrollText}
                                gradient="from-purple-500 to-pink-500"
                            />
                            <FeatureCard
                                title="AI-Assisted Contract Creation"
                                description="Leverage artificial intelligence to help guide you through the smart contract creation process."
                                Icon={MergeIcon}
                                gradient="from-green-500 to-teal-500"
                            />
                            <FeatureCard
                                title="Flexible & Scalable Customization"
                                description="Fully customize your smart contracts to meet your exact needs, enhancing scalability."
                                Icon={SettingsIcon}
                                gradient="from-blue-500 to-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description, Icon, gradient }: any) {
    return (
        <div className="flex flex-col items-center space-y-2 border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 animate-fadeIn">
            <div
                className={`p-4 bg-gradient-to-r ${gradient} rounded-full shadow-md animate-pulse`}>
                <Icon className="text-white h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-zinc-200 dark:text-zinc-100 text-sm">
                {description}
            </p>
        </div>
    );
}
