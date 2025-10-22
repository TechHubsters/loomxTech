LoomX server
---------------

This is a tiny Express server that accepts POST /api/request and forwards the request by email using SMTP (nodemailer).

Setup
1. Copy `.env.example` to `.env` and fill your SMTP credentials.
2. Install dependencies: `npm install` inside the `server` folder.
3. Start the server: `npm start` (or `npm run dev` with nodemon).

Environment variables
- `SMTP_HOST` - SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP port (465 or 587)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `TO_EMAIL` - address to receive requests (defaults to SMTP_USER)
- `FROM_EMAIL` - optional from address
