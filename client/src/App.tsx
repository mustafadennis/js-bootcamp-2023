import "./App.css";
import LoginPage from "./LoginPage";
import UsersPage from "./UsersPage";
import useAuth from "./useAuth";

function App() {
  const { isLoggedIn, loading } = useAuth(document.cookie);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && <UsersPage />}
    </div>
  );
}

export default App;
