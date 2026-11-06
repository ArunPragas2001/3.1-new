# Melodia study guide

Read instruments.json, InstrumentCard, ExploreScreen, SearchScreen, DetailsScreen, storage.js, LibraryContext, QuizScreen and AppNavigator in that order.

- Component: a reusable function that returns UI. InstrumentCard displays different records using props.
- Props: inputs from a parent. State: information that changes within a component.
- useState stores search text, selected family, quiz selection and score. Updating state rerenders the interface.
- FlatList renders the local array using renderItem. keyExtractor returns each stable instrument ID.
- filter returns matching records. map turns an array into rendered elements. find retrieves one instrument for Details.
- Search uses includes with lowercase, trimmed text. Both name and family conditions must pass.
- NavigationContainer manages routes. Bottom tabs switch main areas. The stack opens Categories, Search and Details. Details receives an ID through route.params.
- Lecture Day 12/13 used Expo Router. This project uses explicit React Navigation routes, so explain the actual APIs used here.
- useEffect with an empty dependency array loads storage at startup. A loading screen prevents actions before loading completes.
- Context shares favourites and scores across screens without passing props through every navigator.
- useRef stores a current saved snapshot and an immediate write lock without causing rerenders. The lock prevents overlapping storage writes.
- AsyncStorage is local asynchronous key-value storage. JSON.stringify serializes the library; JSON.parse restores it. It is not a remote database or secure storage for secrets.
- async/await handles asynchronous operations. try/catch shows failures. The UI updates only after a successful save.
- Favourites store IDs. includes checks whether an ID is saved; filter removes it; spread creates a new array when adding it.
- Quiz selected starts as null. An answer locks after selection. Next adds one point if the selected index equals answer, then advances or displays the result.
- State updates are scheduled. The quiz computes updated explicitly instead of assuming setScore immediately changes score.
- Conditional rendering shows feedback, results and empty states.
- All instrument data and image require calls are bundled, so no screen makes a network request.
- Persisted favourites and saved scores survive app restarts; search text and unfinished quiz progress do not.

Practise adding one instrument and its image require, adding a quiz question, changing the theme colour, and explaining the complete search-to-details flow. These are useful demonstrations for your lecturer.

## Understanding the modern interface (version 1.1)

- UI.js provides small reusable components: Button, Heading, Section, FamilyBadge, FamilyChips, EmptyState and Stat. They receive props just like InstrumentCard.
- useGrid uses React Native's useWindowDimensions to calculate card widths. Phones use two instrument columns and larger windows use three. The four family cards fit into four columns on wider screens.
- families.js holds local interface colours, icons and descriptions. instruments.json is still the instrument dataset.
- Pressable's style callback uses its pressed value to give touch feedback without an animation library.
- InstrumentCard uses the existing library context for its heart button. Adding or removing an ID updates all screens after storage succeeds.
- Quiz choices use conditional styles to show the correct answer in green and an incorrect selection in red. The score calculation is unchanged.
- Page uses a ScrollView ref and an effect to return to the top when the quiz question or result changes. This makes the next question visible after scrolling to the Next button.
- Image credits can be expanded on Profile. This uses ordinary boolean state and conditional rendering.
- The storage key and data shape did not change, so existing favourites and saved quiz scores continue to load.

Practise changing a family colour, adding a reusable Stat, and explaining how changing the window width changes the grid without modifying the dataset.

## Playing guides in version 1.2

Each instrument now has a playingGuide object in instruments.json. It contains setup text, a method array of titled steps, a practice object, a demonstration paragraph and a tip. Practice contains the title, tempo, pattern, legend, steps and goal. Nothing is fetched from a server.

DetailsScreen first finds the instrument by its ID, then passes item.playingGuide to PlayingGuide through props. PlayingGuide maps method steps and practice steps into reusable rows. The same component therefore displays different lessons for all 12 instruments without a separate screen or hardcoded conditional for each one.

For example, the guitar pattern uses open strings 1–2–3–2, while the drum pattern combines hi-hat, snare and bass drum on counted beats. These are text examples to demonstrate on an instrument, not JavaScript programs or audio controls.

To edit an exercise, change its practice fields in the JSON and run npm run check. To add an instrument, include the complete playingGuide shape as well as its usual fields, local image import and image credit. Explain why adding a field in JSON alone does not display it until the UI renders that field.

The pattern uses a monospace font so columns line up. A horizontal ScrollView lets long patterns remain readable on small screens. The demonstration paragraph is selectable so it can be copied for personal practice notes.
