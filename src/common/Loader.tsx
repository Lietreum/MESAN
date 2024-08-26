
import '../index.css'; // Ensure this import includes your font-face declarations

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-4">
          {/* Left SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 29 56" className="overflow-visible">
            <defs>
              <style>{`.cls-1 { fill: #fff; fill-rule: evenodd; }`}</style>
            </defs>
            <path className="cls-1" d="M1034,1006l-18,32,22,12,7,12-4-12,0.38-4.74L1037,1047l-15-11Z" transform="translate(-1016 -1006)"/>
          </svg>

          {/* Center SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="32" viewBox="0 0 6 24" className="overflow-visible">
            <defs>
              <style>{`.cls-1 { fill: #fff; fill-rule: evenodd; }`}</style>
            </defs>
            <path className="cls-1" d="M1163,960l-3,21,3,3,3-3Z" transform="translate(-1160 -960)"/>
          </svg>

          {/* Right SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 29 56" className="overflow-visible">
            <defs>
              <style>{`.cls-1 { fill: #fff; fill-rule: evenodd; }`}</style>
            </defs>
            <path className="cls-1" d="M1132,1006l18,32-22,12-7,12,4-12-0.38-4.74L1129,1047l15-11Z" transform="translate(-1121 -1006)"/>
          </svg>
        </div>
        {/* Loading Text */}
        <p className="text-white text-lg" style={{ fontFamily: 'CC Wild Roman Words', marginTop: '8px' }}>
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loader;
