---
sidebar_position: 21
---

# Change Font in App

1. Go to `assets/font/` and add the `.ttf` files of your font.

   ![Change Font](/images/app/changeFont.png)

2. Go to `pubspec.yaml` and add your font under the `fonts:` section as shown in image.

   ```yaml
   fonts:
     - family: Outfit
       fonts:
         - asset: assets/font/OutfitRegular.ttf
           weight: 400
         - asset: assets/font/OutfitMedium.ttf
           weight: 500
         - asset: assets/font/OutfitSemiBold.ttf
           weight: 600
         - asset: assets/font/OutfitBold.ttf
           weight: 700
   ```

   ![Change Font 1](/images/app/changeFont1.png)

3. Go to `lib/core/constants/constants.dart` and change `fontFamily` to your font family name as shown in image.

   ```dart
   static const String fontFamily = "Outfit";
   ```

   ![Font Change Theme](/images/app/fontChangeTheme.png)
