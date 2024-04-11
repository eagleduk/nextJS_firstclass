import { comparePassword } from "@/utils/hashUtil";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { id, password } = req.query;
        console.log(id, password);

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
});
