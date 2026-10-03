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

### Get Web Client ID from Firebase

1. Open your [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Build → Authentication → Sign-in method**.
3. Enable **Google** if it is not enabled, then click the **pencil (edit)** icon on the Google provider row.

![Google Sign In - Provider](/images/app/googleSignIn1.png)

4. In the Google provider settings, open **Web SDK configuration**.
5. Copy the **Web client ID** from here. This is the key you need for the app.

![Google Sign In - Web Client ID](/images/app/googleSignIn2.png)

> **Note:** Firebase usually fills Web client ID / Web client secret automatically when Google Sign-In is enabled. You mainly need to **copy the Web client ID** and paste it into the app code.

### Set Web Client ID in App (Customer App)

> **Note:** This step applies to the **customer app** only. The driver app reads the Web client ID automatically from `android/app/google-services.json`, so make sure you have added the latest `google-services.json` file (downloaded after enabling Google Sign-In) to the driver app.

1. Open `lib/features/auth/controller/auth_controller.dart`.
2. Paste the Web client ID in `_googleWebClientId`:

```dart
static const _googleWebClientId =
  'ENTER YOUR GoogleWebClientId HERE';
```

Replace `ENTER YOUR GoogleWebClientId HERE` with the Web client ID copied from Firebase.

![Google Sign In - App Code](/images/app/googleSignIn3.png)

## Apple Sign-In (iOS only)

> **Note:** Apple Sign-In is shown only on **iOS**. The apps send the Apple identity token directly to the backend, so you don't need to enable the Apple provider in Firebase.

1. Open the iOS project (`ios/Runner.xcworkspace`) of the app in Xcode.
2. Select the **Signing & Capabilities** tab, add **Sign In with Apple** as a new capability, then select your team in the **Signing** section.

   ![Apple Sign In Xcode](/images/app/apple2.png)

3. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal.
4. Repeat these steps for both the **Customer App** and the **Driver App**.
