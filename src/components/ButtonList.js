import React from "react";
import Button from "./Button";

const butttonList = [
  "All",
  "Gaming",
  "Cricket",
  "Cooking",
  "Music",
  "Gaming",
  "Cricket",
  "Cooking",
  "Music",
  "Comedy",
];

const ButtonList = () => {
  return (
    <div className="flex my-2">
      {butttonList.map((button, index) => (
        <Button name={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
