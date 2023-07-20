import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Box width="400px">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
