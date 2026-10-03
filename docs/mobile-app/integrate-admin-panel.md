---
sidebar_position: 13
---

# Integrate with Admin Panel

Open the API constants file and replace the `domain` value with your admin panel URL. Make sure to include `https://` in the URL.

- **Customer app:** `lib/core/api/api_constants.dart`
- **Driver app:** `lib/core/constants/api_constants.dart`

```dart
static const String domain = "ENTER YOUR BASE URL HERE";
```

> **Note:** Do not add a trailing `/` or `/api` to the domain. The app builds the API base URL from it automatically.

![Change Database URL](/images/app/changeDatabaseUrl.png)

> **Important:** The admin panel URL must start with `https://` for security reasons. Do not use `http://` as it is not secure.
