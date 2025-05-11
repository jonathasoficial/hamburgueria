import hamb1 from "../../assets/image/hamb-1.png";
import styles from "../header/header.module.css";

export const Header = () => {
  const isOpen = checkIfOpen();

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img src={hamb1} alt="Logo Dev Burguer" className={styles.logo} />
        <h1 className={styles.title}>Dev Burguer</h1>
        <span className={styles.address}>Rua dev 10, Campo Grande - MS</span>

        <div className={`px-4 py-1 rounded-lg mt-5 flex items-center
            ${isOpen ? "bg-green-600" : "bg-red-600"}`}>
          <span className="text-white font-medium">
            Seg á Dom - 18:00 as 23:00
          </span>
        </div>
      </div>
    </header>
  );
};

function checkIfOpen(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 18 && hour < 23;
}