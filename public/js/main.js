//sorce fullpage : https://codepen.io/superpowerranger/pen/Ymaewq 45% — 73 // 
new fullpage('#fullpage-aboutme', {
    sectionsColor: ['', '#F6F6F673' ],
});
// end sorce fullpage //

var myTopBtn = document.getElementById("topBtn");
function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<header>
            <div class="layout-frame">
                <a class="logo" href="index.html">Milk<span>miuku</span></a>

                <nav class="links">        
                    <svg class="close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <ul>
                        <li><a data-active="index" class="" href="index.html">home</a></li>
                        <li><a data-active="projects" class="" href="projects.html">projects</a></li>
                        <li><a data-active="aboutme" class="" href="aboutme.html">about me</a></li>
                        <li><a data-active="resume" class="" target="_blank" href="https://drive.google.com/drive/folders/1N9i8JuSPXdcBzXcJ7XZy_ks5RpasjsJf?usp=sharing">resume</a></li>
                    </ul>
                </nav>   
            </div>
            <svg class="menu" width="10" height="16" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8" width="16" height="2" rx="1" fill="white"/>
                <rect width="16" height="2" rx="1" fill="white"/>
                <rect x="4" y="4" width="12" height="2" rx="1" fill="white"/>
            </svg>                
            
        </header>` 
    };

};

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
                <div class="frame-in-side">
                    
                    <div class="rows"> 
                        <div class="column" >

                            <a class="button" onclick="topFunc()" id="topBtn" href="#">back to top</a>

                        </div>
                        <div class="column" >
                            <div class="box">
                                <div class="box1">
                                    <a href="mailto:ms.patcharathan@gmail.com" target="_blank">
                                        <svg class="icon-mail" xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512" fill="#000" width="22px" height="22px">
                                            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                            <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
        
                            <div class="box">
                                <div class="box2">
                                    <a href="https://github.com/realmilkmiuku" target="_blank">
                                        <svg class="icon-github"  xmlns="http://www.w3.org/2000/svg"  
                                        viewBox="0 0 30 30" fill="#000" width="30px" height="30px">    
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
         
                            <div class="box">
                                <div class="box3">
                                    <a href="https://www.linkedin.com/in/milkmiuku/" target="_blank">
                                        <svg class="icon-linkedin" xmlns="http://www.w3.org/2000/svg"  
                                          viewBox="0 0 60 60" width="33px" height="33px">  
                                          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                   
                    <p>
                        <span class="c">copyright ©</span>
                        &nbsp;<span class="y">2022</span>
                        &nbsp;<span class="b">by</span>
                        &nbsp;<span class="m">Milk</span>
                        <span class="l">miuku.</span>
                    </p>
                  
                </div>
            </footer>
        `
    };
};

customElements.define('my-footer', MyFooter);

class MyWFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="for-body-black">
        <div class="frame-in-side">
                   
                    <div class="rows"> 
                        <div class="column" >
                            <a class="button" onclick="topFunc()" id="topBtn" href="#">back to top</a>
                        </div>
                        <div class="column" >
                            <div class="box">
                                <div class="box1">
                                    <a href="mailto:ms.patcharathan@gmail.com" target="_blank">
                                        <svg class="icon-mail" xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512" fill="#000" width="22px" height="22px">
                                            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                            <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
        
                            <div class="box">
                                <div class="box2">
                                    <a href="https://github.com/realmilkmiuku" target="_blank">
                                        <svg class="icon-github"  xmlns="http://www.w3.org/2000/svg"  
                                        viewBox="0 0 30 30" fill="#000" width="30px" height="30px">    
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
         
                            <div class="box">
                                <div class="box3">
                                    <a href="https://www.linkedin.com/in/milkmiuku/" target="_blank">
                                        <svg class="icon-linkedin" xmlns="http://www.w3.org/2000/svg"  
                                          viewBox="0 0 60 60" width="33px" height="33px">    
                                          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                   
                    <p>
                        <span class="c">copyright ©</span>
                        &nbsp;<span class="y">2022</span>
                        &nbsp;<span class="b">by</span>
                        &nbsp;<span class="m">Milk</span>
                        <span class="l">miuku.</span>
                    </p>
                  
                </div>
    </footer>
        `
    };
};

customElements.define('my-wfooter', MyWFooter);


const menu = document.querySelector('.menu') ;
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

    menu.addEventListener('click', ()=> {
        nav.classList.add('open-nav')
    });

    close.addEventListener('click',()=> {
        nav.classList.remove('open-nav')
    });


let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;
 
    for(let link of links){
        if(link.dataset.active == bodyId){
            link.classList.add("active");
        }
    }


  /* WOW Transitions and transforms souce : https://codepen.io/shaylonh/pen/dXzpLW*/
function animateIfInView() {
    $.each($('.wow'), function(key, value) {
      if (isElementInViewport($(value))) {
        $(value).addClass('wow-in-view');
      } else {
        // (Optional) Fade out when out of view
        $(value).removeClass('wow-in-view');
      };
    });
  }
  // http://stackoverflow.com/a/7557433/5628
function isElementInViewport(el) {
  
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
  
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}  /* end WOW  Transitions and transforms */



//sorce animation arrow : https://codepen.io/nxworld/pen/OyRrGy //
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
// end source animation arrow //


//source https://codepen.io/dfitzy/pen/xZqGVo
       $('.slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
          var animateLeft, slideLeft;
          
          advance();
          
          if ($group.is(':animated') || currentIndex === newIndex) {
            return;
          }
          
          bulletArray[currentIndex].removeClass('active');
          bulletArray[newIndex].addClass('active');
          
          if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
          } else {
            slideLeft = '-100%';
            animateLeft = '100%';
          }
          
          $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
          });
          $group.animate({
            left: animateLeft
          }, function() {
            $slides.eq(currentIndex).css({
              display: 'none'
            });
            $slides.eq(newIndex).css({
              left: 0
            });
            $group.css({
              left: 0
            });
            currentIndex = newIndex;
          });
        }
        
        function advance() {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          }, 4000);
        }
        
        $('.next_btn').on('click', function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });
        
        $('.previous_btn').on('click', function() {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(0);
          }
        });
        
        $.each($slides, function(index) {
          var $button = $('<a class="slide_btn">&bull;</a>');
          
          if (index === currentIndex) {
            $button.addClass('active');
          }
          $button.on('click', function() {
            move(index);
          }).appendTo('.slide_buttons');
          bulletArray.push($button);
        });
        
        advance();
      });

//end of source image slider


