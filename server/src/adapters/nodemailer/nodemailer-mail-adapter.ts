import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "073da41ffe0a30",
    pass: "44c67ad5a9ca52"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail ({subject, body}: SendMailData) {
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Julio <julioduarte.dev@gmail.com>',
    subject,
    html: body, 
  })

  }
}