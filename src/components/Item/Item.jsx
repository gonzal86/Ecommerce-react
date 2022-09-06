import "bootswatch/dist/lux/bootstrap.min.css";
import "./Item.css"
import { Link } from 'react-router-dom';


function Item({ producto }) {
  return (
    <>
      <div className="col">
        <div className="card imagen">
          <img src={producto.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <Link to= {`/detalle/${producto.id}`}>
              <button type="button" className="btn btn-outline-primary"> Detalle </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Item;
