---
sidebar_position: 12
---

# How to Add Map API key for Address

> ⚠️ **NOTE:** If you are using free map API, location data may not be accurate or complete. For accurate location data, it is **strongly recommended** to use place API key.

1. For enabling billing and getting place API key, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase-billing)

2. **Admin panel:** Copy the place API key from Google Cloud Console and paste it into the admin `.env` file as shown below. Routes, place search and place details in both the Customer and Driver apps are fetched through the admin panel backend, which calls Google with this key.

   ![Map API 9](/images/app/mapAPI9.png)

3. **App:** In the Customer and Driver apps, the Google Maps key is set in `AndroidManifest.xml` (Android) and `AppDelegate.swift` (iOS) — see step 12 below.

4. To create the keys, follow the steps below.

5. Go to Google Cloud Platform. [Click here](https://cloud.google.com/)

6. Click on console.

   ![Map API 1](/images/app/mapAPI1.png)

7. Select your Firebase Project

   ![Map API 2](/images/app/mapAPI2.png)

8. Search for APIs, which are shown in below image.

   ![Map API 3](/images/app/mapAPI3.png)

9. Click on Enable to, enable that APIs

   ![Map API 4](/images/app/mapAPI4.png)
10. Do above steps for the following APIs (enable each API one by one by searching):

   - Maps SDK for Android
   - Maps SDK for iOS  
   - Geocoding API
   - Geolocation API
   - Directions API
   - Places API

11. Go to Credential Tab. You will find your Android and iOS API keys.

    ![Map API 6](/images/app/mapAPI6.png)

12. You have to setup those above API keys for both Platform, in **both** the Customer and Driver apps.

    ### Android Setup

    - Next, open android ‣ app ‣ src ‣ main ‣ AndroidManifest.xml and paste the Google Maps meta data tag into your application tag before the activity tag, placing the API key you copied before to replace `YOUR_API_KEY_HERE`.

      ```xml
      <meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY_HERE" />
      ```

    **Note**: For the value field, please paste in your API Key from the Google Maps API registration process.

    ![Map API 7](/images/app/mapAPI7.png)

    ### iOS Setup

    - Next, open the ios ‣ Runner ‣ AppDelegate.swift file and paste the following code at shown in image.

      ```swift
      GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
      ```

    **Note**: Again, for the value field please paste in your API Key from the registration process.

    ![Map API 8](/images/app/mapAPI8.png)
