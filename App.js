import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import Navigation from "./src/components/Navigation";

//Global theme
const theme = {
  default: {
    backgroundColor: "#132239",
    purple: "#876AEA",
    darkPurple: "#463973",
    blue: "#156596",
  },
};

export default function App() {
  const [gender, setGender] = useState(null);
  return (
    <ThemeProvider theme={theme.default}>
      <Navigation theme={theme.default} />
    </ThemeProvider>
  );
}
