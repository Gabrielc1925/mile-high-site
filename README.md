# Mile High Pizza & Grill — Website

Marketing site for **Mile High Pizza & Grill**, 1010 S Peoria St, Aurora CO 80012.

## Stack
- **Svelte 5** + **Vite 8**
- Zero runtime dependencies (pure Svelte/CSS)
- Google Fonts: Cormorant Garamond + DM Sans (loaded via CDN in index.html)

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site locally
```

## Deployment

### Netlify (recommended)
1. Push repo to GitHub
2. Connect to Netlify → Build command: `npm run build` → Publish dir: `dist`
3. `_headers` and `_redirects` in `public/` are auto-applied

### Vercel
1. Push repo to GitHub
2. Import project in Vercel → Framework: Vite → Output: `dist`
3. `vercel.json` handles SPA routing + security headers + cache rules

### Manual / S3 / any CDN
```bash
npm run build
# Upload everything in dist/ — ensure your server serves index.html for all routes
```

## Security Headers Applied
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, mic, geolocation disabled)
- Content Security Policy (CSP) restricts script/font/frame sources
- Immutable cache headers on hashed assets (`/assets/*`)

## Delivery Platform Links
| Platform   | URL |
|------------|-----|
| Grubhub    | https://www.grubhub.com/restaurant/mile-high-pizza-and-grill-1010-s-peoria-st-aurora/8074288 |
| DoorDash   | https://www.doordash.com/en-US/store/mile-high-pizza-and-grill-aurora-28003167/ |
| Uber Eats  | https://www.ubereats.com/store/mile-high-pizza-and-grill-amun-inc-aurora/3EDv4A8gSbihFe93iaB8Kw |
| Postmates  | https://postmates.com/store/mile-high-pizza-and-grill-amun-inc-aurora/3EDv4A8gSbihFe93iaB8Kw |
| Slice      | https://slicelife.com/restaurants/co/aurora/80012/mile-high-pizza-grill-1010-s-peoria-st-aurora/menu |

## Updating Menu Prices
All menu data lives in one file: `src/lib/menuData.js`
Edit prices there and re-run `npm run build`.
