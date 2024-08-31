```markdown
# MESAN

Setoran is a comprehensive point of sale (POS) system designed for cooperative use. It features distinct dashboards for admins and users, facilitating efficient management and seamless transactions.

## Features

### Admin Dashboard


### User Dashboard (Homepage)


## Tech Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS, DaisyUI, Zustand, Lucide React Icons
- **Backend**: Node.js, Express, Prisma ORM, JsonWebToken, Nodemon
- **Database**: MySQL
- **State Management**: Zustand
- **Styling**: TailwindCSS, DaisyUI

## Project Structure Frontend

```
src/
├── assets/
│   └── (images, logos, etc.)
├── components/
│   ├── CategoryPills.tsx
│   ├── Sidebar.tsx
│   ├── NavBar.tsx
│   └── (other shared components)
├── layouts/
│   ├── AdminLayout.tsx
│   ├── Homepage.tsx
│   └── PageHeader.tsx
├── pages/
│   ├── admin/
│   │   ├── DashboardHome.tsx
│   │   ├── Customers.tsx
│   │   └── Income.tsx
│   ├── user/
│   │   ├── Home.tsx
│   │   ├── ProductList.tsx
│   │   └── Profile.tsx
│   └── NotFound.tsx
├── data/
│   └── categories.ts
├── stores/
│   └── (Zustand state management files)
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## Components

- **Carousel**: Displays product images with responsive design.
- **Order History**: Shows detailed order history with dropdown feature.
- **Favorite Card**: Displays product information with an option to add to favorites.
- **QR Scan Card**: Includes QR scanning functionality and payment prompts.
- **Order Details Card**: Shows detailed order information in a horizontal layout.
- **Stock Notification**: Alerts for low product stock levels.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/setoran.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd setoran
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Your Browser**:
   Navigate to `http://localhost:3000` to see the application in action.

## Configuration

- **Backend**: Ensure your backend server is running and properly connected to your database.
- **Environment Variables**: Set up any required environment variables as specified in `.env.example`.

## Contributing

We welcome contributions to enhance the functionality and performance of the project. Please follow the standard pull request process and ensure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You can copy and paste this into your `README.md` file. Adjust any specific details as needed!
