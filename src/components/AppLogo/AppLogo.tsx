import { FunctionComponent } from 'react';
import logo from './logo.svg';
import styles from './AppLogo.module.scss';

interface AppLogoProps {
  coordinate: { x: number; y: number };
  id: string;
}

const AppLogo: FunctionComponent<AppLogoProps> = ({ coordinate, id }) => {
  const height = 40;
  return (
    <img
      id={id}
      src={logo}
      className={styles.AppLogo}
      alt="logo"
      style={{ height: height, left: coordinate.x - height / 2 - 8, top: coordinate.y - height / 2 }}
    />
  );
};

export default AppLogo;
