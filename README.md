# Movie Library Application

A responsive, dynamic Movie Library Application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The application interacts with the TMDb API to display and manage a list of popular movies.

---

## Features

1. **Homepage**

   - Display a grid of movies from TMDb API's "Popular Movies" endpoint.
   - Search movies by title.
   - Infinite scrolling for seamless loading of more movies.

2. **Movie Details Page**

   - Detailed view of selected movie including title, poster, overview, genres, and cast.

3. **Favorites**

   - Add/remove movies from a "Favorites" list.
   - Persist favorites using localStorage.
   - Manage favorite movies on a dedicated page.

4. **Responsive Design**

   - Optimized for mobile, tablet, and desktop using Tailwind CSS.

5. **Strong Typing**

   - Built with TypeScript for type safety.

6. **Bonus Features**
   - Skeleton loaders for a better user experience.
   - Deployed on Vercel for live demo.

---

## Getting Started

### **Prerequisites**

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-library-app.git
   cd movie-library-app
   ```
   Here’s how you can structure the README.md file for your project:
   README.md

# Movie Library Application

A responsive, dynamic Movie Library Application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The application interacts with the TMDb API to display and manage a list of popular movies.

---

## Features

1. **Homepage**

   - Display a grid of movies from TMDb API's "Popular Movies" endpoint.
   - Search movies by title.
   - Infinite scrolling for seamless loading of more movies.

2. **Movie Details Page**

   - Detailed view of selected movie including title, poster, overview, genres, and cast.

3. **Favorites**

   - Add/remove movies from a "Favorites" list.
   - Persist favorites using localStorage.
   - Manage favorite movies on a dedicated page.

4. **Responsive Design**

   - Optimized for mobile, tablet, and desktop using Tailwind CSS.

5. **Strong Typing**

   - Built with TypeScript for type safety.

6. **Bonus Features**
   - Skeleton loaders for a better user experience.
   - Deployed on Vercel for live demo.

---

### **Prerequisites**

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/ndynoahs/ikvmovies.git
   cd movie-library-app

   ```

2. Install dependencies:

npm install

3. Create a .env.local file in the root of the project and add your TMDb API key:

NEXT_PUBLIC_MOVIEDB_API_KEY=your_tmdb_api_key

4. Run the development server:

npm run dev

5. Open the application in your browser:

http://localhost:3000

### **Deployment**

The application is deployed using Vercel. You can view the live demo here.

To deploy:

    Push your code to GitHub.
    Connect your repository to Vercel.
    Follow the Vercel deployment steps.

0000

### **Design Choices**

1. Framework

   Used Next.js for its powerful routing and data-fetching capabilities (SSR/SSG).

2. Styling

   Tailwind CSS was chosen for its utility-first approach and speed in developing responsive designs.

3. API Integration

   Integrated TMDb API to fetch and display movie data dynamically.

4. State Management

   Managed application state with React hooks (useState, useEffect) for simplicity.

5. Infinite Scrolling

   Improved user experience with seamless content loading using Intersection Observer API.

6. TypeScript

   Ensured strong type safety by defining interfaces for API responses and components.

7. Favorites Persistence

   Used localStorage to persist favorite movies, offering users a consistent experience.

## Project Structure

root/
├── app/ # Next.js 14 App Directory
│ ├── page.tsx # The home page (e.g., Movie grid, search functionality)
│ ├── movie/ # Movie details page (Dynamic route for each movie)
│ │ ├── [id]/ # Dynamic segment for individual movie page
│ │
│ ├── favorite-movies/ # Favorite movies page
│ │ ├── page.tsx # Displays the list of favorite movies
| ├── globals.css # Global CSS file, includes Tailwind setup
│ └── layout.tsx # Global layout wrapper (used across pages)
├── components/ # Reusable UI components like Header, MovieCard, etc.
│ ├── Header.tsx # Navigation bar and buttons for adding/removing favorites
│ ├── MovieCard.tsx # Displays a movie card with title, poster, and rating
│ └── Skeleton.tsx # Skeleton loader component for fetching states
├── hooks/ # Utility functions, API calls, etc.
│ ├── useInfiniteScroll.tsx
├── public/ # Static files (images, icons, etc.)

## Future Improvements

    Add user authentication to save favorites to a database.
    Optimize performance with caching strategies.
    Enhance accessibility features.

License

This project is licensed under the MIT License.
