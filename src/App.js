import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="container mx-auto bg-white rounded-xl p-8 m-10">
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About Us</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Appointment
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Login</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Us</a></li>
      <li tabIndex={0}>
        <a>
          Appointment
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Login</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn bg-gradient-to-r from-doctor-green to-doctor-blue text-neutral-50 font-bold ">Home</button>
  </div>

  

  
 </div>
 <div className="container2 your-component p-48" >

  <div class="side side-content-center">
  
         <div>
      
      <div className="card">
          <span className="font-link">
              This is with Font Link. We are linking the fonts from the Google Fonts.
              <p></p>
              <button className="btn bg-gradient-to-r from-doctor-green to-doctor-blue text-neutral-50 font-bold ">Get Started</button>
          </span>
      </div>
  
      

          </div>
 
  </div>
  <div className="side">
  {<img src="images/chair 1.svg"  alt="logo" />}
</div>
 
</div>
<div className='flex px-px'>
  <div className="card lg:card-side bg-gradient-to-r from-doctor-green to-doctor-blue text-neutral-50 font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/clock.svg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title font-link">Opening Hours</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
  </div>
  <div className="card lg:card-side bg-doctor-black text-neutral-50 font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/Path 7199.svg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-link">Visit our Location</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
  </div>
  <div className="card lg:card-side bg-gradient-to-r from-doctor-green to-doctor-blue text-neutral-50 font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/Path 7196.svg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-link">Opening Hours</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
</div> 
</div>



<div className='flex px-px'>
  <div className="card lg:card-side bg-doctor-white text-doctor-black font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/clock.svg" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title font-link">Opening Hours</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
  </div>
  <div className="card lg:card-side bg-doctor-white text-doctor-black font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/Path 7199.svg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-link">Visit our Location</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
  </div>
  <div className="card lg:card-side bg-doctor-white text-doctor-black0 font-bold shadow-xl m-4">
  <figure className='m-4'><img src="images/Path 7196.svg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-link">Opening Hours</h2>
    <p className= "font-link text-neutral-50" >
      Lorem Ipsum
    </p>
    
   
  </div>
</div> 






</div>
</div>
 

 

 
  );
}
export default App;
