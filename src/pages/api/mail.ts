import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactEmail } from '@/services/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verifica se o método é POST
  if (req.method !== 'POST') {
    return res.status(405).json({ err: 'Invalid HTTP Method' })
  }

  try {
    // O Next.js já faz o parsing do body automaticamente (quando o conteúdo é JSON)
    const { name, from, subject, text } = req.body

    const contactEmail = new ContactEmail({
      name,
      from,
      subject,
      text
    })

    const emailInfo = await contactEmail.sendEmail()

    return res.status(200).json(emailInfo)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ err: 'Erro ao enviar o email' })
  }
}
