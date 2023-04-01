import React, { FC } from 'react';
import styles from './index.module.css';

interface ICard {
  name: string;
  image: string[];
  title: string;
  technology: string[];
  repo: string;
  demo?: string;
}

interface Props {
  currentSlide: number;
  card: ICard;
}

const ImageBlock: FC<Props> = ({ currentSlide, card }) => {
  return (
    <div className={styles.divImagesWrapper}>
      <div
        className={styles.divImages}
        style={{ transform: `translateX(-${(currentSlide * 100) / 3}%)` }}
      >
        {card.image.map((item) => {
          return (
            <div key={item} className={styles.oneImageDiv}>
              <img className={styles.img} src={item} alt="item"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageBlock;
