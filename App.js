const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {},
      "This is from h1 Nested inside div with id child",
    ),
    React.createElement(
      "h2",
      {},
      "This is from h2 Nested inside div with id child",
    ),
  ]),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
