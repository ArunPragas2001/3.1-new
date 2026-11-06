# Version 1.1 validation — 6 November 2026

Passed:
- Web and Android JavaScript/asset exports for the redesigned application.
- Browser navigation through Home, Categories, Explore, Search, Details, Favourites, Quiz and Profile.
- Category selection/reset and combined case-insensitive, trimmed name search with family filters, including clearing an empty result.
- Card-level favourite buttons, saving from Details, removing from Favourites and persistence after reloading.
- Quiz: eight correct answers produce 8/8; saved scores persist in Profile after reloading. Incorrect answers show feedback and the correct answer; choices lock after selection.
- Next-question and result screens reset their scroll position to the top.
- Expandable image credits remain available on Profile.
- Home layout checked at 320, 390, 768 and 1280 pixels wide without document overflow.
- A pre-existing version 1.0 library containing a saved violin and a 4/8 score loads correctly in the redesign. The storage key and schema are unchanged.
- No browser runtime exceptions or invalid icon warnings in the checked flows.
- Screenshots in previews/ show the browser build at phone width; they are not native device screenshots.

The existing dataset and photograph files were not changed: 12 instruments, four families and eight questions remain local. No network calls were introduced in the application.

Not performed: physical Android/iOS testing, native APK compilation, native safe-area/accessibility audit or airplane-mode cold launch of an installed standalone build. Browser persistence uses AsyncStorage's web implementation. Follow TESTING.md on a device before submission.

Project-title registration and final coursework submission remain your responsibility. Git history records the initial upload and this redesign, not a history of independent student development.
