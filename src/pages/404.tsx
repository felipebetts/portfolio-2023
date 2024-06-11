import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className="min-h-[75vh] w-full flex flex-col gap-8 items-center justify-center py-6 px-4">
      <h1 className="mb-6 text-4xl xl:text-5xl">Page Not Found</h1>
      <video
        src="/videos/drink-water.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <h2 className="mb-2 text-2xl xl:text-3xl -tracking-tight">
        <span>
          Return to the{' '}
          <Link href="/" className="underline underline-offset-8 decoration-1">
            home page
          </Link>
        </span>
      </h2>
    </main>
  )
}

export default NotFound
