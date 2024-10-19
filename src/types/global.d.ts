declare module '../components/protect/Protected' {
    import { FC } from 'react';
  
    const ProtectedRoute: FC<{ children: React.ReactNode }>; 
    export default ProtectedRoute;
  }
  