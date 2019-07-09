import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <div className="container-header">
                  <nav>
                      <ul>
                          <li><a href="#about">О нас</a></li>
                          <li><a href="#articles">Статьи</a></li>
                          <li><a href="#materials">Материалы</a></li>
                          <li><a href="#contacts">Контакты</a></li>
                      </ul>
                  </nav>
              </div>      
            </header>
        )
    }
}

export default Header;