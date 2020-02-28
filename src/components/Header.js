import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <div className="header">

            <a className="NavLink" href="/">Home</a> 
            <a className="NavLink" href="/">Forecast</a> 
            <a className="NavLink" href="/">News</a>  
            </div>
        );
    }
}
export default Header;