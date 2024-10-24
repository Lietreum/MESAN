// import { useEffect } from 'react';
// deprecated i wont use this no more.
// const usePreventZoom = () => {
//   useEffect(() => {
//     // Prevent zoom with touch gestures
//     const preventTouchZoom = (e: Event) => {
//       // Cast the event to any to bypass TypeScript checks for gesture events
//       const touchEvent = e as any;
//       if (touchEvent.scale !== 1) {
//         e.preventDefault();
//       }
//     };

//     // Prevent zoom with keyboard shortcuts (Ctrl/Cmd + Scroll or Ctrl/Cmd + +/-/0)
//     const preventKeyZoom = (e: KeyboardEvent) => {
//       if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
//         e.preventDefault();
//       }
//     };

//     // Add event listeners for both touch gestures and key shortcuts
//     document.addEventListener('gesturestart', preventTouchZoom as EventListener);
//     document.addEventListener('gesturechange', preventTouchZoom as EventListener);
//     document.addEventListener('gestureend', preventTouchZoom as EventListener);
//     window.addEventListener('keydown', preventKeyZoom);

//     // Cleanup event listeners on component unmount
//     return () => {
//       document.removeEventListener('gesturestart', preventTouchZoom as EventListener);
//       document.removeEventListener('gesturechange', preventTouchZoom as EventListener);
//       document.removeEventListener('gestureend', preventTouchZoom as EventListener);
//       window.removeEventListener('keydown', preventKeyZoom);
//     };
//   }, []);
// };

// export default usePreventZoom;
