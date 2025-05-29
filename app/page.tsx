"use client";

import Home from "@/components/Home/Home";
import Nav from "@/components/Navbar/Nav";

const HomePage = () => {
  const openNav = () => {};

  return (
    <div>
      <Nav openNav={openNav} />
      <Home />
    </div>
  );
};

export default HomePage;
