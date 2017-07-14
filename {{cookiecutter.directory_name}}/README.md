# {{cookiecutter.project_name}}

This is a React Native app for the {{cookiecutter.project_name}}.

## Setup

After cloning, run `bin/setup`.

## Tests

Run the tests with `yarn test`

# Releasing

1. Verify you are on the `master` branch.
1. Verify `.env.production` has the correct configuration values. Get these from
   another team member if you don't have them.
1. Bump the version with `bundle exec fastlane bump_version type:some_type`,
   where `some_type` is `patch`, `minor` or `major`.
1. Release a beta and test
  - iOS: Run `bundle exec fastlane ios beta` which will ship a new version to
      TestFlight. If you need to submit this to external testers, you'll need to do
      this through the iTunes Connect website.
  - Android: Run `bundle exec fastlane android build`. This will generate an APK
      locally at `android/app/build/outputs/apk/app-release.apk`. You'll need to
      create a new beta release on the Google Play Console and upload the APK
      there to release. You can test the release build in the simulator if you'd
      like using `react-native run-android --variant=release`.
1. Release to the App Store and Play Store. You promote the beta builds to
   production through the iTunes Connect and Play Console websites.
