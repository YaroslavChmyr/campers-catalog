# Campers Catalog

A React.js application that displays a catalog of campers, allowing users to filter results, view detailed camper information, add campers to favorites, and submit bookings. This project integrates Redux for state management and pulls data from a backend API.

## Features

- **Catalog Display**: Displays a list of campers fetched from a backend API.
- **Filtering**: Users can filter campers by various criteria to refine their search.
- **Favorite Campers**: Users can add campers to a favorites list, with favorite state persistence.
- **Camper Details Page**: Displays comprehensive information on each camper, including images, rating, location, and more.
- **Booking Form**: Allows users to submit a booking request, complete with form validation.

## Tech Stack

- **React.js**: Frontend library for building user interfaces.
- **Redux**: Manages the global state, including catalog data, filters, and favorites.
- **Formik & Yup**: Used for form management and validation in the booking form.
- **CSS Modules**: Component-specific styling.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/campers-catalog.git
   cd campers-catalog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server:

  ```bash
  npm run dev
  ```
