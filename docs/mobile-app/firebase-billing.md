---
sidebar_position: 6
---

# Firebase Billing Setup

Some services used by the eTaxi apps, such as **Firebase Phone Authentication (OTP)** and **Google Maps, Places and Directions APIs**, need billing enabled once usage goes beyond the free tier. Upgrade your Firebase project to the **Blaze (pay-as-you-go) plan** and link a billing account. Otherwise, OTP login, map loading and location search may not work.

For detailed step-by-step instructions, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase-billing/). Follow **every step in the order shown**.

The guide covers:
- Upgrading your Firebase project from the Spark plan to the Blaze plan
- Creating or linking a Google Cloud billing account
- Enabling the required Google Cloud APIs (Maps SDK for Android/iOS, Places API, Directions API, etc.)
- Creating and restricting API keys
- Adding the API key to your app
- Verifying the billing setup

> **Note:** Complete this step before setting up [Firebase Phone Authentication (OTP)](./firebase-authentication.md#phone-otp) and [Google Map](./google-map.md).

**Additional Resources:**

- For detailed Firebase billing setup: [Firebase Billing Setup Guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase-billing/)
