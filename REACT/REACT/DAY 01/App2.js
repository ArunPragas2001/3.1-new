const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "Hello world!")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);