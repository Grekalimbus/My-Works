import React, { FC } from 'react';
import styles from './index.module.css';

interface Props {
  item: string;
}

const Technology: FC<Props> = ({ item }) => {
  return <div className={styles.technology}>{item}</div>;
};

export default Technology;
