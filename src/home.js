import slideImage1 from "./images/slider-01-1920x1050.jpg";
import slideImage2 from "./images/slider-02-1920x1050.jpg";
import slideImage3 from "./images/slider-03-1920x1050.jpg";

import service1 from "./images/home-01-960x710.jpg";
import service2 from "./images/home-02-960x710.jpg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home(props) {

   useEffect(() => {
      AOS.init();
   })

   const responsiveOwl = {
      loop: true,
      margin: 10,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      autoplaySpeed: 1500,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         }
      }
   }


   return (

      // ------------------------------------- home start -------------------------------------
      <div className="container-fluid g-0" style={{overflow: "hidden"}}>


         <div className="container-fluid" id="home">
            <div className="row">
               <div className="col-12 p-0">

                  {/* ----------------- carousel start ----------------- */}

                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                           <img src={slideImage1} className="d-block w-100" alt="image not found" />
                           <div class="carousel-caption" data-aos="fade-up" data-aos-duration="1500">
                              <h5><span>Quality Car</span> maintenance</h5>
                              <p>At Car Repair, we strive to provide the best level of service to all our customer ensuring they enjoying safe and pleasant driving experience. We offer an extensive range of car repair and maintenance service for cars of all makes and models all under the one roof. We specialize in car service including wheel alignment service, car body repair, engine repair, denting and paiting etc.</p>
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                           <img src={slideImage2} className="d-block w-100" alt="image not found" />
                           <div class="carousel-caption" data-aos="fade-up" data-aos-duration="1500">
                              <h5><span>Expert Team of</span> Technicians</h5>
                              <p>At Car Repair, we strive to provide the best level of service to all our customer ensuring they enjoying safe and pleasant driving experience. We offer an extensive range of car repair and maintenance service for cars of all makes and models all under the one roof. We specialize in car service including wheel alignment service, car body repair, engine repair, denting and paiting etc.</p>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <img src={slideImage3} className="d-block w-100" alt="image not found" />
                           <div class="carousel-caption" data-aos="fade-up" data-aos-duration="1500">
                              <h5><span>Full-Service</span> repair facility</h5>
                              <p>At Car Repair, we strive to provide the best level of service to all our customer ensuring they enjoying safe and pleasant driving experience. We offer an extensive range of car repair and maintenance service for cars of all makes and models all under the one roof. We specialize in car service including wheel alignment service, car body repair, engine repair, denting and paiting etc.</p>
                           </div>
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                     </button>
                  </div>

                  {/* ----------------- carousel end ----------------- */}

               </div>
            </div>
         </div>



         {/* ----------------- about start ----------------- */}
         <div className="container-fluid" id="about">
            <div className="row justify-content-center gap-3 gap-md-4">
               <div className="col-12 col-md-8 col-lg-6 text-center p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5><span>a Few words</span> About Us</h5>
               </div>
               <div className="col-12 col-md-10 col-lg-8 text-center p-0" data-aos="fade-up" data-aos-duration="1500">
                  <p>
                     For nearly 20 years, residents throughout the local area have turned to Car Repair for all of their automotive repair needs. With free estimates and fast turnaround, we are known for our personal service and expertise in all forms of specialized engine repair. We use the latest and most modern diagnostic technology to have you back in your car.
                  </p>
               </div>
               <div className="col-12 text-center mt-3 p-0" data-aos="fade-up" data-aos-duration="1500">
                  <a href="">Read More</a>
               </div>
            </div>
         </div>
         {/* ----------------- about end ----------------- */}



         {/* ----------------- service start ----------------- */}
         <div className="container-fluid" id="service">
            <div className="row">
               <div className="col-12 col-lg-6 p-0">
                  <img src={service1} alt="image not found" className="img-fluid w-100 h-100" />
               </div>
               <div className="col-12 col-lg-6" id="service-info1">
                  <div className="row text-center gap-3">
                     <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                        <h5><span>Best</span> Services</h5>
                     </div>
                     <div className="col-12 p-0" data-aos="fade-left" data-aos-duration="1500">
                        <p>
                           Car Repair can solve almost any problem that occurs with your vehicle. From engine repairs and oil change to regular maintenance and diagnostics, you will always get reliable services from our ASE certified technicians who use the latest in automotive equipment and diagnostic software.
                        </p>
                     </div>
                     <div className="col-12 p-0" data-aos="fade-left" data-aos-duration="1500">
                        <a href="">Read More</a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-12 col-lg-6 p-0 order-0 order-lg-1">
                  <img src={service2} alt="image not found" className="img-fluid w-100 h-100" />
               </div>
               <div className="col-12 col-lg-6 order-1 order-lg-0" id="service-info2">
                  <div className="row text-center gap-3">
                     <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                        <h5><span>100% Result</span> Guarantee</h5>
                     </div>
                     <div className="col-12 p-0" data-aos="fade-right" data-aos-duration="1500">
                        <p>
                           Car Repair stands for expertise, value, and professionalism - and has from the day the company began. We were the first automotive aftermarket repair company to offer a lifetime guarantee on select services, and today we guarantee that the results of our work will meet your expectations.
                        </p>
                     </div>
                     <div className="col-12 p-0" data-aos="fade-right" data-aos-duration="1500">
                        <a href="">Read More</a>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         {/* ----------------- service end ----------------- */}



         {/* ----------------- client start ----------------- */}

         <div className="container-fluid" id="client">
            <div className="row text-center justify-content-center">
               <div className="col-12 col-md-8 col-lg-6 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>What Our <span>Clients say</span></h5>
               </div>
            </div>
            <div className="row text-center justify-content-center mt-3">
               <div className="col-12 col-lg-8 p-0" data-aos="zoom-in" data-aos-duration="1500">
                  <OwlCarousel className='owl-theme' loop margin={10} {...responsiveOwl}>
                     {
                        props.owlarr.map((item) => (
                           <div className="item">
                              <img src={item.img} alt="" className="img-fluid mx-auto" />
                              <h4 className="mt-3">{item.title}</h4>
                              <p className="mt-3">{item.para}</p>
                           </div>
                        ))
                     }
                  </OwlCarousel>
               </div>
            </div>
         </div>
         {/* ----------------- client end ----------------- */}


      </div>

      // ------------------------------------- home end -------------------------------------

   )

}




