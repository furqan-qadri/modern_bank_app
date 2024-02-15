import React, { useState } from "react";
import ProfileCard from "./constants/ProfileCard";
import { useForm } from "react-hook-form";
import Maincta from "./Maincta";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import MainsForm from "./MainsForm";

function App() {
  return (
    <div>
      <MainsForm />
    </div>
  );
}
export default App;
