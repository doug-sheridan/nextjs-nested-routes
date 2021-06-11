import Link from "next/link";
import MainLayout from "../src/main-layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>FMS</p>
      <Link href="/fms">
        <a>/fms</a>
      </Link>
    </div>
  );
}

Home.getLayout = page => <MainLayout>{page}</MainLayout>;

const styles = {
  container: {
    flex: 1,
    background: "black",
  },
};
