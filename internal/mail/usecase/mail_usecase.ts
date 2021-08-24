import {Mail} from '../models/models';
import Mailer from '../../../components/mail'

class MailUsecase {
    async sendMail(mail: Mail): Promise<boolean> {
        await Mailer.sendMail(mail);
        return true;
    }
}

export default new MailUsecase();
