import React,{Component} from 'react';
import '../css/nav.css' 
class Nav extends Component {
    state = { 
      sideBarStatus:true
     } 
        
    handleOpen()  { 
      document.querySelector(".sidemenu").style.animation= "show 1s forwards"; 
      
    }
    handleClose() {  
      document.querySelector(".sidemenu").style.animation= "hide 1s forwards"; 
       
     }

    render() {  
     return <nav>
          <div className="nav-bar">
              <div className = "logo"> 
              <img src="/img/logots.svg"/>
              </div>
              <div className ="menu-center">
                  <ul className="menuitems">
                      <li><a href="#">Model 3</a></li>
                      <li><a href="#">Model X</a></li>
                      <li><a href="#">Model S</a></li>
                      <li><a href="#">Model Y</a></li>
                      <li><a href="#">Solar Panel</a></li>
                      <li><a href="#">Solar Roof</a></li>
                   </ul>
              </div>
              <div className ="menu-right">
                  <ul className='menuitems'> 
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#"
                          onClick={this.handleOpen}>Menu</a></li>
                  </ul>
                  </div> 
          </div>
          <div className="sidemenu"  
          >
            <ul>
              <li>
                <div className ="closeBtn"
                onClick={this.handleClose}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                </div>
              </li>
              <li><a href="#">Model S</a></li>
              <li><a href="#">Model 3</a></li>
              <li><a href="#">Model X</a></li>
              <li><a href="#">Model Y</a></li>
              <li><a href="#">Solar Roof</a></li>
              <li><a href="#">Solar Panels</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade In</a></li>
              <li><a href="#">Test Drive</a></li>
              <li><a href="#">Powerwall</a></li>
               <li><a href="#">Find Us</a></li> 
            </ul>
          </div>
        </nav>;
    }
}
 
export default Nav;