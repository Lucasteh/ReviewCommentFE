"use client"
import { useRouter } from 'next/navigation';

interface ChildButtonProps {
    route: string;
    text: string;
}

export default function Button({ route, text }: ChildButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push(route);
    }
    
    return (
        <button onClick={handleClick} className="h-12 rounded-lg bg-white font-bold px-5">{text}</button>
    );
}
