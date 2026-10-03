---
sidebar_position: 16
---

# Generate Release Version

## Android Release Configuration

Both apps use the Kotlin DSL Gradle file `android/app/build.gradle.kts` and read the signing keys from `android/key.properties`.

### 1. Generate a Keystore

```bash
keytool -genkey -v -keystore android/app/keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias <your-alias>
```

### 2. Create `android/key.properties`

**Customer app:**

```properties
storePassword=your-store-password
keyPassword=your-key-password
keyAlias=your-key-alias
```

> **Important (Customer app):** The keystore file must be placed at exactly `android/app/keystore.jks`. The customer app signs **both debug and release** builds with this keystore (required for Google Sign-In), so even `flutter run` will fail until `android/key.properties` and `android/app/keystore.jks` exist.

**Driver app:**

```properties
storePassword=your-store-password
keyPassword=your-key-password
keyAlias=your-key-alias
storeFile=keystore.jks
```

> **Note (Driver app):** `storeFile` is relative to the `android/app` folder (or use an absolute path).

### 3. Signing Configuration

The signing configuration is already set up in `android/app/build.gradle.kts`. Make sure the release build type uses the `release` signing config:

```kotlin
buildTypes {
    release {
        signingConfig = signingConfigs.getByName("release")
        isMinifyEnabled = false
        isShrinkResources = false
    }
}
```

![Release Configuration](/images/app/releaseAPK.png)

> **Important:** Add the SHA-1 and SHA-256 of this keystore in Firebase, otherwise Google Sign-In and phone authentication will not work. You can get them with:
>
> ```bash
> keytool -list -v -keystore android/app/keystore.jks -alias <your-alias>
> ```

## Important Notes

- Never commit your keystore file or passwords to version control
- Store your keystore file securely
- Keep a backup of your keystore file - if you lose it, you won't be able to update your app on the Play Store

## Generating Release APK

1. Open terminal in your project root directory
2. Run the following command:
   ```bash
   flutter build apk --release
   ```
3. The release APK will be generated at:
   ```
   build/app/outputs/flutter-apk/app-release.apk
   ```
4. For the Play Store, build an App Bundle instead:
   ```bash
   flutter build appbundle --release
   ```
   The bundle will be generated at `build/app/outputs/bundle/release/app-release.aab`.

## iOS Release Configuration

For iOS release builds:

1. Open Xcode
2. Select your target
3. Go to Signing & Capabilities
4. Ensure you have:
   - Valid provisioning profile
   - Valid distribution certificate
   - Correct team selected
   - Correct bundle identifier

## Generating iOS Release

1. Open terminal in your project root directory
2. Run the following command:
   ```bash
   flutter build ios --release
   ```
3. Open the generated Xcode project:
   ```bash
   open ios/Runner.xcworkspace
   ```
4. In Xcode:
   - Select "Any iOS Device" as the build target
   - Go to Product > Archive
   - Follow the steps to upload to App Store Connect

## Troubleshooting

Common issues and solutions:

- **Android signing issues**:
  - Verify `android/key.properties` exists and the keystore file exists in the correct location
  - Check keystore passwords and alias are correct
  - Ensure `signingConfig` is set to `signingConfigs.getByName("release")`

- **iOS signing issues**:
  - Verify certificates are valid in Apple Developer account
  - Check provisioning profiles are up to date
  - Ensure bundle identifier matches your app's configuration
