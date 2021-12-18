
import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  service: 'Gmail',
  port: 2525,
  auth: {
    user: process.env.user,
    pass: process.env.pass
  },
  // increse the connection timeout
  connectionTimeout : 5*60*1000
});

  try {
   const emailRes = await transport.sendMail({
      from: email,
      to: 'abenezerkifle000@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
      // console.log('Message Sent');
    });

    // console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
