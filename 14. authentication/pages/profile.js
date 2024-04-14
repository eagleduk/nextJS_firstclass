import { getServerSession } from "next-auth/next";
import UserProfile from "../components/profile/user-profile";
import { AuthOptions } from "./api/auth/[...nextauth]";

function ProfilePage() {
  return <UserProfile />;
}

export default ProfilePage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, AuthOptions);
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
