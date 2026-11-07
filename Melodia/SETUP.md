# Set up Melodia on your computer

These instructions apply to the `melodia-app` branch of `ArunPragas2001/3.1-new`.

## 1. Install the development tools

Install Node.js 22 LTS, Git and VS Code. Open a new terminal after installation and check:

```sh
node --version
npm --version
git --version
```

Node.js includes npm. On Windows, if PowerShell blocks `npm.ps1`, select **Command Prompt** from VS Code's terminal dropdown and run the commands there.

## 2. Get a working copy with Git history

Run the following from the directory where you want to keep the repository, for example your Desktop:

```sh
git clone --branch melodia-app https://github.com/ArunPragas2001/3.1-new.git
cd 3.1-new
```

If you already cloned the repository, open that existing folder instead. Before starting new work from a clean working tree:

```sh
git switch melodia-app
git pull --ff-only origin melodia-app
```

If Git reports local changes or a conflict, inspect `git status` before continuing. Keep your local work; do not use a reset command to discard it.

The two folders have different roles:

```text
3.1-new/              Repository root: use Git commands here
├── Melodia/          App folder: use npm and Expo commands here
│   ├── package.json
│   ├── App.js
│   └── src/
├── Melodia.zip       Optional downloadable source package
└── ...               Other existing coursework
```

If you only downloaded `Melodia.zip`, extract it and open the inner folder containing `package.json`. You can run the app there, but a ZIP extraction has no Git history. Use a clone for the daily commit workflow.

## 3. Install the locked dependencies

From the repository root:

```sh
cd Melodia
npm ci
```

The first installation needs internet. Images and JSON are already included; there is no separate image-download step. Run `npm ci` again when you need a clean installation or the dependency lockfile changes, rather than as a mandatory daily task.

## 4. Check the local dataset

From the app folder:

```sh
npm run check
```

This validates all 12 instrument records, local images, playing-guide fields, unique demonstration scripts, family counts and quiz answer indices. It is a data check, not a complete interface or native-device test.

## 5. Start a browser preview

From the app folder:

```sh
npm run web
```

Open the local address printed by Expo. Leave the terminal running while using the preview. Press Ctrl+C in that terminal when you want to stop the server.

For a normal Expo development session instead:

```sh
npm start
```

Then press `w` for the browser. Use one preview method at a time so you do not accidentally run multiple servers.

## 6. Open it on a phone or emulator

The project uses Expo SDK 54. Choose a client or development build that supports SDK 54.

- **Android phone:** see the compatible Expo Go versions at https://expo.dev/go. Start Expo, keep the phone and computer on the same Wi-Fi, and scan the QR code in Expo Go.
- **Physical iPhone:** the App Store Expo Go version may support a newer SDK only. If it does not support SDK 54, use a matching development build or follow Expo's SDK upgrade guide. An incompatible client will not be fixed by clearing the cache.
- **Android emulator:** start an emulator configured through Android Studio, then run `npm run android` from the app folder.
- **iOS simulator:** local simulator development requires macOS and Xcode. Run `npm run ios` from the app folder with the simulator available.

If a phone cannot reach Metro, check that it is using the correct QR code, that both devices are on the same network and that the development server is still running. Check whether the computer's firewall allows the local development connection.

## 7. Know what offline operation means

The instrument records, pictures and lesson text are bundled, while favourites and saved quiz scores use local storage. A development preview still needs its Metro server. For the assignment's offline cold-launch test, install a standalone native build, stop Metro, enable airplane mode and launch the installed app again.

`npx expo export --platform android` checks the JavaScript/assets export; it does not create or install an APK. Follow Expo's native-build instructions when preparing the device build.

## 8. Troubleshooting

| Symptom | What to check |
| --- | --- |
| `package.json` cannot be found | Run npm commands in the `Melodia` app folder. |
| `Not a git repository` | Run Git commands inside the cloned `3.1-new` repository, rather than an extracted ZIP. |
| `npm` is not recognised | Install Node.js and reopen the terminal. |
| PowerShell blocks `npm.ps1` | Select Command Prompt in the VS Code terminal dropdown. |
| Expo reports an incompatible SDK | Use a client/build compatible with SDK 54 or perform the official SDK upgrade process. |
| The preview shows stale code | Stop Expo and run `npx expo start --clear` from the app folder. This clears the bundler cache. |
| The default port is busy | Stop the old preview or accept another available port, then open the newly printed address. |
| A data check fails | Read its assertion message, correct the identified JSON/image field and rerun `npm run check`. |

## 9. Make a real daily commit

Before editing, update your clean checkout from the repository root. After editing, test the affected feature and run the data check from the app folder. Return to the repository root and review your changes:

```sh
git status
git diff -- Melodia
git add Melodia
git diff --cached --stat
git commit -m "Describe the improvement actually made"
git push origin melodia-app
```

Commit related source, data and documentation changes together. Dependencies, Expo state, build exports and logs are excluded through `.gitignore`. If nothing changed, there is nothing new to commit.

`git push` does not regenerate the root-level `Melodia.zip`. When preparing a new downloadable package, build it from the source and documentation while excluding `node_modules`, `.expo`, `dist` and `.git`, and commit the refreshed ZIP with the related changes.
