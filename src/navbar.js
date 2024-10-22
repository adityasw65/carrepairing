import { Link } from "react-router-dom";
import logo from "./images/logo-default-373x64.png";

export default function Navbar() {

   return (

      <div className="container-fluid">
         <div className="row">
            <div className="col-12 ">

               {/* ------------------------- navbar start ------------------------- */}

               <nav class="navbar navbar-expand-lg fixed-top" id="navigation">
                  <div class="container-fluid py-2">
                     <Link class="navbar-brand order-1 order-md-0 text-center text-md-start" to="/home">
                        <img src={logo} alt="image not found" className="img-fluid" id="logo" />
                     </Link>

                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     
                     <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-md-auto mb-2 mb-lg-0 gap-3 text-center order-0 order-md-1">
                           <li class="nav-item">
                              <Link class="nav-link" to="/home">Home</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/service">Service</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/price">prices</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/news">News</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>

               {/* ------------------------- navbar start ------------------------- */}

            </div>
         </div>
      </div>
   )

}



