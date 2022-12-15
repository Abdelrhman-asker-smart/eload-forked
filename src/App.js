import "./App.css";
// import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
// import Navbar from "./Components/Navbar/Navbar";
// import TvShow from "./Components/TvShow/TvShow";
// import Movies from "./Components/Movies/Movies";
// import MovieDetails from "./Components/MovieDetails/MovieDetails";
// import axios from "axios";
// import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
// import SearchMovies from "./Components/SearchedMovies/SearchMovies";
// import TVShowDetails from "./Components/TVShowDetails/TVShowDetails";
// import Peaple from "./Components/Peaple/Peaple";
import { useCookies } from "react-cookie";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import { useHistory } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
  const [cookie, setCookie, removeToken] = useCookies([""]);
  // console.log(cookie);
  useEffect(() => {
    if (!cookie.eload_token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);
  // console.log(login, "login");
  // function ProtectedRoute(props) {
  //   if (localStorage.getItem("tkn") == null) {
  //     return <Navigate to="/login" />;
  //   } else {
  //     return props.children;
  //   }
  // }

  // let navigate = useNavigate();
  // //Data
  // // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);

  // function clrUserData() {
  //   setCurrentUser(null);
  //   localStorage.removeItem("tkn");
  //   navigate("/login");
  // }
  // useEffect(() => {
  //   if (localStorage.getItem("tkn") != null) {
  //     decodeData();
  //   }
  // }, []);

  return (
    <>
      {login ? <Layout setLogin={setLogin} /> : <Login setLogin={setLogin} />}
      {/* <Navbar currentUser={currentUser} clrUserData={clrUserData} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {localStorage.getItem("tkn") ? (
                <Home />
              ) : (
                <Login decodeData={decodeData} />
              )}
            </>
          }
        />
        
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login decodeData={decodeData} />} />

        <Route
          path="moviedetails"
          element={
            <ProtectedRoute>
              {" "}
              <MovieDetails />{" "}
            </ProtectedRoute>
          }
        >
          <Route
            path=":id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="peaple"
          element={
            <ProtectedRoute>
              <Peaple />
            </ProtectedRoute>
          }
        />

        <Route
          path="tvshowdetails"
          element={
            <ProtectedRoute>
              {" "}
              <TVShowDetails />{" "}
            </ProtectedRoute>
          }
        >
          <Route
            path=":id"
            element={
              <ProtectedRoute>
                <TVShowDetails />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="searchmovies" element={<SearchMovies />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="tvshow"
          element={
            <ProtectedRoute>
              {" "}
              <TvShow />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="movies"
          element={
            <ProtectedRoute>
              {" "}
              <Movies />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="d-flex justify-content-center py-5 ">
              <p className="fs-1 fw-bold"> 404 </p>
            </div>
          }
        />
      </Routes> */}
    </>
  );
}

export default App;
