import React from "react";
import ReactDOM from "react-dom/client";

//Created a nested header element using React.createElement(h1, h2,h3 inside a div with a class title)

const header = React.createElement("div", { className: "title" }, [
  React.createElement(
    "h1",
    { className: "h1" },
    "This is h1 tag using React.createElement"
  ),
  React.createElement("h2", { className: "h2" }, "This is h2 tag"),
  React.createElement("h3", { className: "h3" }, "This is h3 tag"),
]);

//Created a nested header element using JSX(h1, h2,h3 inside a div with a class title)
const headerJsx = (
  <div className="title">
    <h1 className="h1">This is h1 tag using JSX</h1>
    <h2 className="h2">This is h2 tag</h2>
    <h3 className="h3">This is h3 tag</h3>
  </div>
);

//component composition
const TestComponent = () => {
  return (
    <div className="container">
      <h4>This is a Test Componet</h4>
      {/* <HeaderComponent></HeaderComponent>
        {/* <HeaderComponent /> */}
      {/* {HeaderComponent()} */}
      {header}
      {headerJsx}
    </div>
  );
};

//Created a nested header element using Functional Componet (h1, h2,h3 inside a div with a class title)
//Pass attr

const HeaderComponent = () => {
  return (
    <div className="title">
      {/* Component composition */}

      <TestComponent></TestComponent>
      {/* <TestComponent />
      {TestComponent()} */}
      {/* {header} */}
      {/* {headerJsx} */}

      <h1 className="h1" style={{ color: "#F0E2CE" }}>
        This is h1 tag using functional Componet
      </h1>
      <h2 className="h2" style={{ color: "#35455D" }}>
        This is h2 tag
      </h2>
      <h3 className="h3" style={{ color: "#92B1B6" }}>
        This is h3 tag
      </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
