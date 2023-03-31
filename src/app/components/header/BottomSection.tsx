import React, { FC } from 'react';
import styles from './index.module.css';

const BottomSection: FC = () => {
  return (
    <div className={styles.Section}>
      <h3 className={styles.h3}>Кратко обо мне:</h3>
      <div className={styles.title}>
        <p className={styles.p}>-Стараюсь находить время для изучения английского</p>
        <p className={styles.p}>-Работаю над ростом профессиональных навыков</p>
        <p className={styles.p}>-Постоянно впитую новую информацию</p>
        <p className={styles.p}>-Готов браться за интересные проекты</p>
        <p className={styles.p}>-Открыт к новым предложениям</p>
      </div>
    </div>
  );
};

export default BottomSection;
