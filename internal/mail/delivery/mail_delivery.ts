import MailUsecase from '../usecase/mail_usecase';
import { Mail } from '../models/models';
import logger from "../../../logger/logger";

class MailDelivery {
    async resendMail(req, res) {
        try {
            const mail: Mail = req.body;

            const isOk = await MailUsecase.sendMail(mail);

            if (isOk) {
                res.code(200).send({status: 'OK'});
            } else {
                res.code(400).send({message: `Bad Request test message ${isOk}`});
            }
        } catch (e) {
            logger.fatal(`Error in MailDelivery class: ${e.message}`)
        }
    }
}

export default new MailDelivery();
