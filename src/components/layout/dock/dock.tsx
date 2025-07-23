import { clsx } from 'clsx'
import React, { useState } from 'react'
import { IoClose, IoLanguage } from 'react-icons/io5'

const DockToggle = () => <></>

const Dock = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(prev => !prev)

  return (
    <div className="fixed z-50 h-screen top-0 left-0 flex flex-col justify-end p-4">
      <div className="flex flex-col-reverse gap-4 backdrop-blur-lg bg-white/40 border border-white/10 rounded-full p-1.5 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] h-max transition-all duration-30">
        <button
          className="text-2xl font-bold p-3 rounded-full text-dark transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95"
          onClick={handleToggle}
        >
          {isOpen ? <IoClose /> : <IoLanguage />}
        </button>
        <button
          className={clsx(
            'font-bold p-3 rounded-full text-dark backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95',
            !isOpen && 'absolute -z-10 hidden'
          )}
        >
          PT
        </button>
        <button
          className={clsx(
            'font-bold p-3 rounded-full text-dark backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95',
            !isOpen && 'absolute -z-10 hidden'
          )}
        >
          EN
        </button>
      </div>
    </div>
  )
}

export default Dock
