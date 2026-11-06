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
