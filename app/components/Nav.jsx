var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text cursor-default app-name">
                        RTimer
                    </li>
                    <li>
                        <IndexLink to="/timer" className="eachLink" activeClassName="active" activeStyle={{
                            fontWeight: 'bold',
                            // color: '#034881'
                        }}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" className="eachLink" activeClassName="active" activeStyle={{
                            fontWeight: 'bold',
                            // color: '#034881'
                        }}>CountDown</Link>
                    </li>

                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/Slamadalius/Rtimer" target="_blank">Dalius Slamas</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

module.exports = Nav;
