import React from "react";

function Navbar(){

    return (

        <nav className="navbar bg-danger">
         <div className="container-fluid">
           <a className="navbar-brand text-light" href="#home">Kiburi-FC</a>
         
         <ul className="navbar-nav me-auto">
             <li className="nav-item">
               <a className="nav-link text-light active" href="#home">SOURCES</a>
            </li>       
         </ul>
         <form className="d-flex">
            <input type="search" className="form-control" placeholder="search hapa hivi ....."/>
            <button className="btn btn-success ms-2" type="submit">{'Search'}</button>
         </form>
        
         </div>
       </nav>
    )

}


export default Navbar