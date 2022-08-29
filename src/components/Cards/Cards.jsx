import "bootswatch/dist/lux/bootstrap.min.css";
import "./Cards.css"
import Count from '../Counter/itemCount';


function Cards() {
  return (
    <div className="Cards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_605005-MLA49304718556_032022-F.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Topper Gondor</h5>
              <p className="card-text">Topper Gondor Hombres Adultos - Trekking</p>
              <Count stock={10}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
