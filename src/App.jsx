import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
// import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      {/* <LocationList /> */}
      <Routes>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
