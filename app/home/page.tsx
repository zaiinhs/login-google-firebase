"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomePage: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Home View</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
