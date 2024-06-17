import styles from "./page.module.css";
import Link from "next/link";
import { CustomButton } from "../../components/index";
export default function Placeholder() {
  return (
    <main className={styles.placeholder__container}>
      <h1>Placeholder Route</h1>
      <p>Intended broken link.</p>
      <Link href={"/"}>
        <CustomButton
          title={"Go Home"}
          styles={{
            background: "var(--text-color)",
            color: "var(--background-color)",
          }}
        />
      </Link>
    </main>
  );
}
