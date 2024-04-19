

export const UserList = ({usuariosInformacion}) => {
  return (
    <>
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
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>
                <img src={usuario.foto} alt={usuario.nombre} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
