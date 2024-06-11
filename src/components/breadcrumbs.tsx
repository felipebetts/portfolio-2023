import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoCaretForward, IoHomeSharp } from 'react-icons/io5'

const Breadcrumbs = () => {
  const { pathname } = useRouter()
  const route = pathname.split('/')
  return (
    <div className="flex items-center gap-1">
      {route.map((segment, i) =>
        i == route.length - 1 ? (
          <p className="p-2" key={`segment${i}`}>
            {segment}
          </p>
        ) : i == 0 ? (
          <div className="flex items-center gap-1" key={`segment${i}`}>
            <Link href="/" className="p-2 hover:opacity-80">
              <IoHomeSharp />
            </Link>
            <IoCaretForward />
          </div>
        ) : (
          <div className="flex items-center gap-1" key={`segment${i}`}>
            <Link
              href={route.slice(0, i + 1).join('/')}
              className="p-2 hover:opacity-80"
            >
              {segment}
            </Link>
            <IoCaretForward />
          </div>
        )
      )}
    </div>
  )
}

export default Breadcrumbs
