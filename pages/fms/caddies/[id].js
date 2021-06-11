import { useRouter } from "next/router";
import Link from "next/link";
import { getLayout as getCaddiesLayout } from "./index";

const Caddie = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={styles.container}>
      <p>{id}'s Profile</p>
      <Link href={`/fms/caddies/schedule/${id}`}>
        <a>View {id}'s Schedule</a>
      </Link>
    </div>
  );
};

Caddie.getLayout = page => getCaddiesLayout(<Caddie>{page}</Caddie>);

export default Caddie;

const styles = {
  container: {
    flex: 1,
    background: "green",
  },
};
