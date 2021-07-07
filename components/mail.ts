import { Mail } from '../internal/mail/models/models';
import logger from "../logger/logger";
const gmailInputData = require('../configs/gmail_input_data.json');

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const MAIL_TO_ADRESS = 'erarobotov@yandex.ru';

class Mailer {
    async sendMail(mail: Mail): Promise<boolean> {
        try{
            const transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                auth: {
                    user: gmailInputData.login,
                    pass: gmailInputData.password
                },
            }))

            let result = await transporter.sendMail({
                from: `"Era robotov" ${gmailInputData.login}`,
                to: MAIL_TO_ADRESS,
                subject: 'Новая заявка на курсы',
                text: `Поступила новая заявка на курсы. Данные для связи: ФИО: ${mail.name}, почта: ${mail.email}, 
                    телефон: ${mail.telephoneNumber}, пол: ${mail.sex}, возраст: ${mail.age}, курсы: ${mail.course.title}`,
            })

            return true;
        } catch (e) {
            logger.fatal(`Error in Mailer class: ${e.message}`);
            return false;
        }
    }
}

export default new Mailer();
