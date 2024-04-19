import {
    IconUsers,
    IconUserOff,
    IconMicrowave,
    IconSoup,
  } from "@tabler/icons-react";
  
export const Sidebar = () => {
    return (
        <nav className="sidebar">
        <span>Foodie APP</span>
        <ul>
          <li>
            <IconUsers size={20} />
            Usuarios
          </li>
          <li>
            <IconMicrowave size={20} />
            Restaurantes
          </li>
          <li>
            <IconSoup size={20} />
            Platillos
          </li>
          <li>
            <IconUserOff size={20} />
            Cerrar Sesión
          </li>
        </ul>
      </nav>
    )
}