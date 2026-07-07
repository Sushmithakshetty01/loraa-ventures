# LoRaa Ventures One Page Website

A React + Vite one-page landing page for **LoRaa Ventures**, using a blue and white LoRaa Connect-inspired visual identity.

## Sections included

- Hero section with LoRaa Ventures positioning
- LoRaa Connect flagship product section
- Animated product preview and card effects
- Product modules
- People section with Dr. Hariprasad and phone placeholder
- Privacy Policy section
- Contact and footer links

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Important edits before deployment

In `src/main.jsx`, update:

```js
const LORAA_CONNECT_URL = 'https://loraa-connect.vikasanafoundation.org';
const EMAIL = 'contact@loraaventures.com';
const PHONE = '+91 ____ ____ ____';
```

Also update Dr. Hariprasad's phone placeholder inside the `people` array.

## Build for production

```bash
npm run build
```

Upload the generated `dist` folder to Vercel, Netlify, or any static hosting provider.
