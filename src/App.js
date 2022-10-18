import './App.css';
import Section from './Components/Section';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';


function App() {
  return (
    <div className="App">

      <div className='navbar'>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/home"  style={{color: "black"}}>HOME</a>
                </li>
                <li class="nav-item">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/what we do" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "black"}}>
                    WHAT WE DO
                    </a>
                </li>
                </li>
                <li class="nav-item">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/hire experts" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "black"}}>
                    HIRE EXPPERTS
                    </a>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/company" style={{color: "black"}}>COMPANY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/say hello!" style={{color: "black"}}>SAY HELLO!</a>
                </li>    
            </ul>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5799 17.6581L13.9004 12.07C15.0402 10.5475 15.5603 8.66073 15.3583 6.78026C15.1563 4.8998 14.247 3.16161 12.8089 1.90719C11.3708 0.652772 9.5079 -0.0272106 7.58627 0.000834175C5.66463 0.0288789 3.82312 0.76292 2.42349 2.05875C1.02386 3.35459 0.167241 5.11855 0.0220241 7.00408C-0.123193 8.88961 0.453544 10.7604 1.63873 12.249C2.82392 13.7375 4.5319 14.7362 6.4273 15.0489C8.32269 15.3615 10.2685 14.9655 11.8823 13.9386L17.6184 19.5839C17.7462 19.7141 17.8991 19.8179 18.0681 19.8893C18.2371 19.9608 18.4188 19.9984 18.6027 19.9999C18.7867 20.0015 18.969 19.967 19.1393 19.8985C19.3095 19.83 19.4642 19.7288 19.5943 19.6008C19.7244 19.4728 19.8272 19.3207 19.8968 19.1532C19.9665 18.9857 20.0015 18.8062 19.9999 18.6252C19.9984 18.4442 19.9601 18.2654 19.8875 18.0991C19.8149 17.9328 19.7093 17.7824 19.577 17.6567L19.5799 17.6581ZM2.78688 7.57233C2.78688 6.61269 3.07611 5.67459 3.61797 4.87667C4.15984 4.07876 4.92998 3.45685 5.83107 3.08961C6.73216 2.72237 7.72371 2.62628 8.6803 2.8135C9.63689 3.00072 10.5155 3.46283 11.2052 4.14141C11.8949 4.81998 12.3646 5.68453 12.5549 6.62574C12.7452 7.56695 12.6475 8.54254 12.2742 9.42914C11.901 10.3157 11.2689 11.0735 10.458 11.6067C9.64703 12.1398 8.69366 12.4244 7.71833 12.4244C6.41162 12.423 5.15869 11.9119 4.23432 11.0031C3.30994 10.0944 2.78944 8.86211 2.78688 7.57642V7.57233Z" fill="black"/>
            </svg>
            <i class="cil-hamburger-menu"></i>
        </div>
    </div>
</nav>

 <div className="logo">
 <svg width="1120" height="530" viewBox="0 0 1120 530" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path opacity="0.5" d="M485 0H1120V242L1110.49 283.546C1099.1 333.34 1072.86 378.501 1035.24 413.055C996.651 448.498 934.834 436.909 911.706 389.895L904.708 375.67C900.418 366.949 889.962 363.232 881.13 367.288L551.929 518.458C468.034 556.983 372.818 494.161 375.23 401.874L377.147 328.535C378.605 272.733 350.487 220.309 303.193 190.657C270.722 170.298 233.173 159.5 194.848 159.5H112.521C87.4925 159.5 62.7831 153.886 40.2121 143.07C5.99455 126.674 -8.70058 85.8288 7.22859 51.3915L31 0H485Z" fill="url(#paint0_linear_0_1179)"/>
       <defs>  
       <linearGradient id="paint0_linear_0_1179" x1="-21.5" y1="301" x2="1120" y2="301" gradientUnits="userSpaceOnUse">
       <stop stop-color="#EF8431"/>
       <stop offset="1" stop-color="#E71A86"/>
       </linearGradient>
       </defs>
      </svg>
      </div>
      </div>

    <div className="logo1">
      <svg width="286" height="281" viewBox="0 0 286 281" fill="none" xmlns="http://www.w3.org/2000/svg">
       <ellipse opacity="0.4" cx="143.341" cy="140.467" rx="140" ry="142.5" transform="rotate(103 143.341 140.467)" fill="url(#paint0_linear_0_1207)"/>
      <defs>
       <linearGradient id="paint0_linear_0_1207" x1="3.34091" y1="140.467" x2="283.341" y2="140.467" gradientUnits="userSpaceOnUse">
       <stop offset="0.211282" stop-color="#EF8431"/>
       <stop offset="0.789418" stop-color="#E71A86"/>
       </linearGradient>
      </defs>
    </svg>
    </div>

    <div className="about">
      <h1 style={{"font-size": "65px"}}>About Us</h1>
    </div>
    <p style={{"color": "black"}}>Lorem ipsum is simply dummy text of the printing<br/>and typesetting industry.
      Lorem ipsum has been the <br/>industry's standard dummy text ever since<br/> the 1500rs.</p>

      <div>
        <svg width="113" height="197" viewBox="0 0 113 197" fill="none" xmlns="http://www.w3.org/2000/svg">
         <ellipse opacity="0.4" cx="17.5" cy="98.6251" rx="97.7743" ry="94.9389" transform="rotate(103 17.5 98.6251)" fill="url(#paint0_linear_0_1208)"/>
        <defs>
        <linearGradient id="paint0_linear_0_1208" x1="-80.2743" y1="98.6251" x2="115.274" y2="98.6251" gradientUnits="userSpaceOnUse">
         <stop offset="0.211282" stop-color="#EF8431"/>
         <stop offset="0.789418" stop-color="#E71A86"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
    
    <Section />

    <Section1 />

    <Section2 />

    <Section3 />

    <Section4 />

    </div>
  );
}

export default App;
