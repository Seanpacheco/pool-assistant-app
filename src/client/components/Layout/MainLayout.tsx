import * as React from "react";
import "../../App.css";
import LogInLink from "../Elements/LogInButton";
import Hero from "./Hero";

export const MainLayout = () => {
  return (
    <>
      <div className="navbar glass">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a
            href="/"
            className="btn btn-ghost normal-case font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#225564] to-[#0C2A3E]"
          >
            Pool Assistant
          </a>
        </div>
        <div className="navbar-end">
          <LogInLink wide={false} />
        </div>
      </div>
      <Hero />
    </>
  );
};
