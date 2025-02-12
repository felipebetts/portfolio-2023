import React, { useState } from 'react'

import { delay } from '@/utils/helpers'

const Contact = () => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
  const [isMailSent, setIsMailSent] = useState(false)

  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [text, setText] = useState('')

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingSubmit(true)
    try {
      const emailData = { name, from, text }
      const res = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setIsLoadingSubmit(false)
      setIsMailSent(true)
      await delay(2000)
      setIsMailSent(false)
    } catch (err) {
      console.log('err:', err)
    } finally {
      setIsLoadingSubmit(false)
    }
  }
  return (
    <div className="bg-[var(--color-primary-500)] text-[var(--color-primary-100)] flex flex-col justify-center pt-10 min-h-[90vh] relative z-10">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <h2 className="text-4xl font-bold">Send me a message</h2>
        <form
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
          onSubmit={handleSendEmail}
        >
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder="Company Name"
            className="bg-[var(--color-primary-500)] text-[var(--color-primary-100)] outline-none border-2 border-[var(--color-primary-100)] rounded-md px-4 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            id="email"
            name="email"
            required
            maxLength={128}
            type="email"
            placeholder="Your Email"
            className="bg-[var(--color-primary-500)] text-[var(--color-primary-100)] outline-none border-2 border-[var(--color-primary-100)] rounded-md px-4 py-2"
            value={from}
            onChange={e => setFrom(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Additional information"
            required
            maxLength={1048576}
            className="bg-[var(--color-primary-500)] text-[var(--color-primary-100)] outline-none border-2 border-[var(--color-primary-100)] rounded-md px-4 py-2 min-h-[16em]"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[var(--color-primary-100)] text-[var(--color-primary-500)] rounded-md h-12 w-32" //  px-4 py-2
              disabled={isLoadingSubmit || isMailSent}
            >
              {isMailSent ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="size-5 text-[var(--color-primary-500)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{' '}
                    </g>
                  </svg>
                  <div>Sent!</div>
                </div>
              ) : isLoadingSubmit ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="size-5 animate-spin text-[var(--color-primary-500)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <div>Sending...</div>
                </div>
              ) : (
                <>Send</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
