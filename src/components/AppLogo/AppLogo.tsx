import { FunctionComponent } from 'react';
import logo from './logo.svg';
import styles from './AppLogo.module.scss';

interface AppLogoProps {}

const AppLogo: FunctionComponent<AppLogoProps> = () => {
  return <img src={logo} className={styles.AppLogo} alt="logo" />;
};

export default AppLogo;
