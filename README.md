# Fan Card Team Website

A responsive fan-card/ticket request website based on the supplied visual reference.

## Important: connect the form to your email

The form is prepared for Formspree.

1. Create a form at https://formspree.io/
2. Set the destination email to the email address where you want requests delivered.
3. Copy your Formspree form ID.
4. Open `index.html`.
5. Replace:

`https://formspree.io/f/YOUR_FORM_ID`

with your real Formspree endpoint, for example:

`https://formspree.io/f/abcdwxyz`

The submitted email will contain:
- Celebrity name (the person the card is being purchased for)
- Purchaser's full name
- Purchaser email
- Phone number
- Country
- Selected request/ticket type
- Message

## Run locally

Open `index.html` in a browser.

For production, upload the three files (`index.html`, `style.css`, `script.js`) to GitHub Pages, Netlify, Vercel, or another static host.

## Note

The site should only be used with truthful, authorized celebrity/fan-club branding and clear disclosure of who operates the site. Do not imply endorsement by a celebrity without permission.
