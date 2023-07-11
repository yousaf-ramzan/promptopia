import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

const Rootlayout = () => {
  return (
    <htm Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{Children}</main>
      </body>
    </htm>
  );
};

export default Rootlayout;
