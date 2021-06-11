import {getLayout} from "../../../src/child-layout";
import Link from 'next/link';

const Profile = ({ children }) => {
  return (
    <div className={styles.container}>
      <p>Caddie Profile</p>
      <Link href="/fms/caddies/profile/schedule">
        <a>Schedule</a>
      </Link>
    </div>
  );
};

Profile.getLayout = getLayout;

export default Profile;

const styles = {
  container: {
    flex: 1,
    background: "red",
  },
};
