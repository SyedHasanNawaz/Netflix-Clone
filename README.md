# Netflix Clone 🎬

A fully functional Netflix front-end clone built with **React JS**, styled to replicate the official Netflix homepage, and powered by **The Movie Database (TMDB) API**. This project showcases dynamic movie categories, interactive poster carousels, and embedded trailer playback using YouTube. Built by following a step-by-step tutorial.

---

## 📌 What This Project Does

- Fetches real-time movie and TV show data from TMDB
- Dynamically displays categorized content (e.g., Trending, Top Rated, Netflix Originals)
- Horizontal scrolling rows of posters using a reusable `Row` component
- Clickable posters that open and play trailers from YouTube
- Displays featured content in a banner at the top of the page
- Handles missing or broken trailer links gracefully
- Fully responsive layout for all screen sizes (mobile, tablet, desktop)

---

## 🧱 Core Technologies Used

| Tool/Library  | Purpose                                  |
| ------------- | ---------------------------------------- |
| React JS      | Front-end UI framework                   |
| Axios         | Handles API requests to TMDB             |
| TMDB API      | Provides movie and show metadata         |
| Movie-trailer | Finds YouTube trailer URL based on title |
| React-youtube | Embeds YouTube trailers into the app     |
| CSS           | Custom Netflix-style layout and design   |

---

## 📂 Project Structure

```
src/
├── App.js                # Root component rendering all rows
├── Row.js                # Reusable movie row component
├── Banner.js             # Top featured movie component
├── Nav.js                # Static navigation bar
├── requests.js           # Centralized TMDB endpoints
├── axios.js              # Axios instance with TMDB base URL
├── index.js              # React entry point
```

---

## 📈 Analytics & Tracking

In addition to the features covered in the tutorial, I also implemented **Google Tag Manager (GTM)** to track user behavior and site interactions.

- Added GTM script in the HTML head
- Configured tags for page views and trailer clicks
- Integrated Google Analytics via GTM
- Verified events in GA real-time dashboard

This allowed me to monitor how users interact with the app, track which movie rows get more engagement, and test UI performance over time.

---

## 🎬 Features Implemented

- ✅ Fetch movies/shows by category from TMDB API
- ✅ Horizontal scrolling content carousels
- ✅ Banner for randomly selected featured movie
- ✅ Trailer playback using YouTube on poster click
- ✅ Responsive design for all screen sizes
- ✅ Graceful error handling for missing trailers or data
- ✅ Netflix-style layout and interaction

---

## 🧪 API Endpoints Used

TMDB endpoints used are defined in `requests.js`. These include:

- `/trending/all/week`
- `/movie/top_rated`
- `/discover/tv?with_networks=213` (Netflix Originals)
- Others for categories like Action, Comedy, Horror, Romance, etc.

---

## 🛠 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up API Key

Create a `.env` file in the root folder:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

> Replace `your_tmdb_api_key_here` with your actual TMDB API key.

### 4. Start the App

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🚀 Deployment

This project is deployed on **Netlify**.

> Originally planned to deploy on Firebase, but due to limitations in secure API key handling under the free tier, Netlify was chosen as the final deployment platform.

To deploy on Netlify:

- Connect your GitHub repo
- Add the `.env` variable in Netlify dashboard
- Set the build command to `npm run build`
- Set publish directory to `build/`

---

## 🖼 Sample Images

### 🔹 Homepage Banner (Featured Movie)

![Homepage Banner](https://github.com/SyedHasanNawaz/Netflix-Clone/blob/main/Netflix%201.PNG)

---

### 🔹 Trailer Playback from YouTube

![Trailer Playback](https://github.com/SyedHasanNawaz/Netflix-Clone/blob/main/Netflix%202.PNG)

---

### 🔹 Chatbot Integration in Action

![Chatbot UI](https://github.com/SyedHasanNawaz/Netflix-Clone/blob/main/Netflix%203.PNG)

---

## 🧠 What I Learned

- React fundamentals: components, props, state
- API integration using Axios and async/await
- Working with `.env` for secure API keys
- Using external libraries (`movie-trailer`, `react-youtube`)
- Building reusable components (Banner, Row, Nav)
- Mimicking real-world UI (Netflix layout)
- Deployment workflows with Netlify

---

## 💬 Chatbot Integration

I also integrated a **chatbot** into the app, positioned at the **bottom right** corner of the screen. It enhances user interaction by providing quick help, answering FAQs, or guiding users through the interface.
