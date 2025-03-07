import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import cn from 'classnames';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

const jost = localFont({
    src: [
        { path: './fonts/Jost-ExtraLight.woff', weight: '200', style: 'normal' },
        { path: './fonts/Jost-ExtraLight.woff2', weight: '200', style: 'normal' },
        { path: './fonts/Jost-Regular.woff', weight: '400', style: 'normal' },
        { path: './fonts/Jost-Regular.woff2', weight: '400', style: 'normal' },
        { path: './fonts/Jost-Medium.woff', weight: '500', style: 'normal' },
        { path: './fonts/Jost-Medium.woff2', weight: '500', style: 'normal' },

        { path: './fonts/Jost-SemiBold.woff', weight: '600', style: 'normal' },
        { path: './fonts/Jost-SemiBold.woff2', weight: '600', style: 'normal' },
        { path: './fonts/Jost-Bold.woff', weight: '700', style: 'normal' },
        { path: './fonts/Jost-Bold.woff2', weight: '700', style: 'normal' },
        { path: './fonts/Jost-ExtraBold.woff', weight: '800', style: 'normal' },
        { path: './fonts/Jost-ExtraBold.woff2', weight: '800', style: 'normal' },
    ],
    variable: '--jost',
});

export const metadata: Metadata = {
    title: 'Online Courses for Professional Growth - Education of the Future',
    description:
        'Enhance your skills and advance your career with our online courses! Learn programming, marketing, design, and more from industry experts. Flexible schedule, certification, and practical knowledge for success.',
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            url: '/logoImages/circleLogo.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/logoImages/circleLogo.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/logoImages/circleLogo.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/logoImages/circleLogo.png',
        },
    ],
    manifest: '/favicon/site.webmanifest',
    openGraph: {
        images: [
            {
                url: '/heroImages/brain.png',
                width: 652,
                height: 287,
                alt: 'Logotype of course',
            },
        ],
        title: 'Online Courses for Professional Growth - Education of the Future',
        description:
            'Enhance your skills and advance your career with our online courses! Learn programming, marketing, design, and more from industry experts. Flexible schedule, certification, and practical knowledge for success.',
        siteName: 'Course Insight',
        locale: 'uk-UA',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={cn(jost.variable, 'antialiased')}>
                <Header />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
