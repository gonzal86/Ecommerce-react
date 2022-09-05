import "bootswatch/dist/lux/bootstrap.min.css";
import "./Item.css"
import Count from '../Counter/itemCount';


function Item({ producto }) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src= {producto.img} className="card-img-top" width="70" heigth="50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <Count stock={10} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
