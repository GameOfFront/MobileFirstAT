// app/page.tsx
import React from "react";
import Home from "./Home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | MobileFirst-AT",
};

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
