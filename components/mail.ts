import { Mail } from '../internal/mail/models/models';
import logger from "../logger/logger";
const gmailInputData = require('../configs/gmail_input_data.json');

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const MAIL_TO_ADRESS = 'nik_manz@mail.ru';

class Mailer {
    async testMail(mail: Mail): Promise<boolean> {
        try{
            const transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                auth: {
                    user: gmailInputData.login,
                    pass: gmailInputData.password
                },
            }))

            let result = await transporter.sendMail({
                from: '"Node js" <nodejs@example.com>',
                to: MAIL_TO_ADRESS,
                subject: 'Новый ученик',
                text: `Имя: ${mail.name}, почта: ${mail.email}, телефон: ${mail.telephoneNumber}, курсы: ${mail.courses}`,
            })

            return true;
        } catch (e) {
            logger.fatal(`Error in Mailer class: ${e.message}`);
            return false;
        }
    }
}

export default new Mailer();
