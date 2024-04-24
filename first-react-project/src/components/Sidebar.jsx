import {
  IconUsers,
  IconUserOff,
  IconMicrowave,
  IconSoup,
} from "@tabler/icons-react";
import { Link } from "wouter";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <span>Foodie APP</span>
      <ul>
        <li>
          <IconUsers size={20} />
          Usuarios
        </li>
        <Link href="/usuarios">
          <li>
            <IconMicrowave size={20} />
            Restaurantes
          </li>
        </Link>
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
  );
};
