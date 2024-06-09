import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [text, setText] = useState('')

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingSubmit(true)
    try {
      const emailData = { name, from, text }
      // const res = await axios.post('/api/send-contact-email', emailData)
      // console.log('res:', res)
      console.log('res:', name, from, text)
      alert(`submit, ${name}, ${from}, ${text}`)
    } catch (err) {
      console.log('err:', err)
      alert(<div style={{ textTransform: 'initial' }}>error</div>)
    } finally {
      setIsLoadingSubmit(false)
    }
  }
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-[90vh] relative z-10">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.jpg" alt="logo" height={30} width={30} />
        </div>
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
            className="bg-black text-white outline-none border-2 border-white rounded-md px-4 py-2"
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
            className="bg-black text-white outline-none border-2 border-white rounded-md px-4 py-2"
            value={from}
            onChange={e => setFrom(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Additional information"
            required
            maxLength={1048576}
            className="bg-black text-white outline-none border-2 border-white rounded-md px-4 py-2 min-h-[16em]"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-md px-4 py-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
