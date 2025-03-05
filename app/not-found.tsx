import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="p-80 bg-(--frame) flex flex-col justify-center items-center gap-y-4">
            <h1 className="font-bold text-8xl xl:text-9xl text-(--backgroundLight)">404</h1>
            <h2 className="text-3xl text-(--backgroundLight) font-normal">Page Not Found</h2>
            <Link href="/" className="text-xl font-normal text-(--skyBlue)">
                Go back home
            </Link>
        </div>
    );
}
