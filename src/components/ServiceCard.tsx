'use client';

type Props = {
    icon: string;
    title: string;
    description: string;
    features?: string[];
};

export default function ServiceCard({ icon, title, description, features = [] }: Props) {
    return (
        <div className="bg-white dark:bg-[#252525] p-8 rounded-lg border border-zinc-900 hover:border-[#636b2f] transition text-black dark:text-white">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-zinc-400 mb-6">{description}</p>
            {features.length > 0 && (
                <ul className="text-zinc-400 space-y-2 text-sm">
                    {features.map((f, i) => (
                        <li key={i}>✓ {f}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
