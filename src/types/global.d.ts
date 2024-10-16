declare module '../components/protect/Protected' {
    import { FC } from 'react';
  
    const ProtectedRoute: FC<{ children: React.ReactNode }>; // Adjust the props based on your implementation
    export default ProtectedRoute;
  }
  