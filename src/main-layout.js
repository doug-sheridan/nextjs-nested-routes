const MainLayout = ({ children }) => {
  return (
    <div style={styles.main}>
      <p>SPA</p>
      {children}
    </div>
  );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;

const styles = {
  main: {
    backgroundColor: "yellow",
  },
};
