"use client"
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/Gi";
import { GrClose } from "react-icons/Gr";
import Link from 'next/link';
import LanguageSwitcher from '@/components/languageSwitcher';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname()
    console.log(pathName)

    const currentLang = () => {
        if (pathName.includes('/az')) {
            return 'az'
        } else if (pathName.includes('/en')) {
            return 'en'
        }
    }



    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='bg-[#b8dde3]'>
            <nav className='p-5 md:flex md:items-center md:justify-between container'>
                <div className='flex justify-between items-center'>
                    <Image src={Logo} alt="hero" width={40} height={40} />
                    <span className='text-2xl cursor-pointer font-bold text-slate-700 tracking-wider pl-3 text-[1.2rem]'>CONSOLDES</span>
                    {
                        isMenuOpen ? <GrClose size={30} onClick={toggleMenu} className='cursor-pointer md:hidden block mx-2' />
                            : <GiHamburgerMenu size={30} onClick={toggleMenu} className='cursor-pointer md:hidden block mx-2' />
                    }
                </div>
                <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-2 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-200 ${isMenuOpen ? "top-[70px] opacity-100" : ""}`}>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href={`/${currentLang()}`} className='text-xl hover:text-red-800'>Home</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href={`/${currentLang()}/course`} className='text-xl hover:text-red-800'>Courses</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href={`/${currentLang()}/blog`} className='text-xl hover:text-red-800'>Blog</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href={`/${currentLang()}/about`} className='text-xl hover:text-red-800'>About</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href={`/${currentLang()}/contact`} className='text-xl hover:text-red-800'>Contact</Link>
                    </li>
                    
                </ul>
                {/* <div>
                    <LanguageSwitcher />
                </div> */}
            </nav>
        </header>
    );
}

export default Header;
