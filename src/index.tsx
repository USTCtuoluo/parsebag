import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import App from "./App";
// const App = React.lazy(() => import('./App'));

// const Table = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}><App/></Suspense>
//   )
// }

ReactDOM.render(<App />, document.getElementById("root"));
