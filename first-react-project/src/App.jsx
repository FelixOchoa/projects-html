import { useEffect, useState } from "react";

function App() {
  const [usuariosInformacion, setUsuariosInformacion] = useState([]);

  const handleClickCargarUsuarios = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      const data = await response.json();
      setUsuariosInformacion(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleClickCargarUsuarios();
  }, []);

  return (
    <main className="contenedor">
      <h1>Listado de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {usuariosInformacion.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>
                <img src={usuario.avatar} alt={usuario.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
