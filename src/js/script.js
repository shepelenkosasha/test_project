const elements = document.querySelectorAll(".services-nav-link");
const linkEl = document.querySelectorAll(".lang-block-link");

for (let i = 0; i < elements.length; i++) {

  elements[i].addEventListener('click', function () {  
    for (let i = 0; i < elements.length; i++) {

      elements[i].classList.remove('active-services-link'); 

    };

    this.classList.add('active-services-link');

  });

};

for (let i = 0; i < linkEl.length; i++) {

  linkEl[i].addEventListener('click', function () {  
    for (let i = 0; i < linkEl.length; i++) {

      linkEl[i].classList.remove('active-lang-link'); 

    };

    this.classList.add('active-lang-link');

  });

};
