import { useEffect, useState } from "react";
import { ListUsers } from "./components/Usuarios";
import { Login } from "./components/Login";
import { Switch, Router } from "wouter";
import { Toaster } from "react-hot-toast";
import CreateRestaurant from "./pages/restaurantes/create";

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
      <Toaster />
      <Switch>
        <Router path="/login">
          <Login />
        </Router>
        <Router path="/usuarios">
          <ListUsers />
        </Router>
        <Router path="/restaurantes/create">
          <CreateRestaurant />
        </Router>
      </Switch>
    </main>
  );
}

export default App;
