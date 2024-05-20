import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FamilyProfile from "./pages/FamilyProfile";
// import PrivateRoute from './components/PrivateRoute';
import Login from "./pages/Login";
import Register from "./pages/Register";
import FamilyTreePage from "./pages/FamilyTreePage";
import Profile from "./pages/Profile";
import MemberDetails from "./pages/MemberDetails";
import FamilyHistory from "./pages/FamilyHistory";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import FamilyEvents from "./pages/FamilyEvents";
import NewsFeed from "./pages/NewsFeed";
import Approval from "./components/Approval";
// import { getMembers } from "./services/memberService";
// import { isAuthenticated } from "./services/authService";
import "./styles/main.scss";

const App = () => {
  // const [members, setMembers] = useState([]);
  // const { isLoading, isAuthenticated } = useAuth0();
  const { isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const fetchMembers = async () => {
  //       const data = await getMembers();
  //       setMembers(data);
  //     };
  //     fetchMembers();
  //   }
  // }, [isAuthenticated]);

  // if (isLoading) return <div>Loading...</div>;

  return (
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {isAuthenticated ? (
              <>
                <Route path="/family-profile" element={<FamilyProfile />} />
                <Route path="/family-tree" element={<FamilyTreePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/member/:id" element={<MemberDetails />} />
                <Route path="/history" element={<FamilyHistory />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/search" element={<Search />} />
                <Route path="/events" element={<FamilyEvents />} />
                <Route path="/news-feed" element={<NewsFeed />} />
                <Route path="/approval" element={<Approval />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/" />} />
            )}
            {/* <Route
              path="/family-tree"
              element={
                <PrivateRoute>
                  <FamilyTreePage members={members} />
                </PrivateRoute>
              }
            /> */}
            {/* <Route path="/" element={<Navigate from="/" to="/family-tree" />} /> */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
  );
};

export default App;
