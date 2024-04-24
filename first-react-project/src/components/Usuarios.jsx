import { useEffect, useState } from "react";
import { Button } from "antd";
import { Restaurantes } from "./Restaurantes";
import { UserList } from "./ListaUsuarios";
import RestaurantService from "../services/Restaurantes";

export const ListUsers = () => {
  const [usuariosInformacion, setUsuariosInformacion] = useState([]);
  const [informacionRestaurantes, setInformacionRestaurantes] = useState([]);
  const [renderComponentUsers, setRenderComponentUsers] = useState(1);

  const handleClickCargarUsuarios = async () => {
    try {
      const data = await RestaurantService.getUsers();
      setUsuariosInformacion(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRestaurantes = async () => {
    try {
      const data = await RestaurantService.getRestaurantes();
      setInformacionRestaurantes(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    handleClickCargarUsuarios();
    getRestaurantes();
  }, []);

  return (
    <>
      {renderComponentUsers === 0 && (
        <UserList usuariosInformacion={usuariosInformacion} />
      )}

      {renderComponentUsers === 1 && (
        <Restaurantes informacionRestaurantes={informacionRestaurantes} />
      )}
    </>
  );
};
