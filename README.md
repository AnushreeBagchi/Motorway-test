
# Motorway UI Test
  
This is a test for Motorway UI technical round. This task is done in React to display images from the API.

## Tasks

### 1. UI development

Created a responsive UI using material UI to display the images returned by the API. Used Modal to review the images full size.

### 2. Performance

The API that is returning images is rather slow because there was a setTimeOut. Removed it to improve the performance.


### 3. Forms

Added a form to Login app. Used Modal to display the form. The Submit button does nothing. But if the user has not provided value for the required fields (name, email and income), the Submit button is disabled.

## Set up

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.
