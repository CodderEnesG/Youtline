import React, { useState  , useEffect } from 'react';
import "./App.css";
import { useDispatch } from 'react-redux';

import Navbar from "./components/Navbar/Navbar";
import FirstPage from "./components/FirstPage/FirstPage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Password from "./components/Password/Password";
import CheckedPassword from "./components/CheckedPassword/CheckedPassword";
import Signup from "./components/Signup/Signup";
import CheckedSignup from "./components/CheckedSignup/CheckedSignup";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import Courses from "./components/Courses/MainCourses";
import CourseDetails from  "./components/Courses/CourseDetails"
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminSidebar from "./components/AdminPanel/Sidebar/AdminSidebar";
import QuestionAnswer from "./components/AdminPanel/QA/QuestionAnswer";
import Packets from "./components/AdminPanel/Packets/Packets";
import Periods from "./components/AdminPanel/Periods/Periods";
import AdminCourses from "./components/AdminPanel/Courses/Courses";
import ForbiddenPage from './components/ForbiddenPage';
import { getPackets } from './actions/packets';
import { getUsers } from './actions/users';


function App() {
  const [isopen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentUserId, setCurrentUserId] = useState(0);
  const user =(JSON.parse(localStorage.getItem("profile")));
 
  const dispatch = useDispatch();
  const toggle = () => {
    setIsOpen(!isopen);
  };

  useEffect(() => {
    dispatch(getPackets());
  }, [currentId, dispatch]);

  
  useEffect(() => {
    dispatch(getUsers());
  }, [currentUserId, dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar isopen={isopen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/login" element={<Login/>}  />
          <Route path="/" element={<FirstPage/>}  />
          <Route path="/auth" element={<Signup/>}  />
          <Route path="/signup_check" element={<CheckedSignup/>}  />
          <Route path="/about" element={<About/>}  />
          <Route path="/forgotpassword" element={<Password/>}  />
          <Route path="/courses" element={<Courses/>}  />
          <Route path="/succesful" element={<CheckedPassword/>}  />
          <Route path="/admin" element={ <AdminPanel/>}  setCurrentUserId={setCurrentUserId} />
          <Route path="/admin/adminsidebar" element={<AdminSidebar/>} />
          <Route path="/admin/QA" element={<QuestionAnswer/>}  />
          <Route path="/admin/Packets" setCurrentId={setCurrentId} element={<Packets/>}  />
          <Route path="/admin/Periods" element={<Periods/>}  />
          <Route path="/admin/courses" element={<AdminCourses/>}  />
          <Route path="/courses/:id" element={<CourseDetails/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
