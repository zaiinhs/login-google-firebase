import type { NextPage } from "next";
import SignIn from "@/app/components/SignIn";

const LoginGoogle: NextPage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SignIn />
    </div>
  );
};

export default LoginGoogle;
