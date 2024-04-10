import { useEffect, useState } from "react";
import { ListUsers } from "./components/Usuarios";
import { Login } from "./components/Login";

function App() {
  const [renderComponent, setRenderComponent] = useState(0);

  useEffect(() => {
    const user = window.localStorage.getItem("user");

    if (user !== null) {
      setRenderComponent(1);
    }
  }, []);

  
    return (
      <main className="contenedor">
        {renderComponent === 0 ? <Login /> : <ListUsers />}
        {/* <ListUsers />
        <Login /> */}
      </main>
    );
}

export default App;
