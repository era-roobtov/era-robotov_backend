import { Mail } from '../models/models';
import Mailer from '../../../components/mail'

class MailUsecase {
    async sendMail(mail: Mail): Promise<boolean> {
        if (mail.aos) {
            return await Mailer.testMail(mail);
        }
        return false;
    }
}

export default new MailUsecase();
