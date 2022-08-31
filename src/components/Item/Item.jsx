import "bootswatch/dist/lux/bootstrap.min.css";
import "./Item.css"
import Count from '../Counter/itemCount';


function Item({ producto }) {
  return (

    <div className="card">
      <img src="https://http2.mlstatic.com/D_NQ_NP_2X_605005-MLA49304718556_032022-F.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.name}</p>
        <Count stock={10} />
      </div>
    </div>
  );
}

export default Item;
