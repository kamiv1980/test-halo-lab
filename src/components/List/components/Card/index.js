import { memo } from 'react';
import styles from './styles.module.css';
import { ReactComponent as CardLogo } from './card.svg';

export const Card = memo(({ item, handleModalData }) => {
  return (
    <>
      <div className={styles.card}>
        <p className={styles.category}>{item.category}</p>
        <p className={styles.name}>{item.name}</p>
        <div className={styles.cost}>
          <p className={styles.symbol}>$</p>
          <p className={styles.price}>{item.price}</p>
          <button onClick={handleModalData(item)} className={styles.button_buy}>
            <CardLogo className={styles.icon_card} />
          </button>
        </div>
      </div>
    </>
  );
});
