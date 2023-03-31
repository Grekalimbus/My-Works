import React, { FC } from 'react';
import styles from './index.module.css';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Header;
