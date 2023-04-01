import React, { FC, useState } from 'react';
import styles from './index.module.css';
import ImageBlock from './ImageBlock';
import Technology from './Technology';
import Links from './Links';

interface ICard {
  name: string;
  image: string[];
  title: string;
  technology: string[];
  repo: string;
  demo?: string;
}

interface Props {
  numSlides: number;
  card: ICard;
}

const Card: FC<Props> = ({ numSlides, card }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        <ImageBlock currentSlide={currentSlide} card={card} />
        <div className={styles.button} onClick={handleNextSlide}>
          <p>{'>'}</p>
        </div>
      </div>
      <div className={styles.blockInfo}>
        <div className={styles.nameProject}>
          <h2>{card.name}</h2>
        </div>
        <div className={styles.titleProject}>
          <p>{card.title}</p>
        </div>
        <div className={styles.technologyFlex}>
          {card.technology.map((item) => {
            return <Technology key={item} item={item} />;
          })}
        </div>
        <Links card={card} />
      </div>
    </div>
  );
};

export default Card;
