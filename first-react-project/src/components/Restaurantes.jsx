import { Sidebar } from "./Sidebar";
import { IconArrowNarrowRight, IconArrowDownToArc } from "@tabler/icons-react";
import toast from "react-hot-toast";
import { Link } from "wouter";
import { Button, Popover } from "antd";
import RestaurantesService from "../services/Restaurantes";

export const Restaurantes = ({ informacionRestaurantes }) => {
  const handleClickDelete = async (id) => {
    const response = await RestaurantesService.deleteRestaurant(id);

    if (response.isSuccess === true) {
      toast.success("Restaurante eliminado correctamente");
      setTimeout(() => {
        window.location.href = "/usuarios";
      }, 2000);
    } else {
      toast.error("Error al eliminar el restaurante");
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
            <div>
              <h1>Restaurantes</h1>

              <Link href="/restaurantes/create">
                <button className="button-create">Crear Restaurante</button>
              </Link>
            </div>
            <div className="restaurantes-container">
              {informacionRestaurantes?.map((restaurante) => (
                <article className="card" key={restaurante.id}>
                  <Popover
                    content={
                      <Button
                        onClick={() => handleClickDelete(restaurante.id)}
                        type="primary"
                      >
                        Eliminar
                      </Button>
                    }
                    className="popOver"
                  >
                    <IconArrowDownToArc size={20} />
                  </Popover>
                  <img src={restaurante.foto} alt="restaurante" />
                  <h2 className="title-card">{restaurante.nombre}</h2>
                  <p>{restaurante.telefono}</p>
                  <button
                    className="button-arrow"
                    onClick={() => toast.success("¡Pronto! 🚀")}
                  >
                    <IconArrowNarrowRight size={20} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
