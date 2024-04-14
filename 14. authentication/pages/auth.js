import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) router.replace("/");
    });
  }, []);
  return <AuthForm />;
}

export default AuthPage;
