import Link from "next/link";
import MainLayout from "../../src/main-layout";

export default function Fms() {
  return (
    <div className={styles.container}>
      <p>FMS</p>
      <Link href="/fms/caddies">
        <a>/caddies</a>
      </Link>
    </div>
  );
}

Fms.getLayout = page => <MainLayout>{page}</MainLayout>;

const styles = {
  container: {
    flex: 1,
    background: "blue",
  },
};
