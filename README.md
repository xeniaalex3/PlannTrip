# PlannTrip

PlannTrip is a web application for planning trips, managing guests, activities, and sharing useful links. Built with React, TypeScript, and Vite, it provides a modern, user-friendly interface for organizing travel details.

🔗 Live demo: [plannTrip](https://planntrip.netlify.app/)

## 🧰 Features

- 🧭 Search and select trip location and dates
- 🧑‍🤝‍🧑 Add and manage guests
- 📅 Ajout d'activités avec date et heure
- 🔗 Create and manage activities
- ✅ Share useful links
- 🧠 Responsive design for mobile and desktop

<br>

## 🧑‍💻 Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Netlify (deployment)
- Github Actions

<br>

## Project Structure
```
frontend/
  src/
    components/      # UI and modal components
    context/         # React context for trip state
    pages/           # Main pages and containers
    api/             # API client and hooks
    assets/          # Images and static assets
    routes/          # Routing setup
    styles/          # Global styles
    utils/           # Utility functions
```
<br>

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:

```bash
   git clone https://github.com/xeniaalex3/PlannTrip.git
   cd PlannTrip/frontend

```
2. Install dependencies:

```bash
   npm install
   
   yarn install
```

### Running the App
```bash
npm run dev

yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production

```bash
npm run build

yarn build
```

### Deployment
The project is configured for deployment on Netlify. See `netlify.toml` for settings.

<br>

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

<br>

## License
This project is licensed under the MIT License.
