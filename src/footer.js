import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Footer() {
   useEffect(() => {
      AOS.init();
   })

   return (

      // -------------------------------- footer start --------------------------------
      <div className="container-fluid g-0" id="footer">
         <div className="row text-center">
            <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
               <a href="" id="facebook" ><i class="fa-brands fa-facebook-f"></i></a>
               <a href="" id="twitter"><i class="fa-brands fa-twitter"></i></a>
            </div>
         </div>
         <div className="row text-center">
            <div className="col-12 p-0">
               <p>©  2024 Car repair. All Rights Reserved.Privacy Policy <a href="https://adityawaportfolio.netlify.app/" target="_blank" id="made">made by AdityaWa</a></p>
            </div>
         </div>
      </div>
      // -------------------------------- footer end --------------------------------

   )

}






