"use client";

import React, { useState } from "react";
import Home from "@/components/Home/Home";
import Nav from "@/components/Navbar/Nav";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {};

  return (
    <div>
      <Nav openNav={openNav} />
      <Home />
    </div>
  );
};

export default HomePage;
