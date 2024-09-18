# 🧩 Coding Standards for Components and Pages


## 📁 Component Guidelines


### 🛠 Component Structure
- File Naming: Use `PascalCase` for component filenames (e.g., `CategoryCard.tsx`).
- Folder Organization: Store components in `/components/` or relevant feature folders.


### 🧩 Props and State Management
- Props Definition: Use TypeScript interfaces for props.
  ```tsx
  interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }
  ```


### 🔄 Reusability and Composition
- Small and Reusable: Create small, reusable components.
- Composition: Build complex UIs from simpler components.
  ```tsx
  const MainButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="btn">
      {label}
    </button>
  );
  ```


### ✨ Styling
- Utility-First: Use TailwindCSS for styling.
  ```tsx
  <div className="p-4 bg-gray-200 rounded">
    {/ Component content /}
  </div>
  ```
- CSS Modules (Optional): For scoped styles.


### 📜 Documentation
- Component Documentation: Use JSDoc comments if you want.
  ```tsx
  /
    Button component for user actions.
    @param label - The button text.
    @param onClick - Callback for button click.
    @param disabled - Whether the button is disabled.
   /
  ```


## 📂 Page Guidelines


### 🛠 Page Structure
- File Naming: Use `PascalCase` for page filenames (e.g., `Home.tsx`).
- Folder Organization: Store pages in `/pages/`, organized by feature.


### 🗂 Page Layout and Composition
- Layout Components: Use layout components (e.g., `Header`, `Footer`).
  ```tsx
  const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
  ```


### 📊 Data Fetching and State Management
- Data Fetching: Use hooks for fetching data.
  ```tsx
  const { data, error } = useQuery('fetchUser', fetchUser);
  ```
- State Management: Use Zustand or React’s `useState`/`useReducer`.


### 🧩 Component Integration
- Compose Components: Integrate smaller components into pages.
  ```tsx
  const Home: React.FC = () => (
    <Layout>
      <HeroSection />
      <ProductList />
    </Layout>
  );
  ```


### ✨ Styling and Layout
- Consistent Styling: Apply TailwindCSS utility classes.
- Responsive Design: Ensure responsiveness with TailwindCSS utilities.


### 📜 Documentation and Comments
- Page Documentation: Document pages and complex logic.
  ```tsx
  /
    Home page displaying hero section and product list.
   /
  ```





# 🧩 Coding Standards for Components and Pages


## 📁 Component Guidelines


### 🛠 Component Structure
- File Naming: Use `PascalCase` for component filenames (e.g., `CategoryCard.tsx`).
- Folder Organization: Store components in `/components/` or relevant feature folders.


### 🧩 Props and State Management
- Props Definition: Use TypeScript interfaces for props.
  ```tsx
  interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }
  ```
- Default Props: Define default values for optional props.
  ```tsx
  Button.defaultProps = {
    disabled: false,
  };
  ```


### 🔄 Reusability and Composition
- Small and Reusable: Create small, reusable components.
- Composition: Build complex UIs from simpler components.
  ```tsx
  const MainButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="btn">
      {label}
    </button>
  );
  ```


### ✨ Styling
- Utility-First: Use TailwindCSS for styling.
  ```tsx
  <div className="p-4 bg-gray-200 rounded">
    {/ Component content /}
  </div>
  ```
- CSS Modules (Optional): For scoped styles.


### 📜 Documentation
- Component Documentation: Use JSDoc comments.
  ```tsx
  /
    Button component for user actions.
    @param label - The button text.
    @param onClick - Callback for button click.
    @param disabled - Whether the button is disabled.
   /
  ```


### 🔍 Testing
- Unit Testing: Use Jest and React Testing Library.
  ```tsx
  import { render, screen } from '@testing-library/react';
  import MainButton from './MainButton';


  test('renders button with label', () => {
    render(<MainButton label="Click me" onClick={() => {}} />);
    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
  });
  ```


## 📂 Page Guidelines


### 🛠 Page Structure
- File Naming: Use `PascalCase` for page filenames (e.g., `Home.tsx`).
- Folder Organization: Store pages in `/pages/`, organized by feature.


### 🗂 Page Layout and Composition
- Layout Components: Use layout components (e.g., `Header`, `Footer`).
  ```tsx
  const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
  ```


### 📊 Data Fetching and State Management
- Data Fetching: Use hooks for fetching data.
  ```tsx
  const { data, error } = useQuery('fetchUser', fetchUser);
  ```
- State Management: Use Zustand or React’s `useState`/`useReducer`.


### 🧩 Component Integration
- Compose Components: Integrate smaller components into pages.
  ```tsx
  const Home: React.FC = () => (
    <Layout>
      <HeroSection />
      <ProductList />
    </Layout>
  );
  ```


### ✨ Styling and Layout
- Consistent Styling: Apply TailwindCSS utility classes.
- Responsive Design: Ensure responsiveness with TailwindCSS utilities.


### 📜 Documentation and Comments
- Page Documentation: Document pages and complex logic.
  ```tsx
  /
    Home page displaying hero section and product list.
   /
  ```


### 🔍 Testing
- Integration Testing: Test page interactions.
  ```tsx
  import { render, screen } from '@testing-library/react';
  import Home from './Home';


  test('renders Home page with hero section and product list', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Hero Section/i })).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  ```


```



