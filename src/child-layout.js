import { getLayout as getMainLayout } from "./main-layout";

const ChildLayout = ({ children }) => {
  return (
    <div style={styles.main}>
      <p>Caddies</p>
      {children}
    </div>
  );
};

export const getLayout = (page) =>
  getMainLayout(<ChildLayout>{page}</ChildLayout>);

export default ChildLayout;

const styles = {
  main: {
    backgroundColor: "orange",
  },
};
