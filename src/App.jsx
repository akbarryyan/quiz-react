import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import QuizPage from "@pages/QuizPage";
import ResultPage from "@pages/ResultPage";
import Header from "@components/common/Header";

function App() {
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {isLoggedIn && <Header />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/quiz"
            element={isLoggedIn ? <QuizPage /> : <Navigate to="/" />}
          />
          <Route
            path="/result"
            element={isLoggedIn ? <ResultPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
