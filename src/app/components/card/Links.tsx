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
  card: ICard;
}

const Links: FC<Props> = ({ card }) => {
  return (
    <div>
      {!card.demo ? (
        <a
          className={styles.link}
          href={card.repo}
          target="_blank"
          style={{ width: '50%', margin: '0 auto' }}
        >
          Репозиторий
        </a>
      ) : (
        <ul className={styles.linksFlex}>
          <li>
            <a className={styles.link} href={card.repo} target="_blank">
              Репозиторий
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={card.demo}
              target="_blank"
              style={{
                width: '50%',
                marginLeft: '10px',
                paddingRight: '35px',
                paddingLeft: '35px',
              }}
            >
              Демо
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Links;
