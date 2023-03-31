import React, { FC } from 'react';
import styles from './index.module.css';
import face from '../../image/face.png';
import inst from '../../image/inst.png';
import tg from '../../image/telegramm.png';
import gh from '../../image/github.png';

const TopSection: FC = () => {
  return (
    <div className={styles.Section}>
      <img src={face} alt="MyFace" className={styles.face}></img>
      <h1 className={styles.h1}>Данил Гречкин</h1>
      <h2 className={styles.h2}>Full-Stack Web разработчик</h2>
      <div className={styles.wrapperContacts}>
        <a href="https://www.instagram.com/danilimbus/" target="_blank">
          <img src={inst} alt="Inst" />
        </a>
        <a href="https://t.me/makakanos" target="_blank">
          <img src={tg} alt="tg" />
        </a>
        <a href="https://github.com/Grekalimbus" target="_blank">
          <img src={gh} alt="gh" />
        </a>
      </div>
      <a
        href="https://hh.ru/resume/a28492ccff0ba9cb970039ed1f38734d7a6463"
        target="_blank"
        className={styles.button}
      >
        <p>Резюме</p>
      </a>
    </div>
  );
};

export default TopSection;
