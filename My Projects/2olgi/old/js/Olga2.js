import React, {Component} from 'react';
import Olga2 from './img/Olga2.jpg';

class Olga2cont extends Component {
    render () {
        return(
            <div className="Olga2">
                <img src={Olga2} alt="Ольга"/>
                <span className="dscrO2">
                    {"Регрессии\n"}
                <a href="#about" className="info2">Подробнее</a>
                </span>
            </div>
        )
    }
}
export default Olga2cont;