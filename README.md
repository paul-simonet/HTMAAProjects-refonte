# HTMAA projects

Documentation site for three projects from the How to Make (Almost) Anything course at IFT, by Maxime Vial, Paul Simonet and Alexandre Le Port.

Live site: https://htmaa-projects.vercel.app

## Run it locally

Requires Node.js.

```sh
npm install
npm run dev
```

## Where things are

- `src/pages/`: one file per page (home, fish carousel, VGA synth, phone number game).
- `src/content/projects.ts`: the list of projects shown on the home page and in the header.
- `src/components/site/`: layout, figures, videos and section helpers.
- `src/index.css`: all the styling (colours and fonts are at the top).
- `src/assets/`: photos and videos, already resized. Resize new images to 1600 px on the long side before adding them.
- `public/downloads/`: files visitors can download. `vga_synth.ino` must stay identical to `src/content/vgaSketch.ts`.
