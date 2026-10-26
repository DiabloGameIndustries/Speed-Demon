# Project Speed Demon — game updates

This repository publishes the latest build of **Project Speed Demon** through GitHub Pages.

- `index.html`, `lib/`, `fonts/`: the game itself. It can also be played in a browser at the Pages address.
- `version.json`: the current version number and a checksum of `index.html`.

The desktop app checks `version.json` each time it starts. If a newer version is listed and its checksum matches, the app downloads `index.html` and runs it. Without an internet connection it plays the last version it has.
