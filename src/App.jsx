import React, { useState } from "react";
import ProfileCard from "./constants/ProfileCard";
import { useForm } from "react-hook-form";
import Maincta from "./Maincta";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import MainsForm from "./MainsForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="mb-6">
      <MainsForm />
      <Footer />
    </div>
  );
}
export default App;
