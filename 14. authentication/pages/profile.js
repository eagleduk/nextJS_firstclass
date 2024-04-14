import { getServerSession } from "next-auth";
import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

export default ProfilePage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res);
  if (session) {
    return {
      props: {
        session,
      },
    };
  }
  return {
    redirect: {
      destination: "/auth",
      permanent: false,
    },
  };
}
