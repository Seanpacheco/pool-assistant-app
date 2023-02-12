# Pool Assistant

> Pool & Spa maintenance tracker

An app to track chemical levels, repairs, and changes for multiple pools/spas on a professional's route.

## Features

- Add multiple pools/spas to a user
- Log results of water balance testing
- Set user preferences for chemicals
- Suggest chemical additions based on latest log and user preferences
- Warn user of impending inclement weather
- Allow user to save notes and view note history

### Feature Roadmap

- [x] Build frontend for home/login page
      Built a simple landing page using react and tailwind. At the moment it solely exists for users to sign up and log in, may later add a small section detailing features of the app. Once authentication is added users will be able to bypass directly to the dashboard as long as they are authenticated.
- [~] Build frontend for dashboard
  [IN PROCESS] Currently have the skeleton for most features of the dashboard. Searchable account list is working with test data.
- [~] Build out routes and add authentication
  [IN PROCESS] Simple route using React-router implemented to take user from landing page to dashboard. No authentication yet.
- [ ] Add chemical logging
- [ ] Add user chemical preferences
- [ ] Add notes
- [ ] Add data graphs
- [ ] Connect geolocation and weather API
- [ ] Connect Database
- [ ] Add testing
