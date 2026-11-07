# Device testing checklist

1. Open all five tabs and three stack screens; test native Back.
2. Explore shows 12 records. Each category shows three; Show all families restores 12.
3. Search GUITAR with spaces and mixed case. Wind plus Guitar produces no results; clearing text gives three Wind instruments.
4. Save Guitar, open Favourites, close and relaunch. It remains saved. Remove and relaunch; it stays removed.
5. Answer the quiz correctly with indices 0,2,1,3,1,0,2,3: result 8/8. Check wrong answers, locked choices, feedback and restart.
6. Save a quiz result once; verify Profile and relaunch persistence.
7. Install a standalone build, stop Metro, enable airplane mode and cold-launch. Test every image, favourites and quiz saving.
8. Test small screens, larger text, keyboard entry and safe areas.

Commands: npx expo install --check; npx expo export --platform web; npx expo export --platform android.
Exports validate JavaScript and assets, not an installed APK. Native device testing is required before submission.

## Version 1.1 interface checks

- Test the heart on an instrument card, including the Favourites screen. A successful removal immediately updates the collection.
- Open Categories from Home. Select each family and confirm three instruments.
- Check the Home layout at 320, 390, 768 and 1280 pixels wide and verify the instrument grid adapts when resizing.
- Select a wrong quiz answer: it appears red and the correct answer appears green. The selected answer cannot be changed.
- Scroll to Next on a small screen. The next question and final result should start at the top.
- Expand and collapse image credits on Profile.
- Update an existing installation without clearing its data; previous favourites and saved quiz results should still appear.

## Version 1.2 learning content

- Run npm run check: all 12 records must contain setup, four method steps, a practice pattern with explanations and steps, a unique demonstration script and a tip.
- Open every instrument. Scroll to How to play and check that its setup, method, practice and demonstration belong to that instrument.
- Check long patterns at a small screen width. They can scroll horizontally without widening the whole page; method and script paragraphs should wrap normally.
- Try selecting/copying the pattern or demonstration text.
- Save and remove a favourite while viewing a long guide. Confirm the control remains reachable and the result persists after relaunch.
- Follow the stated instrument setup when trying a practice exercise; e.g. the accordion exercise assumes a piano accordion, and saxophone/trumpet note names are written notes.
