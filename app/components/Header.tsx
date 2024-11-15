import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();
    
    return (
        <div className='h-[75px] bg-black flex flex-row justify-center align-middle items-center'>
            <div className='bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent text-2xl flex flex-col ' onClick={() => router.push('/')}>
                QR Pal
            </div>
        </div>
    )
}