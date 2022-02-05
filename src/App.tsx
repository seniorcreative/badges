import React from "react";
import Badge from "./components/Badge";
import { BadgeProps } from "./components/Badge";
import "./App.css";

function App() {
  const badgeData: BadgeProps[] = [
    { color: "red", value: 5, position: "top-right" },
    { color: "red", value: "1000+", position: "top-right" },
    { color: "red", position: "top-right" },
    { color: "green", position: "bottom-left" },
  ];

  return (
    <div className="container">
      {badgeData.map((badgeProps: BadgeProps, b: number) => {
        return (
          <div key={b} className="wrapper">
            <div className="box"></div>
            <Badge {...badgeProps} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
