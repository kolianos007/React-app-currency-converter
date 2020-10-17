import React from 'react';
import './Nav.css';

class Nav extends React.Component {

  render() {
    const arr = {
      'Главная': '/',
      'О нас': '/about',
      'Точки обмена': '/point',
      'Контакты': '/contacts',
    }
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              {Object.entries(arr).map(([key, value]) => {
                return <li key={key}><a href={value}>{key}</a></li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }

}

export default Nav;
