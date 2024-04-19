import { Sidebar } from "./Sidebar";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export const Restaurantes = ({ informacionRestaurantes }) => {
  return (
    <div className="container">
      <Sidebar />

      <div className="render-container">
        <div className="container-view">
          <div className="container-ads">
            <img src="/image.png" alt="restaurante" />
          </div>

          <div className="container-list">
            <h1>Restaurantes</h1>
            <div className="restaurantes-container">
              {informacionRestaurantes?.map((restaurante) => (
                <article className="card" key={restaurante.id}>
                  <img src={restaurante.foto} alt="restaurante" />
                  <h2 className="title-card">{restaurante.nombre}</h2>
                  <p>{restaurante.telefono}</p>
                  <div className="button-arrow">
                    <IconArrowNarrowRight size={20} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
