import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
  <footer className='flexCenter mb-24'>
    <div className='padding-container max-container flex w-full flex-col gap-14'>

      <div className='flex flex-col items-start gap-[10%] md:flex-row'>
        <Link href="/" className='mb-10'>
          <Image
           src="hilink-logo.svg" alt="logo" width={74} height={24}/>
        </Link>

      </div>

    </div>

  </footer>

    </div>
  )
}

export default Footer