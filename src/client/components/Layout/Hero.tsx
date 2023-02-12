import * as React from"react";
import LogInLink from "../Elements/LogInButton";
import SignUpLink from "../Elements/SignUpLink";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-12 flex-col lg:flex-row">
        <div className="flex flex-col gap-4">
          <LogInLink wide={true} />
          <SignUpLink wide={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl">
          <div className="card-body glass">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl font-bold text-white">
                For the Pool and Spa Professional
              </h1>
              <p className="py-6 text-xl text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
