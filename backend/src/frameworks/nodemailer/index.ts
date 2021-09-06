import nodemailer from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { transport } from '../../config';
import { INodemailer } from "./Inodemailer";


class Nodemailer implements INodemailer{

    private static INSTANCE: any;

    private nodemailer(){
        return nodemailer.createTransport(transport as SMTPConnection.Options);
    }

    public static getInstance(): nodemailer.Transporter<SMTPTransport.SentMessageInfo>{
        if(!Nodemailer.INSTANCE){
            Nodemailer.INSTANCE = new Nodemailer().nodemailer();
        }

        return Nodemailer.INSTANCE as nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
    }

    async sendEmail(emailContent: string, subject: string, from: string, to: string): Promise<void>{
        const mail = {
            from,
            to,
            subject,
            text: emailContent,
            html: `<h1>${subject}</h1>`
        };

        await Nodemailer.getInstance().sendMail(mail);
    }
};

export default new Nodemailer();