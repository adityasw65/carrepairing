import capImage from "./images/services-01-470x434.jpg";
import offerImage from "./images/services-02-674x640.jpg";
import adviceImage1 from "./images/services-04-570x360.jpg";
import adviceImage2 from "./images/services-05-570x360.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Service(props) {

   useEffect(() => {
      AOS.init();
   })

   return (

      // ------------------------------ service start ------------------------------
      <div className="container-fluid g-0" style={{overflow: "hidden"}}>

         {/* ----------------- cap start ----------------- */}
         <div className="container-fluid" id="cap">
            <div className="row text-center">
               <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Our <span>Capabilities</span></h5>
               </div>
            </div>

            <div className="row mt-5">
               <div className="col-12 col-lg-6 p-0" data-aos="fade-right" data-aos-duration="1500">
                  <img src={capImage} alt="image not found" className="img-fluid " />
               </div>
               <div className="col-12 col-lg-6 mt-3 mt-lg-0 p-0" id="cap-info" data-aos="fade-left" data-aos-duration="1500">
                  <h4 className="px-2 px-md-0">Consectetur adipiscing elit. Pellentesque eu faucibus justo.</h4>
                  <p className="mt-3 px-2 px-md-0">
                     Pellentesque eu faucibus justo. Suspendisseeuismod mattis augue, at consequat neque ullamcorper sed. Curab itur lacinia blandit lacus, vel auctor risus tristique a. Nulla ornare eros elit, sed fringilla ligula sollicit udin in. Int erdum et malesuada ames ac ante ipsum primis in faucibus. Integer ac vestibulum augue. Proin suscipit lectus et risus vehicula, eget semper eros placerat. Proin eu enim urna. Pellentesque interdum ven enatis urna, vel semper velit. Pellentesque in nulla eget neque mollis tempor non ac lorem.

                     Vestibulum ornare non risus dignissim scelerisque. Nulla interdum luctus turpis, eget suscipit nisl mattis ac. Proin imperdiet tem por sem, ac convallis sapien dignissim vel. Vivamus non faucibus velit. Pellentesque vitae ligula nec diam ul tricies rutrum non non ante. Maecenas dapibus, ante et hendrerit ornare, dui lacus tincidunt odio, non lo bortis massa augue in mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac interdum sa pien. Phasellus tincidunt tellus at ligula aliquam, non vulputate nisi commodo.
                  </p>
                  <a href="#" className="ms-2 ms-md-0">Read More</a>
               </div>
            </div>
         </div>
         {/* ----------------- cap end ----------------- */}



         {/* ----------------- offer start ----------------- */}
         <div className="container-fluid" id="offer">
            <div className="row">
               <div className="col-12 col-lg-4 order-0 order-lg-1 p-0">
                  <img src={offerImage} alt="image not found" className="img-fluid w-100 h-100" />
               </div>

               <div className="col-12 col-lg-8 order-1 order-lg-0" id="offer-info">
                  <div className="row text-center">
                     <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                        <h5>What <span>We offer</span></h5>
                     </div>
                  </div>
                  <div className="row text-center mt-5">
                     {
                        props.serviceOffer.map((item) => (

                           <div className="col-12 col-md-4 p-0" data-aos="fade-up" data-aos-duration="1500">
                              <div id="number" className="mx-auto mt-3 mb-3">{item.num}</div>
                              <a href="#" >{item.title}</a>
                              <p className="mt-3">{item.para}</p>
                           </div>

                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
         {/* ----------------- offer end ----------------- */}



         {/* ----------------- advice start ----------------- */}
         <div className="container-fluid" id="advice">
            <div className="row text-center">
               <div className="col-12" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Car Maintenance <span>& Car Advice</span></h5>
               </div>
            </div>

            <div className="row mt-5">
               <div className="col-12 col-lg-6" data-aos="flip-left" data-aos-duration="1500">
                  <img src={adviceImage1} alt="image not found" className="img-fluid" />
               </div>
               <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="1500">
                  <h4 className="mt-3 mt-lg-0">Phasellus volutpat in leo ut finibus. Interdum et malesuada fames ac ante ipsum</h4>
                  <p className="mt-3">
                     Nunc tortor sit amet, lacinia mattis leo. Maecenas iaculis dui et eros ullamcorper pulvinar. Pellentesque dapibus, ex quis maximus sollicitudin, lorem est dapibus felis, ut feugiat mauris ante in turpis. Phasellus volutpat in leo ut finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus in nibh aliquam augue ullamcorper feugiat. Aenean consequat tellus ac fringilla gravida. Nulla condimentum ligula nec viverra pretium. Integer bibendum ligula nec mi placerat, nec mollis elit varius.
                  </p>
                  <p>
                     Sed a justo pretium, feugiat, tempor libero eu, elementum urna. Integer sagittis lacinia neque non bibendum. Donec nec dui quis tortor ultricies pellentesque. Vivamus eleifend neque in tortor sodales, ut condimentum felis vestibulum. Maecenas massa justo, porttitor posuere dignissim id, vehicula ut odio. Nullam consectetur est a imperdiet egestas. Aenean varius erat nisl.Nullam tincidunt, lacus in tincidunt ornare, magna dui commodo leo
                  </p>
               </div>
            </div>

            <div className="row">
               <div className="col-12 col-lg-6 order-0 order-lg-1" data-aos="flip-right" data-aos-duration="1500">
                  <img src={adviceImage2} alt="image not found" className="img-fluid" />
               </div>
               <div className="col-12 col-lg-6 order-1 order-lg-0" data-aos="fade-right" data-aos-duration="1500">
                  <h4 className="mt-3 mt-lg-0">Phasellus volutpat in leo ut finibus. Interdum et malesuada fames ac ante ipsum</h4>
                  <p className="mt-3">
                     Nunc tortor sit amet, lacinia mattis leo. Maecenas iaculis dui et eros ullamcorper pulvinar. Pellentesque dapibus, ex quis maximus sollicitudin, lorem est dapibus felis, ut feugiat mauris ante in turpis. Phasellus volutpat in leo ut finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus in nibh aliquam augue ullamcorper feugiat. Aenean consequat tellus ac fringilla gravida. Nulla condimentum ligula nec viverra pretium. Integer bibendum ligula nec mi placerat, nec mollis elit varius.
                  </p>
                  <p>
                     Sed a justo pretium, feugiat, tempor libero eu, elementum urna. Integer sagittis lacinia neque non bibendum. Donec nec dui quis tortor ultricies pellentesque. Vivamus eleifend neque in tortor sodales, ut condimentum felis vestibulum. Maecenas massa justo, porttitor posuere dignissim id, vehicula ut odio. Nullam consectetur est a imperdiet egestas. Aenean varius erat nisl.Nullam tincidunt, lacus in tincidunt ornare, magna dui commodo leo
                  </p>
               </div>
            </div>
         </div>
         {/* ----------------- advice end ----------------- */}

      </div>
      // ------------------------------ service start ------------------------------
   )

}




