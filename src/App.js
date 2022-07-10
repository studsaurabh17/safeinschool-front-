import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseOverview from "./components/Dashboardstudent/CourseOverview";
import Courses from "./components/Dashboardstudent/Courses";
import CourseView from "./components/Dashboardstudent/CourseView";
import AddCourse from "./components/DashboardTeacher/AddCourse";
import ShowCourse from "./components/DashboardTeacher/ShowCourse";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboardteacher/course"
            element={<ShowCourse />}
          ></Route>
          <Route path="/dashboardteacher/add" element={<AddCourse />}></Route>
          <Route path="/dashboardstudent" element={<Courses />}></Route>
          <Route
            path="/dashboardstudent/course:id"
            element={<CourseOverview />}
          ></Route>
          <Route
            path="/dashboardstudent/course:id/show"
            element={<CourseView />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
