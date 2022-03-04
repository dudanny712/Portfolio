// Show hidden menu

const navMenu=document.getElementById('nav-menu'),
        navToggle=document.getElementById('nav-toggle'),
        navClose=document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Skills Accordion

const skillsContent = document.getElementsByClassName('skill_content'),
skillsHeader = document.querySelectorAll('.skill_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){ 
        skillsContent[i].className='skill_content skill_close'
    }
    if(itemClass==='skill_content skill_close'){
        this.parentNode.className='skill_content skill_open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})


// Qualification Tabs

const tabs = document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)


        tabContents.forEach(tabContent=> {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})

// Carousel

let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

//   Dark Theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})