import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg- pt-11 pb-16">
      <div className="mx-3 md:mx-auto md:w-[90%]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[55%]">
            <Image src={'/logo2.png'} srcSet="" alt='Codemart' width={175} height={26} />
            <p className="text-xs md:text-base text-[#8C8C8C] mt-4">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, Ut enim ad minim veniam, quis nostrud equip consectetur <br />
              adipiscing ex ea commodo dolor consequat
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-9">
          <div className="flex justify-center">
            <Link href={'/'} className="mr-5">
              <Image src={'/FB.svg'} srcSet="" alt='' width={35} height={35} />
            </Link>
            <Link href={'/'} className="mr-5">
              <Image src={'/Insta.svg'} srcSet="" alt='' width={35} height={35} />
            </Link>
            <Link href={'/'} className="mr-5">
              <Image src={'/TW.svg'} srcSet="" alt='' width={35} height={35} />
            </Link>
            <Link href={'/'} className="">
              <Image src={'/WP.svg'} srcSet="" alt='' width={35} height={35} />
            </Link>
          </div>
          <div className="flex items-center justify-center mt-3 md:mt-0">
            <nav className="flex flex-wrap items-center text-lg justify-center text-black font-medium">
              <Link href={'/'} className="mr-5 md:mr-9 hover:text-cyan-400">Home</Link>
              <Link href={'/about'} className="mr-5 md:mr-9 hover:text-cyan-400">About</Link>
              <Link href={'/contact'} className="hover:text-cyan-400">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center justify-center mt-3 md:mt-0">
            <p className="font-headding text-sm text-[#8C8C8C]">© Designed and developed by @KSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
