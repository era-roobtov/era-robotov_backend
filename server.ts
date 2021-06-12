import mail from './internal/mail/delivery/mail_delivery';

const port: number = 5000;

const app = require('fastify')({});

app.register(require('fastify-cors'), {
    origin: "*",
    methods: ["POST"]
})

app.addContentTypeParser('application/json',
    { parseAs: 'buffer' },
    (req, body, done) => {
        if (body.length > 0) {
            done(null, JSON.parse(body));
        } else {
            done(null, {});
        }
    });

app.listen(port, '127.0.0.1', () => {
    console.log(`Started on port ${port}`);
});

app.post('/api/mail', mail.resendMail);
