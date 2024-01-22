import Left from 'assets/left.svg';
import Logo from 'assets/logo.svg';
import styles from './Header.module.css';
import { FC } from 'react';
import { Button } from 'components/Button/Button';

interface IProps {
  onClick: () => void;
}

export const Header: FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <Button header>
        <img src={Left} alt="left arrow" onClick={onClick} />
      </Button>
      <div className={styles.logo}>
        <img src={Logo} alt="Smiling avocado" />
      </div>
      <p className={styles.text}>Food Mentor</p>
    </div>
  );
};
