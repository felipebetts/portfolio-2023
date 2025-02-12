import nodemailer, { SendMailOptions, SentMessageInfo } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Assegure-se de que as variáveis de ambiente estejam definidas ou trate os possíveis undefined
const mailerProdConfig: SMTPTransport.Options = {
  host: process.env.EMAIL_HOST!, // use o operador "!" se tiver certeza de que a variável está definida
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
};

// A classe Email implementa SendMailOptions, que define as opções para o sendMail do nodemailer
class Email implements SendMailOptions {
  from?: string;
  to?: string | string[];
  subject?: string;
  text?: string;

  async sendEmail(): Promise<SentMessageInfo> {
    try {
      const mailer = nodemailer.createTransport(mailerProdConfig);
      // Aqui fazemos um type assertion, garantindo que o objeto possui as propriedades necessárias
      const info = await mailer.sendMail(this as SendMailOptions);
      return info;
    } catch (error) {
      console.log("sendEmail error:", error);
    }
  }
}

// Interface para tipar as propriedades que serão passadas para o construtor de ContactEmail
interface ContactEmailProps {
  name: string;
  from: string;
  subject: string;
  text: string;
}

class ContactEmail extends Email {
  constructor({ name, from, subject, text }: ContactEmailProps) {
    super();
    // O remetente é definido a partir da variável de ambiente
    this.from = process.env.EMAIL_USER!;
    // O destinatário também é definido via variável de ambiente
    this.to = process.env.EMAIL_RECEIVER!;
    this.subject = subject;
    this.text = `Message sent from:\nemail: ${from}\nname: ${name}\n\n${text}`;
  }
}

export { ContactEmail };
