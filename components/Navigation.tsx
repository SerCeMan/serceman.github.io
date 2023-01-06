import Link from 'next/link';
import React from 'react';
import "@fontsource/alegreya"

const Navigation = (): JSX.Element => {
    return (
        <nav className="flex justify-between items-center w-full text-lg">
            <Link
                href="/"
                style={{
                    fontFamily: 'Alegreya',
                }}
                className="text-gray-500 pr-6 py-4 float-left w-1/2 text-4xl">
                SerCe&apos;s blog
            </Link>
            <div className="float-right">
                <Link href="/" className="text-gray-600 px-6 py-4">
                    Home
                </Link>
                <Link href="/blog" className="text-gray-600 px-6 py-4">
                    Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
