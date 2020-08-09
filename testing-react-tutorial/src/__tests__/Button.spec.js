import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
   container = document.createElement("div");
   document.body.appendChild(container);
});

afterEach(() => {
   document.body.removeChild(container);
   container = null;
});

const Button = (props) => {
    const [text, setText] = useState("");
    const handleClick = () => {
        setText("PROCEED TO CHECKOUT")
    };
    return (
        <button onClick={handleClick}>{text || props.text}</button>
    )
};

describe("Button component", () => {
    test("it shows the expected text when clicked", () => {
        act(() => {
            ReactDOM.render(<Button text={"SUBSCRIBE TO BASIC"}/>, container)
        });
        const button = container.getElementsByTagName("button")[0];
        expect(button.textContent).toBe("SUBSCRIBE TO BASIC");
        act(() => {
            button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
        expect(button.textContent).toBe("PROCEED TO CHECKOUT");
    });
});

/*
import React, {useState} from "react";
import { create, act } from "react-test-renderer";

const Button = (props) => {
  const [text, setText] = useState("");
  const handleClick = () => {
      setText("PROCEED TO CHECKOUT")
  };
  return (
      <button onClick={handleClick}>{text || props.text}</button>
  )
};

describe("Button component", ()=> {
    test("it shows the expected text when clicked", () => {
        let component;
        act(() => {
            component = create(<Button text={"SUBSCRIBE TO BASIC"}/>);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        act(() => button.props.onClick());
        expect(button.props.children).toBe("PROCEED TO CHECKOUT")
    });
});*/
