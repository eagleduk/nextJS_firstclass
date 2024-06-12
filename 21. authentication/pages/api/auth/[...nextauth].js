import { comparePassword } from "@/utils/hashUtil";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions = {
  secret: "WoD2wC8MRPy/ZlUvwlBdIv7PCr51SsfG3EWpku4htqc=",
  session: {
    jwt: true,
  },
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: { id: token.sub },
      };
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(_, req) {
        const { id, password } = req.query;

        const response = await fetch(
          "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/auth/" +
            id +
            ".json"
        );

        const result = await response.json();

        if (!result) {
          throw new Error("No id found.");
        }

        const hashedPassword = result.password;

        const isCompare = comparePassword(password, hashedPassword);

        if (!isCompare) {
          throw new Error("Invalid Password");
        }

        return {
          id,
        };
      },
    }),
  ],
};

export default NextAuth(AuthOptions);
