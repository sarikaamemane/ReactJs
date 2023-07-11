/* 
  * !* for highlighted text
! for errors and warnings
? for queries and questions
// for strikethrough
TODO for to-dos


<div id="parent">

    <div id="child">
     <h1>This  is h1 tag</h1>
    </div>

    <div id="child2">
        <h1>This  is h1 tag</h1>
    </div>
</div> 
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      React.createElement("h1", {}, "This is h1 tag")
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      React.createElement("h2", {}, "This is h2 tag")
    ),
  ]
);

//const heading = React.createElement("h1", {id:"heading", abc:"xyz"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
