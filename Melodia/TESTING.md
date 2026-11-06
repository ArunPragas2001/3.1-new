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
