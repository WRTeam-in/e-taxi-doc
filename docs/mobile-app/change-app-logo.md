---
sidebar_position: 14
---

# Change App Logo

For a comprehensive guide on customizing your app's appearance, including detailed steps for changing the app logo and other branding elements, please refer to our [Comprehensive Guide to App Customization](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/appicon).

## Generate Logo Automatically (Recommended)

Both apps use `flutter_launcher_icons` to generate the app icons for Android and iOS.

1. Replace the icon images with your logo using the same file names:
   - **Customer app:** `assets/icon/ic_launcher.png`, `assets/icon/forground.png`, `assets/icon/background.png`
   - **Driver app:** `assets/icons/ic_launcher.png`, `assets/icons/foreground.png`, `assets/icons/background.png`
2. If needed, change `adaptive_icon_background` (your brand color) in the `flutter_launcher_icons` section of `pubspec.yaml`.
3. Run the following command:

   ```bash
   dart run flutter_launcher_icons
   ```

## Add Logo Manually

For Android, open android > app > src > main > res and add here your logo according to device screen size

![Android App Icon](/images/app/androidAppIcon.png)

For IOS open ios > Runner > Assets.xcassets > AppIcon.appiconset here and add your logo according to different size.

![iOS App Icon](/images/app/iosAppIcon.png)
