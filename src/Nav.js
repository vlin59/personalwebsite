import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

if (process.env.BROWSER || process.browser) { require('./Nav.css'); }


class Nav extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
        <div>
          <nav className="navbar navbar-light navbar-fixed-top">
            <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
              &#9776;
            </button>
            <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
              <Link className="navbar-brand" to="/"><h1>Victor Lin</h1></Link>
              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                 <Link className="nav-link" to="/"><h2>About</h2></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects"><h2>Projects</h2></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
  }
}

export default Nav;