import React, {Component} from 'react';
import Olga1 from './img/Olga1.jpg';

class Olga1cont extends Component {
    render () {
        return(
            <div className="Olga1">
                <img src={Olga1}  alt="Ольга"/>
                <span className="dscrO1">
                    {"Метафорические карты\n"}
                    <a href="#about" className="info1">Подробнее</a>
                </span>
            </div>
        )
    }
}
export default Olga1cont;