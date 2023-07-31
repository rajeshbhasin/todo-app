import React from 'react';
import { Toaster } from 'react-hot-toast';
import Pagetitle from './components/Pagetitle';
import AppHeader from './components/AppHeader';
import style from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <Pagetitle>TODO LIST</Pagetitle>
        <div className={style.app__wrapper}>
          <AppHeader> </AppHeader>
          <AppContent> </AppContent>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
