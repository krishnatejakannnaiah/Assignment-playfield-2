import React from 'react'
import './App.css';
import Data from './Data'


function Navbar2(props){

return(
	<navbar className="nav">
	<ul className="u"><li className="l"><button onClick={props.Twopage}>Get Users</button></li>
  </ul></navbar>

	)

}

export default Navbar2