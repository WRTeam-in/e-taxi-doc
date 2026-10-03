---
sidebar_position: 7
---

# Firebase Authentication

Both the **Customer App** and the **Driver App** support the following sign-in methods:

| Sign-in method | Customer App | Driver App | Where to configure |
| --- | :---: | :---: | --- |
| [Phone (OTP)](#phone-otp) | ✅ | ✅ | Firebase Console → Authentication → Sign-in method |
| [Email/Password](#emailpassword) | ✅ | ✅ | Firebase Console → Authentication → Sign-in method |
| [Google](#google-sign-in) | ✅ | ✅ | Firebase Console → Authentication → Sign-in method |
| [Apple](#apple-sign-in-ios-only) (iOS only) | ✅ | ✅ | Xcode capability |

> **Important:** Before you start, make sure you have added the **SHA1 and SHA256** keys of both apps in Firebase and added the latest `google-services.json` / `GoogleService-Info.plist` files. See [Integrate with Firebase](./integrate-firebase.md).

For general steps with screenshots, see the [Enable Firebase Authentication guide](https://marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase#-enable-firebase-authentication).

## Phone (OTP)

> **Note:** Phone authentication works only on the **Blaze** plan. Upgrade your project first by following [Firebase Billing Setup](./firebase-billing.md).

1. Open the [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Authentication → Sign-in method**, click **Add new provider**, enable **Phone** and save.

   ![Phone Auth](/images/app/phone1.png)

3. Go to **Authentication → Settings → SMS region policy**, choose **Allow**, and add the countries where your customers and drivers will log in. OTP SMS is not sent to regions that are not allowed.

## Email/Password

1. Go to **Authentication → Sign-in method**, click **Add new provider**, enable **Email/Password** and save.

> **Note:** When a user signs up with email, Firebase sends them a **verification email**, and they can log in only after verifying their email address. You can change the sender name and the email text in **Authentication → Templates → Email address verification**.

## Google Sign-In

### Enable Google in Firebase

1. Open your [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Build → Authentication → Sign-in method**.
3. Enable **Google** if it is not enabled, then click the **pencil (edit)** icon on the Google provider row.

![Google Sign In - Provider](/images/app/googleSignIn1.png)

4. In the Google provider settings, open **Web SDK configuration** and check that a **Web client ID** is filled in. Firebase usually fills it in automatically when Google Sign-In is enabled. Save the provider.

![Google Sign In - Web Client ID](/images/app/googleSignIn2.png)

### Add the Latest Config Files to the Apps

You don't need to paste any client ID into the app code. Both the **Customer App** and the **Driver App** read the Google client IDs automatically from the Firebase config files:

| Platform | File | What it provides |
| --- | --- | --- |
| Android | `android/app/google-services.json` | The Web client ID (the `oauth_client` entry with `"client_type": 3`) |
| iOS | `ios/Runner/GoogleService-Info.plist` | `CLIENT_ID` and `REVERSED_CLIENT_ID` |

1. **After** enabling Google Sign-In (and adding your SHA1/SHA256 keys), download a fresh `google-services.json` and `GoogleService-Info.plist` from **Project settings → Your apps**.
2. Replace the existing files in **both** apps with the new ones.
3. **iOS only:** open `ios/Runner/Info.plist` and set the URL scheme under `CFBundleURLTypes → CFBundleURLSchemes` to the `REVERSED_CLIENT_ID` value from your `GoogleService-Info.plist`:

```xml
<key>CFBundleURLSchemes</key>
<array>
    <string>com.googleusercontent.apps.YOUR-REVERSED-CLIENT-ID</string>
</array>
```

> **Note:** If the config files were downloaded **before** Google Sign-In was enabled, they will not contain the OAuth client IDs, and Google Sign-In will fail. Download them again and replace the old files.

## Apple Sign-In (iOS only)

> **Note:** Apple Sign-In is shown only on **iOS**. The apps send the Apple identity token directly to the backend, so you don't need to enable the Apple provider in Firebase.

1. Open the iOS project (`ios/Runner.xcworkspace`) of the app in Xcode.
2. Select the **Signing & Capabilities** tab, add **Sign In with Apple** as a new capability, then select your team in the **Signing** section.

   ![Apple Sign In Xcode](/images/app/apple2.png)

3. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal.
4. Repeat these steps for both the **Customer App** and the **Driver App**.
