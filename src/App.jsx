// import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/Registrationpage';
import Dashboard from './components/Student Details/Dashboard';
import PersonalD from './components/Student Details/PersonalD';
import Internships from './components/Student Details/Internships';
import StudentAchievement from './components/Student Details/StudentAchievement';
import CGPA from "./components/Student Details/CGPA";


const App = ()=> {

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element = {<Login />}
        />
        <Route
          path="/registration"
          element = {<RegistrationPage/>}
        />
         <Route
          path="/registration"
          element = {<RegistrationPage/>}
        />
         <Route
          path="/Dashboard"
          element = {<Dashboard/>}
        />
        <Route
          path="/PersonalD"
          element = {<PersonalD/>}
        />
        <Route
          path="/cgpa"
          element = {<CGPA/>}
        />
        <Route
          path="/Internships"
          element = {<Internships/>}
        />
        <Route
          path="/studentAchievements"
          element = {<StudentAchievement/>}
        />
      </Routes>
    </Router>
      
    </>
  );
};

export default App;
