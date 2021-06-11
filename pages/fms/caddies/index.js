import { getLayout as getChildLayout } from "../../../src/child-layout";
import Link from "next/link";

const Caddies = ({ children }) => {
  return (
    <div style={styles.caddies}>
      <p>Caddies List</p>
      <Link href={`/fms/caddies/${1}`}>
        <a>View 1's Profile</a>
      </Link>
      {children}
    </div>
  );
};

export const getLayout = (page) => getChildLayout(<Caddies>{page}</Caddies>);

Caddies.getLayout = getChildLayout;

export default Caddies;

const styles = {
  caddies: {
    flex: 1,
    backgroundColor: "red",
  },
};
