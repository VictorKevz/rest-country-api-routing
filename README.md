![alt text](public/design/desktop-preview.jpg)
# Rest Countries API with Routing and Theme Switcher

This project is a Frontend Mentor challenge that integrates with the [REST Countries API](https://restcountries.com/) to fetch and display country data. Users can search, filter by region, view detailed information for individual countries, and navigate through border countries. It also includes responsive design, theme toggling (light/dark mode), and animations.

### [Live Demo](https://victorkevz.github.io/rest-country-api-routing/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Challenge Details](#challenge-details)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

## Overview

This project is part of the [Frontend Mentor REST Countries API Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). It is a React-based application that allows users to:

- View all countries from the API.
- Search for specific countries using a search bar.
- Filter countries by region.
- Click on a country to view detailed information on a separate page.
- Click through to neighboring countries on the detail page.
- Toggle between light and dark mode, with theme preferences stored in `localStorage`.
- View an optimal layout on various device screen sizes.

## Features

- **Fetch & Display Countries**: The app fetches country data from the REST Countries API and displays it in a responsive grid layout.
  
- **Search**: Users can search for countries using a dynamic search input.
  
- **Filter by Region**: A dropdown allows users to filter countries by their geographical region.

- **Detailed Country Information**: On clicking a country, users are navigated to a details page with information like native name, population, region, capital, and currencies.

- **Neighboring Countries Navigation**: On the details page, users can navigate through the bordering countries of the selected country.

- **Theme Toggler**: Users can toggle between light and dark modes, with the preference being saved using `localStorage`.

- **Animations**: Smooth animations have been added using Framer Motion to enhance user experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing between pages.
- **Framer Motion**: For adding smooth animations and transitions.
- **CSS**: Custom styling for responsive design and hover/focus states.
- **REST Countries API**: For retrieving country data.
- **LocalStorage**: To persist theme preferences (light/dark mode).
- **MUI Icons**: For iconography, such as back button icons.

## Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/VictorKevz/rest-country-api-routing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rest-country-api-routing
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Challenge Details

This project was built as part of the [Frontend Mentor REST Countries API Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

### User Stories

1. Users can see all countries fetched from the API on the homepage.
2. Users can search for a country using the input field.
3. Users can filter countries by region.
4. Users can click on a country to view detailed information.
5. Users can navigate through border countries on the detail page.
6. Users can toggle between light and dark modes.
7. Users can view the layout optimized for different screen sizes.
8. Users can see hover and focus states for all interactive elements.

### Bonus Feature

- Added animations for a more interactive and smooth user experience.
- Theme preferences (light/dark mode) are saved in localStorage to persist between sessions.

## Future Improvements

- **Performance Optimization**: Enhance performance with additional optimizations for loading and caching country data.
- **Error Handling**: Improve error handling for failed API requests or unavailable data.
- **Unit Testing**: Add unit tests for the core functionality.
- **Accessibility Improvements**: Continue improving the accessibility of the app, including support for keyboard navigation and screen readers.

## Acknowledgments

- Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge idea.
- Special thanks to the open-source community behind [REST Countries API](https://restcountries.com/).
