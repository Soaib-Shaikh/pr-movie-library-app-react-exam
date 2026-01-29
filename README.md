# MovieHub — Movie Library App 🎬

A simple React + Vite application that lets you browse, search and view details for movies using The Movie Database (TMDB) API. Built as an exam / demo project showcasing React, Redux Toolkit and integration with an external API.

## Deploy Link

Link :- https://pr-movie-library-app-react-exam.vercel.app/login

---

## 🚀 Features

- View a list of **popular** movies
- See **trending** movies (today)
- **Search** movies with live search (debounced)
- View **movie details** (overview, release date, genres, rating)
- Simple **client-side authentication** (signup / login stored in localStorage)
- **Protected routes** using `PrivateRoute` so only authenticated users can access the app

## 🧰 Technology Stack

- React 19 + Vite
- Redux Toolkit for state management
- React Router (v7) for navigation
- Axios for HTTP requests
- Bootstrap for UI
- dotenv / Vite environment variables for API keys
- ESLint for linting

## ⚙️ Setup & Run

1. Clone the repository

   git clone <repo-url>
   cd pr-movie-library-app-react-exam

2. Install dependencies

   - With bun (recommended if installed):
     ```bash
     bun install
     bun run dev
     ```

   - Or with npm:
     ```bash
     npm install
     npm run dev
     ```

3. Open http://localhost:5173 in your browser (Vite default)

## 🔒 Environment Variables

This project uses the TMDB API. Create a `.env` file in the project root with these variables:

```
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=<your_tmdb_api_key>
VITE_TMDB_READ_TOKEN=<your_tmdb_read_access_token>
```

Notes:
- The API key is passed as a query param and a Bearer token header is included in `src/api/movieApi.js`.
- Do not commit API keys to source control.

## 🗂 Project Structure (key files)

- `src/`
  - `api/movieApi.js` — Axios instance using Vite env vars
  - `app/store.js` — Redux store configuration
  - `features/movie/movieSlice.js` — async thunks (popular, trending, search, details)
  - `features/auth/authSlice.js` — simple client-side auth (localStorage)
  - `components/` — `Navbar`, `MovieList`, `MovieSearch`, `MovieDetails`, `PrivateRoute`
  - `pages/` — `Login`, `Signup`, `Popular`, `Trending`
  - `App.jsx` — routes and layout

## 📋 Usage

- Signup or login to enable the app
- Use the search box or search input to find movies (typing 3+ chars triggers search)
- Click “View Details” to see a movie's overview, genres and rating
- Toggle between Popular and Trending pages from the navbar

## 📝 Notes & Future Improvements

- Authentication is client-side only (stored in `localStorage`) — replace with a backend for production security
- Add server-side proxy or secure backend to keep API keys safe
- Improve error handling and add unit/integration tests
- Add pagination and more filtering/sorting options

---

If you want, I can also add a `CONTRIBUTING.md`, `.env.example`, or expand the README with screenshots and deployment steps. ✅
