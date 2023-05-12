import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Cards from './components/Cards';
import ServiceCards from './components/ServiceCards';
import DentalLanding from './components/DentalLanding';
import AppointmentLanding from './components/AppoinmentLanding';
import Testemonial from './components/Testemonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
  <div className="container mx-auto bg-white rounded-xl">
   <Navbar />  
   <Landing />
   <Cards />
   
   <h1 className='text-center text-2xl my-20'>Services We Provide</h1>
    <ServiceCards />

    <DentalLanding />
    <AppointmentLanding />
    <p className='text-2xl font-bold text-doctor-green py-16'>
      
    Testemonial
    </p>
    <h1 className='text-4xl text-doctor-black py-10'>What Our Patients Says</h1>

    <Testemonial />

    
   
    <ContactUs />

    <Footer />

  
 


 
 

</div>
 

 

 
  );
}
export default App;
