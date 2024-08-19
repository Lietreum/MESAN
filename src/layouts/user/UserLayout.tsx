import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your layout structure */}
      <header>User Header</header>
      <main>{children}</main>
      <footer>User Footer</footer>
    </div>
  );
};

export default UserLayout;
