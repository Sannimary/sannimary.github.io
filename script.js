var slider = {
	slides:['images/homebg.jpg','images/homebg3.jpg','images/homebg2.jpg'],
	frame:0, 
	set: function(image) { 
		document.getElementById("home").style.backgroundImage = "url("+image+")";
	},
	init: function() { 
		this.set(this.slides[this.frame]);
	},
	left: function() { 
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},

	right: function() { 
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);	

	}

};




window.onload = function() {

	slider.init();
	var autoSlide;

	function startTimer() {
	autoSlide = setInterval(function() { 
		slider.right();
		}, 3000);
	}
	startTimer();

	function resetTImer() {
		clearInterval(autoSlide);
		setTimeout(startTimer, 5000);
	}

	var left = document.getElementById("left");
	var right = document.getElementById("right");

	left.onclick = function () {
		resetTImer();
		slider.left();
		
	}

	right.onclick = function () {
		resetTImer();
		slider.right();
		
	}

var icon = document.getElementsByClassName("iconinc");

	 function incrase (e) {
		
      var start = Date.now(); 
      var timer = setInterval(function() {        
   	  var timePassed = Date.now() - start;

        e.target.style.height = 45 + timePassed/200 + 'px';
        e.target.style.width = 45 + timePassed/200 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 10);
    }

    function inincrase (e) {
    	var start = Date.now(); 
     	var timer = setInterval(function() {        
        var timePassed = Date.now() - start;

        e.target.style.height = 50 - timePassed/200 + 'px';
        e.target.style.width = 50 - timePassed/200 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 10);
    }

    for(var i = 0;  i < icon.length; i++) {
    	icon[i].addEventListener('mouseover', incrase);
    	icon[i].addEventListener('mouseout', inincrase);
    }


var iconbig = document.getElementsByClassName("iconbig");

	 function incrase2 (e) {
		
      var start = Date.now(); 
      var timer = setInterval(function() {        
   	  var timePassed = Date.now() - start;

        e.target.style.height = 71 + timePassed/140+ 'px';
        e.target.style.width = 71 + timePassed/140 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 10);
    }

    function inincrase2 (e) {
    	var start = Date.now(); 
     	var timer = setInterval(function() {        
        var timePassed = Date.now() - start;

        e.target.style.height = 78 - timePassed/140 + 'px';
        e.target.style.width = 78 - timePassed/140 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 10);
    }

    for(var i = 0;  i < iconbig.length; i++) {
    	iconbig[i].addEventListener('mouseover', incrase2);
    	iconbig[i].addEventListener('mouseout', inincrase2);
    }



    
     var hover2 = document.getElementsByClassName("hover2");


	function allpick(){
		for (var i = 0; i < hover2.length; i++){		
			hover2[i].style.display = "block"; 
		}
	}
	function alldown(){
		for (var i = 0; i < hover2.length; i++){
			hover2[i].style.display = "none";
		}
	}
	var allport = document.getElementById("all");
	allport.addEventListener('mouseover', allpick);
	allport.addEventListener('mouseout', alldown);



	function webpick(){
				
			hover2[0].style.display = "block"; 
			hover2[5].style.display = "block"; 
			hover2[7].style.display = "block"; 
		
	}
	function webdown(){
			hover2[0].style.display = "none"; 
			hover2[5].style.display = "none"; 
			hover2[7].style.display = "none"; 
	}

	var webport = document.getElementById("web");
	webport.addEventListener('mouseover', webpick);
	webport.addEventListener('mouseout', webdown);
	


	function grappick(){
				
			hover2[3].style.display = "block"; 
			hover2[8].style.display = "block"; 
			hover2[10].style.display = "block"; 
		
	}
	function grapdown(){
			hover2[3].style.display = "none"; 
			hover2[8].style.display = "none"; 
			hover2[10].style.display = "none"; 
	}

	var grapport = document.getElementById("grap");
	grapport.addEventListener('mouseover', grappick);
	grapport.addEventListener('mouseout', grapdown);


	function photopick(){
				
			hover2[1].style.display = "block"; 
			hover2[4].style.display = "block"; 
			hover2[11].style.display = "block"; 
		
	}
	function photodown(){
			hover2[1].style.display = "none"; 
			hover2[4].style.display = "none"; 
			hover2[11].style.display = "none"; 
	}

	var photoport = document.getElementById("photo");
	photoport.addEventListener('mouseover', photopick);
	photoport.addEventListener('mouseout', photodown);


	function illpick(){
				
			hover2[2].style.display = "block"; 
			hover2[6].style.display = "block"; 
			hover2[9].style.display = "block"; 
		
	}
	function illdown(){
			hover2[2].style.display = "none"; 
			hover2[6].style.display = "none"; 
			hover2[9].style.display = "none"; 
	}

	var illport = document.getElementById("ill");
	illport.addEventListener('mouseover', illpick);
	illport.addEventListener('mouseout', illdown);


	// function change1(e){

	// 	e.style.display = "block";
	// }

	// function change2(e){

	// 	e.target.style.display = "none";

	// }

 //     for (var i = 0; i < hover2.length; i++){		
	// 		hover2[i].addEventListener('mouseover', change1); 
	// 		hover2[i].addEventListener('mouseout', change2); 
	// 	}





    var cl = document.getElementById("clients");

 	function cLcount() {
    var clients = 50;
 	var timerCl = setInterval ( function() {
 	 	 clients+=2;
 	 	cl.innerHTML = clients;
  	
  	if (clients >= 1600)
  		clearInterval(timerCl);
		}, 4)
	 }
	   var proj = document.getElementById("proj");

 	function projCount() {
    var project = 0;
 	var timerPr = setInterval ( function() {
 	 	 project+=4;
 	 	proj.innerHTML = project;
  	
  	if (project >= 3200)
  		clearInterval(timerPr);
		}, 4)
	 }
  var award = document.getElementById("award");

 	function awCount() {
    var awards = 0;
 	var timerAw = setInterval ( function() {
 	 	 awards++;
 	 	award.innerHTML = awards;
  	
  	if (awards >= 40)
  		clearInterval(timerAw);
		}, 75)
	 }
  var coff = document.getElementById("coff");

 	function cofCount() {
    var coffe = 0;
 	var timerCof = setInterval ( function() {
 	 	 coffe+=20;
 	 	coff.innerHTML = coffe;
  	
  	if (coffe >= 20000)
  		clearInterval(timerCof);
		}, 2)
	 }



	 function isVisible(elem) {

      var coords = elem.getBoundingClientRect();

      var windowHeight = document.documentElement.clientHeight;     
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
    }

	

  

var team = document.getElementsByClassName("team-name");
var teamArr = document.getElementById("arrowTeam");
var canva = document.getElementsByClassName("canvas");


function circle(c, d) {
	var canvas = c;
	var ctx = canvas.getContext("2d");
	
	var W = canvas.width;
	var H = canvas.height;
	
	var degrees = 0;
	var new_degrees = 0;
	var difference = 0;
	var color = '#ffe600'; 
	var bgcolor = "#222";
	var text;
	var animation_loop, redraw_loop;
	
	function init()
	{		
		ctx.clearRect(0, 0, W, H);
				
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 30;
		ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); 
		ctx.stroke();
		
		var radians = degrees * Math.PI / 180;
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 30;
		ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
		ctx.stroke();
		
		
		ctx.fillStyle = color;
		ctx.font = "50px bebas";
		text = Math.floor(degrees/360*100) + "%";
		
		text_width = ctx.measureText(text).width;
		
		ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
	}
	
	function draw(a)
	{
		
		if(typeof animation_loop != undefined) clearInterval(animation_loop);
		
		
		new_degrees = a;
		difference = new_degrees - degrees;
		
		animation_loop = setInterval(animate_to, 1000/difference);
	}
	
	
	function animate_to()
	{
		
		if(degrees == new_degrees) 
			clearInterval(animation_loop);
		
		if(degrees < new_degrees)
			degrees++;
		else
			degrees--;
			
		init();
	}
	
	
	return draw(d);
}

    function showVisible() {
    
      var num = document.getElementsByClassName("num")[0];
      
       
        if (isVisible(num)) {
         cLcount();
         projCount();
         awCount();
         cofCount();
         document.removeEventListener('scroll', showVisible);
          }
          
        }

function showVisible1(){
	var canva1 = document.getElementsByClassName("canvas")[0];

    if (isVisible(canva1)) {
        	circle(canva[0], 326);
        	circle(canva[1], 348);
        	circle(canva[2], 308);
        	circle(canva[3], 340);
        	document.removeEventListener('scroll', showVisible1);
        }     
}
	document.addEventListener('scroll', showVisible);
	document.addEventListener('scroll', showVisible1);

	

	

	function rightSlide () {
		var sliders2 = ['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'];
 		var brand = document.getElementsByClassName("brand");
		
		for (var i = 0; i < brand.length; i++){
				
			brand[i].style.backgroundImage = "url("+sliders2[i]+")";
		
		};
	};	
	rightSlide();

	var slider2 = {
	slides2:['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'],
	frame:0, 
	set: function(image) { 
		 
		document.getElementsByClassName("brand")[0].style.backgroundImage = "url("+image+")";
		
	},
	
	right: function() { 
		this.frame++;
		if(this.frame == this.slides2.length) this.frame = 0;
		this.set(this.slides2[this.frame]);	

	}

	};

	var slider3 = {
	slides2:['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'],
	frame:1, 
	set: function(image) { 
		 
		document.getElementsByClassName("brand")[1].style.backgroundImage = "url("+image+")";
		
	},
	
	right: function() { 
		this.frame++;
		if(this.frame == this.slides2.length) this.frame = 0;
		this.set(this.slides2[this.frame]);	

	}

	};

	var slider4 = {
	slides2:['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'],
	frame:2, 
	set: function(image) { 
		 
		document.getElementsByClassName("brand")[2].style.backgroundImage = "url("+image+")";
		
	},
	
	right: function() { 
		this.frame++;
		if(this.frame == this.slides2.length) this.frame = 0;
		this.set(this.slides2[this.frame]);	

	}

	};

	var slider5 = {
	slides2:['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'],
	frame:3, 
	set: function(image) { 
		 
		document.getElementsByClassName("brand")[3].style.backgroundImage = "url("+image+")";
		
	},
	
	right: function() { 
		this.frame++;
		if(this.frame == this.slides2.length) this.frame = 0;
		this.set(this.slides2[this.frame]);	

	}

	};

	var slider6 = {
	slides2:['images/logo2.png','images/logo3.png','images/logo4.png', 'images/logo5.png', 'images/logot.png'],
	frame:4, 
	set: function(image) { 
		 
		document.getElementsByClassName("brand")[4].style.backgroundImage = "url("+image+")";
		
	},
	
	right: function() { 
		this.frame++;
		if(this.frame == this.slides2.length) this.frame = 0;
		this.set(this.slides2[this.frame]);	

	}

	};

	


	function logoSlide() {
		slider2.right();
		slider3.right();
		slider4.right();
		slider5.right();
		slider6.right();
		

	}

	var autoSlide2;

	function startTimer2() {
	autoSlide2 = setInterval(logoSlide, 3000);
	}
	startTimer2();

	

	var links = document.querySelectorAll(".itemLinks");
	var comentscont = document.querySelector("#comentscont");
	var activeLink = 0;

	for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);
 
    link.itemID = i;
	}

    links[activeLink].classList.add("active");
    function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
	}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
	}
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    comentscont.style.left = position;
}

       var login = document.getElementById('login');
        var pass = document.getElementById('password');
        var phone = document.getElementById('phone');
        var button = document.getElementById('button');
        
        function empty (el) {
            if (el.value == '') {
                el.classList.add('err');
                return true;
            };
            return false;
        };
        function checkLogin(el) {
            el.classList.remove('err');
            if (empty(el) || (el.value.search(/\d/) !== -1)) {
                el.classList.add('err');
                return false;
            }
            return true;
        }
        function checkPass (el) {
            el.classList.remove('err');
            if (empty(el) || (el.value.search(/[$]/) !== -1)) {
                element.classList.add('err');
                return false;
            }
            return true;
        }
       
            
        
        button.onclick = function (event) {
            if (!checkLogin(login) || !checkPass(pass) || !checkPhone(phone)) {
                event.preventDefault();
                alert('Проверьте данные!');
            } else {
                alert('Данные отправлены!');
            }
        }  

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
     
window.addEventListener('scroll', function(e) {
  var nav = document.querySelectorAll('section[id^="nav"]');
  for (var i = 0; i < nav.length; i++) { 
    document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'red' : '');
  }
}, false);
var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 2;  
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}
          
}

