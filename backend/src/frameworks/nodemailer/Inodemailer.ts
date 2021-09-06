import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import Nodemailer from './';

interface INodemailer{
    sendEmail(emailContent: string, subject: string, from: string, to: string): Promise<void>
};

export { INodemailer, Nodemailer as Mailer};
