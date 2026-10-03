---
sidebar_position: 4
---

# How to change app version

Update the app version before every upload to the Google Play Store or Apple App Store.

> **Note:** eTaxi has two apps — the **Customer app** and the **Driver app**. Each app has its own `pubspec.yaml` and is versioned separately, so repeat these steps in each app you are releasing.

## Version Format

The version is set in `pubspec.yaml` in the format `version: A.B.C+X`, for example:

```yaml
version: 1.0.0+1
```

| Part | Example | Meaning | Android | iOS |
| --- | --- | --- | --- | --- |
| `A.B.C` (before `+`) | `1.0.0` | Version name shown to users | `versionName` | `CFBundleShortVersionString` |
| `X` (after `+`) | `1` | Internal build number | `versionCode` | `CFBundleVersion` |

## Versioning Rules

- **Version name (`A.B.C`)** — follow semantic versioning (`MAJOR.MINOR.PATCH`):
  - `MAJOR` for breaking or major changes (e.g. `1.0.0` → `2.0.0`)
  - `MINOR` for new features (e.g. `1.0.0` → `1.1.0`)
  - `PATCH` for bug fixes (e.g. `1.0.0` → `1.0.1`)
- **Build number (`X`)** — must be a **strictly increasing integer**. The Play Store and App Store reject any upload whose build number is equal to or lower than a previously uploaded build.

:::warning
Always **increment the build number** for every store upload, even if the version name stays the same (e.g. `1.1.0+2` → `1.1.0+3`).
:::

## Steps to Change the Version

1. Open `pubspec.yaml` in the app's root folder.
2. Update the `version` line, e.g. `version: 1.1.0+2`.
3. Save the file.
4. Run:

   ```bash
   flutter clean
   flutter pub get
   ```

### Android

Flutter reads `versionName` and `versionCode` from `pubspec.yaml` automatically, so no other Android files need to be edited.

![Android Version Change](/images/app/android_version_change.png)

Build the release bundle:

```bash
flutter build appbundle --release
```

### iOS

Flutter maps the version name to `CFBundleShortVersionString` and the build number to `CFBundleVersion`.

![iOS Version Change](/images/app/ios_version_change.png)

Xcode can keep the old values cached, so also check them in Xcode before building:

**Step 1 — Update the Generated file**

1. Open `ios/Runner.xcworkspace` in Xcode.
2. In the sidebar, go to **Runner → Flutter → Generated.xcconfig**.
3. Update the values to match `pubspec.yaml`:

   ```
   FLUTTER_BUILD_NAME=1.1.0
   FLUTTER_BUILD_NUMBER=2
   ```

**Step 2 — Update Build Settings**

1. Select **Runner** in the sidebar, then **Runner** under **TARGETS**.
2. Open the **Build Settings** tab.
3. Make sure the **All** and **Combined** filters are selected.
4. Search for `FLUTTER_BUILD_NAME` and `FLUTTER_BUILD_NUMBER` (under the **User-Defined** section) and update them to match `pubspec.yaml`.

![iOS Build Settings](/images/app/change_version_ios1.png)

Build the iOS release:

```bash
flutter build ipa --release
```
