import React, {Component} from 'react';
import OlgaBlock from './OlgaBlock';
import Olga1 from './img/Olga1.jpg';
import Olga2 from './img/Olga2.jpg';

import Hearts from './Hearts';

class Main extends Component {
    render() {
        return(
            <div className="main">
                <div className="container">
                    <div className="headlogo">
                        <OlgaBlock cls="Olga1" source = {Olga1} txt={"Метафорические карты\n"} spancls="dscrO1" acls="info1"/>
                        <Hearts/>
                        <OlgaBlock cls="Olga2" source = {Olga2} txt={"Регрессии\n"} spancls="dscrO2" acls="info2"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;