# Weather App

Weather App is built with [Create React App](https://github.com/facebook/create-react-app).

## API
[Open Weather Map](https://openweathermap.org/current) was the API source used for this application. It was originally accessed through RapidAPI, but that platform limited the type of calls I could make to the API. To be able to use the geolocation, I required a seperate call with just latitude and longitude.

## Designed & Prototyped in Figma
![image](https://user-images.githubusercontent.com/71335643/148299203-918cbe9f-6c47-4dc8-b849-c5f8315e9c15.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## User Stories

### User Story 1
As a user, I want to look at the current weather for my current location.

```
Given that the user has loaded the application
When the user clicks on the "Get Your Location Weather" button
And they have approved the geolocation in their browser popup
Then the results with render with their current location
```

### User Story 2
As a user, I want to change my location.
```
Given the user has loaded the application
When the user types a city name into the input field and submits
Then the results will populate with that city
```

As a user, I want to specify the country the city I'm searching is in.
```
Given the user has loaded the application
When the user specifies the city name, followed by a comma and the 2-letter acyonym for the country (ex; London, CA)
Then the correct city will populate.
```

### User Story 3
As a user, I want to see more/less details about the weather.
```
Given the user has already loaded a city
When they click "See More" or "See Less"
Then the card will toggle between standard view and a view with more details.
```

### User Story 4
As a user, I want to see the projected weather for five days.
 
