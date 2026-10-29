# GameMatch — SWYNEX Task 2

## Implementation
A mobile-responsive web application built from scratch using **HTML, CSS and vanilla JavaScript**.

No React Native, Flutter, or other framework is claimed.

## Included functionality
- Welcome screen
- Platform selection
- Playstyle selection
- Personalized recommendation ranking
- Gaming-session-time preference and matching
- "Why it matches you" explanation based on platform, playstyle and session time
- Platform-aware recommendations (for example, mobile selections do not recommend PC-only games)
- Game recommendation cards with artwork and fallback
- Game details screen
- Save/unsave games
- Saved Games screen
- Filters for saved games
- Back navigation, skip flow, try-another flow and change-preferences flow
- Responsive mobile-first UI

## Run locally
1. Open this folder in VS Code.
2. Open `index.html`.
3. Use Live Server (recommended) or open the file directly in a browser.
4. Internet access is only needed for the optional external game artwork; the app itself still works without it.

## Project files
- `index.html` — screen structure
- `style.css` — responsive visual design
- `script.js` — navigation, selection, recommendation logic and saved games

- Strict genre/playstyle matching so a Horror selection cannot return non-horror games
- Image-backed genre/playstyle selection cards


### Game artwork
Each recommendation includes game artwork, with a fallback emoji if an external image fails to load.
