const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration in environment variables');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

app.post('/api/request', async (req, res) => {
  try {
    const { name, email, service, details } = req.body;
    if (!name || !email || !service) return res.status(400).json({ error: 'Missing required fields' });

    const transporter = getTransporter();

    const toAddress = process.env.TO_EMAIL || process.env.SMTP_USER;

    const subject = `New service request: ${service} (from ${name})`;
    const text = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${details || '(none)'}\n`;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || user || 'no-reply@loomx.tech',
      to: toAddress,
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Error sending request email', err);
    return res.status(500).json({ error: 'Failed to send request' });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
