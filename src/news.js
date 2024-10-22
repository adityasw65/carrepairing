import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function News(props) {
   useEffect(() => {
      AOS.init();
   })

   return (

      <div className="container-fluid g-0" style={{overflow: "hidden"}}>

         <div className="container-fluid" id="latest-news">
            <div className="row text-center">
               <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Latest <span>News</span></h5>
               </div>
            </div>

            <div className="row mt-5" id="news-info" data-aos="fade-up" data-aos-duration="1500">

               {
                  props.newsdata.map((item) => (
                     <div className="col-12 col-lg-6">
                        <div className="row gap-3">
                           <div className="col-7 col-md-3 text-center align-self-center" id="date">
                              {item.date}
                           </div>
                           <div className="col-12 col-md-8">
                              <h4>{item.title}</h4>
                              <p>
                                 {item.para}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))
               }

            </div>
         </div>



         <div className="container-fluid" id="cycle">
            <div className="row text-center">
               <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Advanced <span>Cycle</span></h5>
               </div>
            </div>

            <div className="row mt-5">
               <div className="col-12 col-lg-6 order-0 order-lg-1 p-0" data-aos="fade-left" data-aos-duration="1500">
                  <iframe title="vimeo-player" src="https://player.vimeo.com/video/37582125?h=d16908d279" height="300" frameborder="0" allowfullscreen></iframe>
               </div>
               <div className="col-12 col-lg-6 order-1 order-lg-0 px-2" data-aos="fade-right" data-aos-duration="1500">
                  <h4>Consectetur adipiscing elit. nunc vehicula semper posuere.</h4>
                  <p>
                     Pellentesque eu faucibus justo lacinia blandit lacus, vel auctor risus tristique a. Nulla ornare eros elit, sed fringilla ligula sollicit udin in. Int erdum et malesuada ames ac ante ipsum primis in faucibus. Integer ac vestibulum augue. Proin suscipit lectus et risus vehicula, eget semper eros placerat. Proin eu enim urna. Pellentesque interdum ven enatis urna lorem.
                  </p>
                  <p>
                     Vestibulum ornare non risus dignissim scelerisque. Nulla interdum luctus turpis, eget suscipit nisl mattis ac. Proin imperdiet tem por sem, ac convallis sapien dignissim vel. Vivamus non faucibus velit. Pellentesque vitae ligula nec diam ul tricies rutrum non non ante. Maecenas dapibus, ante et hendrerit ornare, dui lacus tincidunt odio, non lo bortis massa augue in mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac interdum sa pien. Phasellus tincidunt tellus at ligula aliquam, non vulputate nisi commodo.
                  </p>
               </div>
            </div>
         </div>

      </div>

   )

}




