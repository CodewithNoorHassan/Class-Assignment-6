import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            {/* MINI BAR ABOVE NAV BAR /////////////////////// */}
            <div className="flex justify-between items-center font h-10 text-white bg-[#060516] px-[83px] border-b border-opacity-25 border-gray-400 text-sm">
                <div className="flex items-center text-red-700">
                    <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-3.5" /> {/* Mobile Icon */}
                </div>
                <p>Download App via SMS</p>
                <div className="ml-auto px-2 text-red-600">اردو</div>
                <nav>
                    | <Link href="#sign-up">Sign Up</Link> | <Link href="#sign-in">Sign In</Link>
                </nav>
            </div>

            {/* NAVBAR //////////////////*/}
            <nav className="flex items-center justify-between h-16 bg-[#070620] px-20">
                {/* LOGO /////////////////////*/}
                <Link href="/" aria-label="Home">
                    <Image src="/logo.svg" alt="logo" width={140} height={150} />
                </Link>

                {/* NAVBAR LINKS ///////////////////////////////////////*/}
                <ul className="flex gap-7">
                    <li>
                        <Link href="#used-car" className="relative py-1.5 text-white font-calibri text-lg group">
                            Used Cars
                            <span className="text-[12px]">▼</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#new-car" className="relative py-1.5 text-white font-calibri text-lg group">
                            New Cars
                            <span className="text-[12px]">▼</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#bikes" className="relative py-1.5 text-white font-calibri text-lg group">
                            Bikes
                            <span className="text-[12px]">▼</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#auto-store" className="relative py-1.5 text-white font-calibri text-lg group">
                            Auto Store
                            <span className="text-[12px]">▼</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#videos" className="relative py-1.5 text-white font-calibri text-lg group">
                            Videos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#forums" className="relative py-1.5 text-white font-calibri text-lg group">
                            Forums
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#blog" className="relative py-1.5 text-white font-calibri text-lg group">
                            Blog
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#more" className="relative py-1.5 text-white font-calibri text-lg group">
                            More
                            <span className="text-[12px]">▼</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all"></span>
                        </Link>
                    </li>
                </ul>

                {/* POST BUTTON////////////////////// */}
                <button className="bg-red-700 hover:bg-red-800 text-white rounded-lg px-7 py-2 ring-1 ring-slate-900/5 shadow-xl">
                    Post an Ad
                </button>
            </nav>
        </header>
    );
}
