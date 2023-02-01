import React from "react";
import MyButton from "./MyButton";
import DivPanel from "./DivPanel";

const MainPanel = () => {
  return (
    <div>
      This is the main counter panel <MyButton></MyButton> <DivPanel></DivPanel>
    </div>
  );
}

export default MainPanel;