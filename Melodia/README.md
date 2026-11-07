# Melodia

Version 1.2 adds step-by-step playing methods, original practice patterns and read-aloud demonstration scripts for all 12 instruments. Open an instrument and scroll to **How to play**, **Beginner practice** and **Example demonstration script**. These are text guides to try on a real instrument; no audio playback was added.

The modern interface includes a dark theme, a purple instrument spotlight, family cards, responsive instrument grids, card-level favourite buttons and quiz progress/answer feedback. It uses the existing local dataset and storage format.

<img src="previews/home.png" width="230" alt="Melodia home screen" /> <img src="previews/explore.png" width="230" alt="Instrument explorer" /> <img src="previews/quiz.png" width="230" alt="Music quiz" />

Offline React Native / Expo SDK 54 learning project. Eight screens: Home, Explore, Categories, Search, Details, Favourites, Quiz, Profile.

## Run

For a fresh Git working copy:

```sh
git clone --branch melodia-app https://github.com/ArunPragas2001/3.1-new.git
cd 3.1-new/Melodia
npm ci
npm run check
npm run web
```

If you already have a clone, use the existing `Melodia` folder instead of cloning again. Use Node.js 22 LTS. For the Expo QR-code session run `npm start`; the phone client must support **Expo SDK 54**.

[SETUP.md](SETUP.md) explains the repository/app folder difference, ZIP extraction, Windows terminal setup, phone/emulator options, troubleshooting and the daily Git workflow. Git commands use the repository root (`3.1-new`); npm commands use the app folder (`Melodia`).

Downloading the project and installing dependencies need internet. The images and JSON are already bundled. A development preview needs its Metro server; an installed standalone native build is required for an airplane-mode cold-launch demonstration. The source ZIP is not an APK.

## Understand the files
src/data holds 12 curated instrument records and eight questions. The answer field is the zero-based option index. src/components contains reusable UI. src/screens contains eight screens. src/storage loads and saves the shared library. src/navigation defines tabs and stack navigation. src/theme holds styles and colours.

Favourites and saved quiz scores persist. Tap Save score to profile after completing a quiz. The latest 50 saved results are retained. Unfinished quizzes are temporary and restart after closing the app.

Popular picks are a fixed editorial selection. Keyboard is a browsing category; piano also uses struck strings. Wind includes brass and woodwind instruments.

Review STUDY_GUIDE.md and TESTING.md. Adapt and understand the project, follow your lecturer's rules for assistance, and do not claim generated code or third-party photographs as independently authored work. Source photos and licences are in assets/image-credits.json and Profile. Title registration and final coursework submission remain your responsibility. Make real commits as you work; do not invent past history.

Image downloads were performed only during project preparation. The generated application contains no network-fetch logic. Keep the image credits when redistributing the project.

## Instrument learning reference

[INSTRUMENT_GUIDE.md](INSTRUMENT_GUIDE.md) collects every playing method and example script in one offline document. The app displays the same content dynamically from src/data/instruments.json through the reusable PlayingGuide component.

Each guide states its assumed instrument type or setup. It provides four playing steps, an exercise with counts/notes or strokes, notation explanations, a goal, a spoken demonstration and a beginner tip. The short patterns are original learning examples, not recordings or complete pieces.

Run `npm run check` to check that every instrument has its full guide, local image and unique script.

<img src="previews/playing-method.png" width="230" alt="Step-by-step playing method" /> <img src="previews/practice-pattern.png" width="230" alt="Beginner practice pattern" /> <img src="previews/demo-script.png" width="230" alt="Example demonstration script" />
