import React from 'react'
import WorkDetails from '@/components/layout/works/work-details'
import Image from 'next/image'
import Link from 'next/link'

const works = [
  {
    title: 'Soccer Team Website',
    sub: 'OneFan',
    image: '/images/onefan/osasuna-home.png',
    href: '/works/onefan'
  },
  {
    title: 'Online Tourism Agency',
    sub: 'Hurb',
    image: '/images/hurb/hurb-home.png',
    href: '/works/hurb'
  },
  {
    title: 'Digital Banking Platform',
    sub: 'OneFan',
    image: '/images/valepay/1.jpg',
    href: '/works/digital-bank'
  },
  {
    title: 'Construction Budget Simulator',
    sub: 'iBuild Construtora',
    image: '/images/orcamento_express/cover.png',
    href: '/works/onefan'
  },
  {
    title: 'Donations Agreggator',
    sub: 'Ajuda Pet',
    image: '/images/ajudapet/cover.png',
    href: '/works/donations'
  }
]

const WorksPage = () => {
  return (
    <WorkDetails title="Works" sub="">
      <div className="w-full max-w-[var(--max-w)] py-2 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {works.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="relative w-full h-48 aspect-[16/9]">
                <Image
                  //   height={1227.5}
                  //   width={730}
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-md shadow-xl"
                />
              </div>
              <h3 className="font-semibold text-xl mt-2">{item.title}</h3>
              {/* <h4>{item.sub}</h4> */}
            </Link>
          ))}
        </div>
      </div>
    </WorkDetails>
  )
}

export default WorksPage
