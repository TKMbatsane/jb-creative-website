'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
    name: string;
    role: string;
    image: string; // path relative to /public
    bio?: string;
};

export default function TeamCard({ name, role, image, bio }: Props) {
    const [imgSrc, setImgSrc] = useState(image);
    return (
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    onError={()=>setImgSrc("/images/JbLogo.jpeg")}
                />
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-zinc-400 mb-2">{role}</p>
            {bio && <p className="text-zinc-500 text-sm">{bio}</p>}
        </div>
    );
}
