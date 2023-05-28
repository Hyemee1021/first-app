import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const operators = ["+", "-", "%", "*", "/"];

  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];

  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setlastOperator] = useState("");

  const handleButtonClick = (val) => {
    if (val === "AC") {
      return setDisplayValue(0);
    }

    if (val === "←") {
      return setDisplayValue(displayValue.slice(0, -1));
    }

    if (val === "=") {
      // const lastCharacter = displayValue.slice(-1);
      //slice the last charactor 3+3 == doesnt show yet

      const lastCharacter = displayValue[displayValue.length - 1];

      //we are storing displayvalue without last charactor
      let tempString = displayValue;
      //storing a value of a state to a normal variable then I can use ot easier

      if (operators.includes(lastCharacter)) {
        tempString = displayValue.slice(0, -1);

        //slice the last charactor 3+3 =
      }

      const total = eval(tempString); //
      return setDisplayValue(total.toString());
    }

    if (operators.includes(val)) {
      if (!displayValue) {
        return;
      }

      let tempString = displayValue;
      const lastCharacter = displayValue[displayValue.length - 1];

      if (operators.includes(lastCharacter)) {
        tempString = displayValue.slice(0, -1);
        //get rid of one more last charactor
      }
      setDisplayValue(tempString + val);
      //we are inside of if include operator-true

      setlastOperator(val);
      return;
    }
    //when user click operator after number they need to click

    //storing value of last operator in the state
    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};
