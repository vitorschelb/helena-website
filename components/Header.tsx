'use client'
import Image from 'next/image'
import LogoHelena from '@/public/LogoHelena.png'
import FotoHelena from '@/public/FotoHelena.jpeg'
import Link from 'next/link'
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { useState } from 'react'
import { NavItem } from '@/shared/types'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  const navList: NavItem[] = [
    { label: 'Sobre', href: '/' },
    { label: 'Patrimônio', href: '/' },
    { label: 'Artigos', href: '/' },
    { label: 'Contato', href: '/Contato' },
  ]

  return (
    <nav className="left-0 top-0 h-20 w-full border-b border-l-2 border-r-2 border-t-8 border-darkSand bg-whiteIce">
      {/* Desktop */}

      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={LogoHelena}
            alt="Logo Helena Amaral"
            width="230"
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="flex gap-6">
            {navList.map((navItem, i) => (
              <Link key={i} href={navItem.href}>
                <li className="font-dosis text-sm uppercase text-lightBlack transition-colors hover:text-darkSand">
                  {navItem.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile */}

        <div onClick={handleNav} className="cursor-pointer pl-24 sm:hidden">
          <AiOutlineMenu className="text-2xl text-darkSand" />
        </div>

        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 z-50 h-screen w-[65%] bg-darkSand p-10 duration-500 ease-in sm:hidden'
              : 'fixed left-[-100%] top-0 z-50 h-screen w-[65%] p-10 duration-500 ease-in sm:hidden'
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose className="text-2xl text-whiteIce" />
            </div>
          </div>

          <div className="m-auto flex-col gap-4 py-4 text-2xl">
            <div className="border-medium border-lightSand">
              <Image
                src={FotoHelena}
                alt="Logo Helena Amaral"
                width="300"
                height="300"
                className="m-auto"
                priority
              />
            </div>

            <ul>
              {navList.map((navItem, i) => (
                <Link key={i} href={navItem.href}>
                  <li
                    className="py-4 text-center font-dosis text-base uppercase text-whiteIce"
                    onClick={() => setMenuOpen(false)}
                  >
                    {navItem.label}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="flex flex-row items-center justify-around gap-4 p-10 text-whiteIce">
              <AiOutlineInstagram size={30} />
              <AiOutlineFacebook size={30} />
              <AiOutlineTwitter size={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
