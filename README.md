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

---

### **Prerequisites**

Ensure you have the following installed:

- Node.js (v14 or higher)
- Recomended (v18.8.0)
- npm or yarn

### **Prerequisites**

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/ndynoahs/ikvmovies.git
   cd ikvmovies

   ```

2. Install dependencies:

npm install

3. Create a .env.local file in the root of the project and add your TMDb API key:

NEXT_PUBLIC_MOVIEDB_API_KEY=your_tmdb_api_key

4. Run the development server:

npm run dev

5. Open the application in your browser:

http://localhost:3000

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

## Future Improvements

    Add user authentication to save favorites to a database.
    Optimize performance with caching strategies.
    Enhance accessibility features.

License

This project is licensed under the MIT License.
