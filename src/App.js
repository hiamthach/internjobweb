import Routers from "./Routers";
import './styles/index.scss'
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routers/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
