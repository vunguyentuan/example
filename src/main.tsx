import { Citizen, CitizenForm } from "components/forms/citizen";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/globals.css";

// zod config, custom validation messages
import "lib/zod";

const App = () => {
  const onSubmit = (citizen: Citizen) => {
    console.log(citizen);
  };

  return (
    <div className="p-5">
      <h1 className="mb-10">Demo form!</h1>

      <CitizenForm onSubmit={onSubmit} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
