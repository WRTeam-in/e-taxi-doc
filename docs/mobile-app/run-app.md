---
sidebar_position: 19
---

# Run This App

Open your terminal, navigate to your project path and execute the following commands to run this app.

```bash
flutter pub get
flutter run
```

If you are running the app on iOS for the first time, also install the pods:

```bash
cd ios
pod install
cd ..
```

> **Customer app:** Debug builds are also signed with the release keystore (required for Google Sign-In). `flutter run` will fail until `android/key.properties` and `android/app/keystore.jks` are set up. See [Generate Release Version](./generate-release-version.md).

## Common Fixes

If you face build issues, try cleaning the project and fetching the packages again:

```bash
flutter clean
flutter pub get
```

For iOS pod issues:

```bash
cd ios
pod deintegrate
pod install --repo-update
cd ..
```

Also check the `README.md` file in the project root for the full setup checklist (Firebase files, `assets/.env`, Android signing).
