import React from 'react';
import Body from './app/components/body/Body';
import Header from './app/components/header/Header';
import styles from './index.module.css';

export interface STYLES {
  [key: string]: string;
}

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
