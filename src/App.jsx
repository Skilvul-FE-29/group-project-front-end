// import Navbar from "./components/navbar/Navbar";
import TeacherList from "./pages/TeacherList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import TeacherDetails from "./pages/TeacherDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/teachers/:id" element={<TeacherDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
