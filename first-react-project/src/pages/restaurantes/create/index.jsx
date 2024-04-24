import { useState, useEffect } from "react";
import RestaurantesService from "../../../services/Restaurantes";
import { Sidebar } from "../../../components/Sidebar";
import { Select } from "antd";
import toast from "react-hot-toast";

export default function CreateRestaurant() {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const usersFromApi = await RestaurantesService.getUsers();
    setUsers(usersFromApi);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRestaurant = {
      nombre,
      foto,
      email,
      direccion,
      descripcion,
      telefono,
      id_user: Number(usuario),
    };

    const response = await RestaurantesService.createRestaurant(newRestaurant);

    if (response.isSuccess === true) {
      toast.success("Restaurante creado correctamente");
      setTimeout(() => {
        window.location.href = "/usuarios";
      }, 2000);
    } else {
      toast.error("Error al crear el restaurante");
    }
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="render-container">
        <div className="container-view">
          <div className="container-ads">
            <img src="/image.png" alt="restaurante" />
          </div>

          <div className="container-list">
            <h1>Crear Restaurante</h1>
            <div className="create-restaurant-container">
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label>Nombre</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Foto (url)</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setFoto(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Dirección</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Descripción</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Teléfono</label>
                  <input
                    required
                    type="number"
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Usuario</label>
                  <select
                    required
                    onChange={(e) => {
                      setUsuario(e.target.value);
                    }}
                    defaultValue={0}
                  >
                    <option value="0" disabled>
                      Selecciona un usuario
                    </option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit">Crear Restaurante</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
