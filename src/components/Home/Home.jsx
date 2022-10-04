import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Home.css'

/*HOME de la aplicacion */
const Home = () => {
    return (
        <div>
            <div className='FormaPago'>
                <div className="container text-center">
                    <div className="row row-cols-4">
                        <div className="col">Credito
                            <div className="align-items-center marg-img">
                                <img src='https://cdn-icons-png.flaticon.com/512/3037/3037255.png' width='40' height='40' alt=''></img>
                            </div>
                        </div>
                        <div className="col">Debito
                            <div className="align-items-center marg-img">
                                <img src='https://cdn-icons-png.flaticon.com/512/3592/3592624.png' width='40' height='40' alt=''></img>
                            </div>
                        </div>
                        <div className="col">Efectivo
                            <div className="align-items-center marg-img">
                                <img src='https://cdn-icons-png.flaticon.com/512/2488/2488749.png' width='40' height='40' alt=''></img>
                            </div>
                        </div>
                        <div className="col">Transferencia
                            <div className="align-items-center marg-img">
                            <img src='https://cdn-icons-png.flaticon.com/512/2311/2311685.png' width='40' height='40' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemListContainer />
        </div>
    );
}

export default Home;
