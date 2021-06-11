import { useRouter } from "next/router";
import { getLayout as getCaddiesListLayout } from '../index';

const Schedule = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={styles.container}>
      <p>{id}'s Schedule</p>
      <p>My schedule goes here...</p>
    </div>
  );
};

Schedule.getLayout = getCaddiesListLayout;

export default Schedule;

const styles = {
  container: {
    flex: 1,
    background: "pink",
  },
};
