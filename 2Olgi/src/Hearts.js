import React, {Component} from 'react';
import Logo from './Logo';
import heart from './img/hearts.jpg';

class Hearts extends Component{
    render(){
        return(
            <div className="hearts">
                <img src={heart} alt="Заставка"/>
                <span className="dscr">
                    Метафорические карты + Регрессии
                </span>
                <Logo />
            </div>
        )
    }
}
export default Hearts;