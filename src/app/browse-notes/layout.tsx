"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/assets/images/logo.svg";
import { usePathname } from "next/navigation";

export default function BrowseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <>
            <header className="sticky top-0 z-50 bg-[#F9F1E5]/90 backdrop-blur-md border-b border-[#e0d7cb] shadow-sm">
                <nav className="max-w-[80%] mx-auto px-6 py-3 flex justify-between items-center rounded-b-2xl">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center gap-3 select-none">
                        <Image src={Logo} alt="TerpNotes Logo" width={30} height={30} />
                        <h1 className="text-xl font-bold text-[#1F1F1F]" style={{ fontFamily: "sen" }}>
                            TerpNotes
                        </h1>
                    </Link>

                    {/* Nav Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {pathname !== "/browse-notes" &&
                            <Link
                                href="/browse"
                                className="cursor-pointer bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-5 py-2 rounded-xl border-[#CD1015] transition-all"
                            >
                                Browse Notes
                            </Link>
                        }
                        <Link
                            href="/signup"
                            className="cursor-pointer bg-[#CD1015] hover:bg-[#a60d11] text-white px-5 py-2 rounded-xl transition-all hover:scale-105"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="cursor-pointer bg-[#CD1015] hover:bg-[#a60d11] text-white px-5 py-2 rounded-xl transition-all hover:scale-105"
                        >
                            Log In
                        </Link>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
}