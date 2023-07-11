import "./App.css";
import Layout from "./Layout";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
//RULE NUMBER 1 OF REACT YOU NEED TO HAVE PAGES HERE NO COMPONENTS
function App() {
  return (
    <Layout>
      <HomePage />
      {/* <LoginPage /> */}
    </Layout>
  );
}

export default App;
