import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home.js';
import News from './news.js';
import Price from './price.js';
import Service from './service.js';
import Footer from './footer.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import owl1 from "./images/home-08-302x302.jpg";
import owl2 from "./images/home-09-302x302.jpg";
import owl3 from "./images/home-10-302x302.jpg";

function App() {

   const owlarr = [
      {
         img:owl1,
         title:"Jane Williams",
         para:"I love Car Repair because they treat their customers with special knowledge of all auto repairs, big or small. They are always courteous and friendly and contact you about any extra needed repairs before the work is done. I would recommend them to everyone for your auto needs."
      },
      {
         img:owl2,
         title: "Peter Smith",
         para: "I have been going to Car Repair for almost four years now, and have always received great service and fair prices. They always go out of their way to finish the work on time, and if it’s very busy they will rent a car. Also, you can’t beat their National Certified Auto Guarantee."
      },
      {
         img:owl3,
         title: "Kate McMillan",
         para: "The owner of Car Repair didn't want me to have to leave with a car that doesn’t work. So she adjusted the price to meet my ability to pay and did the work at a great rate as a favor to me. Besides they offered the top-notch customer service that’s hard to find nowadays."
      }
   ]

   const serviceOffer = [
      {
         num: "01",
         title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, rem!",
         para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur a mollitia ducimus quisquam nemo sequi labore in ratione, omnis aliquid expedita, vel corrupti consequuntur, iste consequatur autem. Ut, doloremque natus?"
      },
      {
         num: "02",
         title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, rem!",
         para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur a mollitia ducimus quisquam nemo sequi labore in ratione, omnis aliquid expedita, vel corrupti consequuntur, iste consequatur autem. Ut, doloremque natus?"
      },
      {
         num: "03",
         title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, rem!",
         para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur a mollitia ducimus quisquam nemo sequi labore in ratione, omnis aliquid expedita, vel corrupti consequuntur, iste consequatur autem. Ut, doloremque natus?"
      }
   ]

   const pricetable1 = [
      {
         first: "Fusce interdum metus et turpis ornare $60",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $120",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $80",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $100",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $50",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $150",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $90",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $340",
         sec: "make an appointment"
      },
   ]

   const pricetable2 = [
      {
         first: "Fusce interdum metus et turpis ornare $60",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $120",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $90",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $340",
         sec: "make an appointment"
      },
   ]
   const pricetable3 = [
      {
         first: "Fusce interdum metus et turpis ornare $80",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $100",
         sec: "make an appointment"
      }
   ]
   const pricetable4 = [
      {
         first: "Fusce interdum metus et turpis ornare $50",
         sec: "make an appointment"
      },
      {
         first: "Fusce interdum metus et turpis ornare $150",
         sec: "make an appointment"
      }
   ]

   const newsdata = [

      {
         date: "13 DEC",
         title: "Laboris laborum velit", 
         para: "Id laborum irure cillum et dolore nostrud laborum dolor in amet amet laboris qui irure veniam ullamco ullamco quis laboris sed quis voluptate eiusmod in laborum veniam aliquip eu incididunt"
      },
      {
         date: "13 DEC",
         title: "Laboris laborum velit", 
         para: "Id laborum irure cillum et dolore nostrud laborum dolor in amet amet laboris qui irure veniam ullamco ullamco quis laboris sed quis voluptate eiusmod in laborum veniam aliquip eu incididunt"
      },
      {
         date: "13 DEC",
         title: "Laboris laborum velit", 
         para: "Id laborum irure cillum et dolore nostrud laborum dolor in amet amet laboris qui irure veniam ullamco ullamco quis laboris sed quis voluptate eiusmod in laborum veniam aliquip eu incididunt"
      },
      {
         date: "13 DEC",
         title: "Laboris laborum velit", 
         para: "Id laborum irure cillum et dolore nostrud laborum dolor in amet amet laboris qui irure veniam ullamco ullamco quis laboris sed quis voluptate eiusmod in laborum veniam aliquip eu incididunt"
      }

   ]

   return (
      <div className="App">

         <BrowserRouter>
         
            <Navbar />

            <Routes>

               <Route path="*" element={<Home owlarr={owlarr} />}>Home</Route>
               <Route path="/home" element={<Home owlarr={owlarr} />}>Home</Route>
               <Route path="/service" element={<Service serviceOffer = {serviceOffer} />}>Service</Route>
               <Route path="/price" element={<Price pricetable1 = {pricetable1} pricetable2={pricetable2} pricetable3={pricetable3} pricetable4={pricetable4} />}>Price</Route>
               <Route path="/news" element={<News newsdata={newsdata} />}>News</Route>
               
            </Routes>

            <Footer />

         </BrowserRouter>         

      </div>
   );
}

export default App;
