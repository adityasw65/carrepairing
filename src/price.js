import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Price(props) {

   useEffect(() => {
      AOS.init();
   })

   return (

      // ---------------------------------- price start ----------------------------------
      <div className="container-fluid g-0" style={{overflow: "hidden"}}>

         <div className="container-fluid" id="price">
            <div className="row text-center">
               <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Price <span>List</span></h5>
               </div>
            </div>

            <div className="row mt-5" id="showPrices">
               <div className="col-12">
                  <ul className="nav nav-pills gap-3" data-aos="fade-up" data-aos-duration="1500">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" data-bs-toggle="tab" href="#" data-bs-target="#allprice">Show all</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#first">First Category</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#second">Second Category</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#third">Third Category</a>
                     </li>
                  </ul>


                  <div className="tab-content mt-5" id="priceTable" data-aos="fade-up" data-aos-duration="1500">
                     <div className="tab-pane fade show active" id="allprice" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <table class="table table-borderless">
                           {
                              props.pricetable1.map((item) => (

                                 <tr>
                                    <td><a href="">{item.first}</a></td>
                                    <td><a href="">{item.sec}</a></td>
                                 </tr>

                              ))
                           }
                        </table>
                     </div>
                     <div className="tab-pane fade" id="first" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <table class="table table-borderless">
                           {
                              props.pricetable2.map((item) => (

                                 <tr>
                                    <td><a href="">{item.first}</a></td>
                                    <td><a href="">{item.sec}</a></td>
                                 </tr>

                              ))
                           }
                        </table>
                     </div>
                     <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">
                        <table class="table table-borderless">
                           {
                              props.pricetable3.map((item) => (

                                 <tr>
                                    <td><a href="">{item.first}</a></td>
                                    <td><a href="">{item.sec}</a></td>
                                 </tr>

                              ))
                           }
                        </table>
                     </div>
                     <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">
                        <table class="table table-borderless">
                           {
                              props.pricetable4.map((item) => (

                                 <tr>
                                    <td><a href="">{item.first}</a></td>
                                    <td><a href="">{item.sec}</a></td>
                                 </tr>

                              ))
                           }
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>



         <div className="container-fluid" id="priceOffer">
            <div className="row">
               <div className="col-12 p-0" data-aos="fade-down" data-aos-duration="1500">
                  <h5>Special <span>Offer</span></h5>
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-md-8 p-0" data-aos="fade-up" data-aos-duration="1500">
                  <p>
                     Maecenas iaculis dui et eros ullamcorper pulvinar. Pellentesque dapibus, ex quis maximus sollicitudin, lorem est dapibus felis, ut feugiat mauris ante in turpis. Phasellus volutpat in leo ut finibus. Interdum et malesuada fames.
                  </p>
               </div>
            </div>
         </div>

      </div>
      // ---------------------------------- price end ----------------------------------

   )

}




