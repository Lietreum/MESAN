## Redistribusi Sistem Website

### Overview
The Redistribusi Sistem website is a web application designed to efficiently manage and distribute resources. This system is built using modern web technologies to ensure performance, scalability, and maintainability.

### Technologies Used

Frontend:
- React: A JavaScript library for building user interfaces.
- Vite: A build tool that provides a faster and leaner development experience for modern web projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Axios: A promise-based HTTP client for making requests.
- TailwindCSS: A utility-first CSS framework for styling.
- Zustand: A small, fast state-management library for React.

Backend:
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A minimal and flexible Node.js web application framework.
- Prisma ORM: An open-source database toolkit for Typescript and Node.js.
- JsonWebToken: A compact, URL-safe means of representing claims to be transferred between two parties.
- Nodemon: A utility that monitors for changes in source files and automatically restarts the server.

Database:
- MySQL: An open-source relational database management system.

### Features

- User Authentication: Secure login and registration using JWT.
- Resource Management: Add, update, delete, and view resources.
- Real-time Updates: Instant updates on resource redistribution using WebSockets.
- Responsive Design: Optimized for various screen sizes using TailwindCSS.
- State Management: Efficient state management with Zustand.
- Database Operations: Robust and efficient database operations using Prisma ORM.

### Installation

#### Prerequisites
- Node.js
- MySQL

#### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/redistribusi-sistem.git
   cd redistribusi-sistem/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/redistribusi"
   JWT_SECRET="your_jwt_secret"
   ```

4. Run database migrations:
   ```sh
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```sh
   npm run dev
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the `frontend` directory and add the following:
   ```env
   VITE_API_URL="http://localhost:3000"
   ```

4. Start the frontend development server:
   ```sh
   npm run dev
   ```

### Usage

1. Open your browser and navigate to `http://localhost:5173` for the frontend.
2. Use `http://localhost:3000/api` for backend API endpoints.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.

### Contact

For any questions or support, please contact [@Lietreum].

---

By following this README, you should be able to set up and run the Redistribusi Sistem website locally. Enjoy developing and contributing to this project!
