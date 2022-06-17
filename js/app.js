/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const NavBar = document.querySelector("#list")
const MySections = [...document.querySelectorAll("section")];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const DNavbar = () =>{
    for(MySection of MySections){ //take section from all section and add information to "li" in navbar.
        MySectionName = MySection.getAttribute("data-nav");
        MySectionLink = MySection.getAttribute("id");
        NavList = document.createElement("li");
        NavList.innerHTML = `<a class="menu-link" href="#${MySectionLink}">${MySectionName}</a>`;
        NavBar.appendChild(NavList);
    }
};

// Add class 'active' to section when near top of viewport

const SectionViewActive = (vision) =>{
        let SidePrivatelys = vision.getBoundingClientRect();
        return SidePrivatelys.top <= 150 && SidePrivatelys.top >= -400;
    
};

window.onscroll = ClassActive = () =>{ //set active class to sections. 
    for(MySection of MySections){
        if (SectionViewActive(MySection)){
            if(!MySection.classList.contains("your-active-class")){
                MySection.classList.add("your-active-class");
            }
            else{
                MySection.classList.remove("your-active-class");
            }
        }
    }
};
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
DNavbar();
// Scroll to section on link click

// Set sections as active
//This page will smooth in scrolling by using scroll-behavior: smooth; in CSS.
