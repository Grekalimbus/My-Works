import React, { FC, useEffect, useState, Children, cloneElement, ReactElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

interface Props {
  children: ReactElement | ReactElement[];
}

const Sliders: FC<Props> = ({ children }) => {
  const [pages, setPages] = useState<ReactElement[]>([]); // specify the type of `pages` state
  const [offset, setOffset] = useState(0);

  const handleLeftClick = () => {
    const newOffset = offset + 100;
    console.log(offset);

    setOffset((prevState) => (prevState = Math.min(newOffset, 0)));
  };
  const handleRightClick = () => {
    const newOffset = offset - 100;
    const maxOffset = -(100 * (pages.length - 1));
    setOffset((prevState) => (prevState = Math.max(newOffset, maxOffset)));
    if (newOffset === maxOffset - 100) {
      setOffset(0);
    }
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%',
          },
        });
      })
    );
  }, [children]);

  return (
    <div className={styles.mainContainer}>
      <FaChevronLeft className={styles.arrow} onClick={handleLeftClick} style={{ width: '30px' }} />
      <div className={styles.window}>
        <div className={styles.allPagesContainer} style={{ transform: `translateX(${offset}%)` }}>
          {pages}
        </div>
      </div>
      <FaChevronRight
        className={styles.arrow}
        onClick={handleRightClick}
        style={{ width: '30px' }}
      />
    </div>
  );
};

export default Sliders;
