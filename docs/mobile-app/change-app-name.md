---
sidebar_position: 15
---

# Change App Name

## Android

Go to `android/app/src/main/AndroidManifest.xml` and change the app name in `android:label` as shown in the image. Replace `eTaxi` (customer app) or `eTaxi Driver` (driver app) with your app name.

![Android App Name](/images/app/androidAppName.png)

## iOS

Open this project in Xcode and enter your app name in the **Display Name** field as shown in the image.

![iOS App Name](/images/app/iosAppName.png)

## App Constants

Also change the default app name in `lib/core/constants/constants.dart` as shown in the image:

```dart
// Customer app
String appName = "eTaxi";

// Driver app
String appName = "eTaxi Driver";
```

> **Note:** This is only the default value. If an **App Name** is set in the Admin Panel settings, the app replaces this value with it at startup.

![App Name](/images/app/appName2.png)
