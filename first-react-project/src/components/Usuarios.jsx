import { useEffect, useState } from "react";
import { Button } from "antd";
import { Restaurantes } from "./Restaurantes";
import { UserList } from "./ListaUsuarios";

export const ListUsers = () => {
  const [usuariosInformacion, setUsuariosInformacion] = useState([]);
  const [informacionRestaurantes, setInformacionRestaurantes] = useState([]);
  const [renderComponentUsers, setRenderComponentUsers] = useState(1);

  const handleClickCargarUsuarios = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/usuarios"
      );
      const data = await response.json();
      setUsuariosInformacion(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRestaurantes = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/restaurantes"
      );
      const data = await response.json();
      setInformacionRestaurantes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  const handleRenderComponent = (value) => {
    setRenderComponentUsers(value);
  };

  useEffect(() => {
    handleClickCargarUsuarios();
    getRestaurantes();
  }, []);

  return (
    <>
      <div className="row-buttons">
        {/* <Button type="primary" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
        <Button type="primary" onClick={() => handleRenderComponent(0)}>
          Usuarios
        </Button>
        <Button type="primary" onClick={() => handleRenderComponent(1)}>
          Restaurantes
        </Button> */}
      </div>

      {renderComponentUsers === 0 && (
        <UserList usuariosInformacion={usuariosInformacion} />
      )}

      {renderComponentUsers === 1 && (
        <Restaurantes informacionRestaurantes={informacionRestaurantes} />
      )}
    </>
  );
};
