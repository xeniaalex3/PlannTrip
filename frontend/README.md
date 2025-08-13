PlannTrip is a web application for planning trips, managing guests, activities, and sharing useful links. Built with React, TypeScript, and Vite, it provides a modern, user-friendly interface for organizing travel details.

## Features
- Search and select trip location and dates
- Add and manage guests
- Create and manage activities
- Share useful links
- Responsive design for mobile and desktop

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- Netlify (deployment)

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

## Getting Started
### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/xeniaalex3/PlannTrip.git
   cd PlannTrip/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production
```sh
npm run build
# or
yarn build
```

### Deployment
The project is configured for deployment on Netlify. See `netlify.toml` for settings.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.


