import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Button appName="web" className={styles.secondary}>
      Hey there
    </Button>
  );
}
