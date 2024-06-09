import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex gap-8 items-center justify-center bg-black text-white p-16">
      <Image src="/assets/logo.jpg" alt="logo" width={18} height={18} />
      <Link href="/works">works</Link>
      <Link href="mailto:contato@felipebetts.com.br">
        contato@felipebetts.com.br
      </Link>
    </footer>
  )
}

export default Footer
