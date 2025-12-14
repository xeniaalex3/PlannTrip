# PlannTrip

PlannTrip is a web application for planning trips, managing guests, activities, and sharing useful links. Built with React, TypeScript, and Vite, it provides a modern and user-friendly interface for organizing travel details — now with full authentication

🔗 Live demo: [plannTrip](https://planntrip.netlify.app/)

## 🧰 Features

#### ✈️ Trip Management

- 🧭 Search and select trip location and dates
- 🧑‍🤝‍🧑 Add and manage guests
- 📅 Add activities with date and time
- ✅ Manage activities (create, update, delete)
- 🔗 Share useful links related to the trip

#### 🔐 Authentication & User Account

- 🔑 User authentication (login & register)

- 👤 Profile page

- 📄 View basic profile information (email, account creation date, etc.)

- ✏️ Update profile information

- ⚙️ Account management

- 🗑️ Delete user account

- 🔒 Protected routes for authenticated users

#### 📱 UI & UX

- 🧠 Responsive design (mobile & desktop)

- 🎨 Clean and modern interface with Tailwind CSS

- ⚡ Fast development and build with Vite

<br>

## 🧑‍💻 Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack React Router
- TanStack React Query
- Axios
- jwt-decode
- React Hook Form
- Zod
- Netlify (deployment)
- Github Actions

<br>

## Project Structure

```
frontend/
  src/
    api/ # API client, auth services and hooks
    assets/ # Images and static assets
    components/ # UI components and modals
    context/ # React contexts (auth, global state)
    pages/ # Main pages (login, register, profile, trips, etc.)
    routes/ # Routing and protected routes
    styles/ # Global styles
    utils/ # Utility and helper functions
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
