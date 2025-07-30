
export function Loading() {
  return (
    <div className="loading-overlay">
      <div className="spinner" />
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className="icon-sun">
        <path d="M33.334 50V41.6666C37.9451 41.6666 41.6673 37.9444 41.6673 33.3333H50.0007C50.0007 42.5555 42.5284 50 33.334 50Z" fill="#FFD11A" />
        <path d="M33.3337 50V41.6666C28.7225 41.6666 25.0003 37.9444 25.0003 33.3333H16.667C16.667 42.5555 24.1392 50 33.3337 50Z" fill="#FFD11A" />
        <path d="M0 33.3334H8.33333C8.33333 37.9445 12.0556 41.6667 16.6667 41.6667V50C7.47222 50 0 42.5556 0 33.3334Z" fill="#FFD11A" />
        <path d="M0 33.3334H8.33333C8.33333 28.7222 12.0556 25 16.6667 25V16.6667C7.47222 16.6667 0 24.1389 0 33.3334Z" fill="#FFD11A" />
        <path d="M16.6667 0V8.33333C12.0556 8.33333 8.33333 12.0556 8.33333 16.6667H0C0 7.47222 7.47222 0 16.6667 0Z" fill="#FFD11A" />
        <path d="M16.667 0V8.33333C21.2781 8.33333 25.0003 12.0556 25.0003 16.6667H33.3337C33.3337 7.47222 25.8614 0 16.667 0Z" fill="#FFD11A" />
        <path d="M49.9997 16.6667H41.6663C41.6663 12.0556 37.9441 8.33333 33.333 8.33333V0C42.5275 0 49.9997 7.47222 49.9997 16.6667Z" fill="#FFD11A" />
        <path d="M49.9997 16.6667H41.6663C41.6663 21.2778 37.9441 25 33.333 25V33.3334C42.5275 33.3334 49.9997 25.8889 49.9997 16.6667Z" fill="#FFD11A" />
      </svg>
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          z-index: 1000;

        }
.icon-sun {
  width: 100%;     
  height: auto;      
  max-width: 200px;  
  display: block;   
            animation: spin 1s infinite linear; 
}
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


