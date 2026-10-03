---
sidebar_position: 5
---

# Integrate with Firebase

For detailed step-by-step instructions on Firebase integration, including Android and iOS setup, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase).

The guide covers:
- Firebase project creation
- Android app integration
- iOS app integration
- Configuration files setup
- iOS notification settings
- Additional Firebase features and settings

## Add SHA Keys and Config Files

> **Important:** Add the **SHA1 and SHA256** keys of **both** apps (debug and release/Play Store signing keys) in Firebase. Then download a fresh `google-services.json` / `GoogleService-Info.plist` into each app. Without them, Phone OTP and Google Sign-In fail on Android. See [Add SHA1 & SHA256 Keys](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase#-add-sha1--sha256-keys-in-firebase) and [iOS Authentication Setup](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase/#-for-ios-authentication-setup).

Next: [Firebase Billing Setup](./firebase-billing.md) and [Firebase Authentication](./firebase-authentication.md).

**Additional Resources:**

- For detailed Firebase setup and configuration: [Firebase Setup Guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase)
