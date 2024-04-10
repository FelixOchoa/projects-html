import { useEffect, useState } from "react";
import { Button } from "antd";

export const ListUsers = () => {
    const [usuariosInformacion, setUsuariosInformacion] = useState([]);

    const handleClickCargarUsuarios = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/usuarios");
            const data = await response.json();
            setUsuariosInformacion(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        window.localStorage.removeItem("user");
        window.location.reload();
    }

    useEffect(() => {
        handleClickCargarUsuarios();
    }, []);

    return (
        <>
            <Button type="primary" onClick={handleLogout} >Cerrar Sesión</Button>
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
}