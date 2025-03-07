import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container bg-(--frame) flex flex-col justify-center items-center gap-y-4">
            <h1 className="pt-[250px] font-bold text-[80px] xl:text-8xl text-(--backgroundLight)">
                404
            </h1>
            <h2 className="text-3xl text-(--backgroundLight) font-normal">Page Not Found</h2>
            <Link href="/" className="pb-[250px] text-xl font-normal text-(--skyBlue)">
                Go back home
            </Link>
        </div>
    );
}
