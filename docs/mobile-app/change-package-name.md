---
sidebar_position: 3
---

# How to change package name

For detailed information about package name structure and best practices, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/packagename).

1. Unzip the downloaded code. After unzipping you will have eTaxi - Flutter Code zip folder. Unzip that folder and open it in Android Studio or Visual Studio Code.

2. Open ide terminal go to your project path and execute command

   ```bash
   flutter pub get
   ```

3. If you are running this app for ios then run these following commands in terminal.

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Change package name of android app
   Execute this command in your terminal

   ```bash
   dart run change_app_package_name:main com.yourcompany.appname
   ```
   
   > **Important Note:** Replace `com.yourcompany.appname` with your desired package name. The package name should follow the reverse domain name notation. The default package names are `com.wrteam.etaxi` (customer app) and `com.wrteam.etaxidriver` (driver app).

   ![Change Package Name](/images/app/changePackageName.png)

5. Change package name of ios app
   Open ios folder of this project in xcode. Go Select Runner->Targets->General->Identity and enter new package name in Build Identifier.

   ![Change iOS Package Name](/images/app/changePackageName1.png)


