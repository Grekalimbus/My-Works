import React, { FC, useState } from 'react';
import styles from './index.module.css';
import left from '../../image/left.svg';
import right from '../../image/right.svg';
import testIMG from '../../image/test.png';

const Card: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = 3; // replace with actual number of slides

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numSlides - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % numSlides);
  };

  return (
    <div className={styles.card}>
      <div className={styles.blockImage}>
        <div className={styles.button} onClick={handlePrevSlide}>
          <p>{'<'}</p>
        </div>
        <div className={styles.divImagesWrapper}>
          <div
            className={styles.divImages}
            style={{ transform: `translateX(-${currentSlide * 33.3}%)` }}
          >
            <div className={styles.oneImageDiv}>
              <img className={styles.img} src={testIMG} alt=""></img>
            </div>
            <div className={styles.oneImageDiv}>
              <img className={styles.img} src={testIMG} alt=""></img>
            </div>
            <div className={styles.oneImageDiv}>
              <img className={styles.img} src={testIMG} alt=""></img>
            </div>
          </div>
        </div>
        <div className={styles.button} onClick={handleNextSlide}>
          <p>{'>'}</p>
        </div>
      </div>
      <div className={styles.blockInfo}>title</div>
    </div>
  );
};

export default Card;
