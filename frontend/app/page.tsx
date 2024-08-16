'use client';
import styles from "./page.module.css";
import InputWithIcon  from './components/InputWithIcon'

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  return (
    <main className={styles.main}>
      <InputWithIcon
        placeholder="Please input URL you want to scrape and download"
        onSubmit={handleButtonClick}
        width="80%"
      >
      </InputWithIcon>
    </main>
  );
}
