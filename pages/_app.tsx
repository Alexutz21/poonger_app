import '../styles/globals.css'                    // *** in terminal 'sanity start' to start project
import type { AppProps } from 'next/app';         // only in the dir where in located 
import { useState, useEffect } from 'react';      // ---> poonger-backend

import Navbar from '../components/Navbar';        // *** in terminal 'npm run dev' to start _app.tsx
import Sidebar from '../components/Sidebar';  

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setisSSR] = useState(true);
  useEffect(() => {
    setisSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        
        <div className='h-[92vh] overflow-hidden xl:dover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>

      </div>
      
    </div>
  );
}

export default MyApp
