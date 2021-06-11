import { Mail } from '../models/models';
import Mailer from '../../../components/mail'

class MailUsecase {
    async sendMail(mail: Mail): Promise<boolean> {
        return await Mailer.testMail(mail);
    }
}

export default new MailUsecase();
