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

function autoSlide()	{
		setInterval(function() { 
		slider.right();
	},3000);
}


window.onload = function() {

	slider.init();
	autoSlide();

	var left = document.getElementById("left");
	var right = document.getElementById("right");

	left.onclick = function () {
		clearInterval(autoSlide)
		slider.left();
		//setTimeout(autoSlide(), 5000);
	}

	right.onclick = function () {
		clearInterval(autoSlide)
		slider.right();
		//setTimeout(autoSlide(), 5000);
	}

var icon = document.getElementsByClassName("iconinc");

	 function incrase (e) {

      var start = Date.now(); 
      var timer = setInterval(function() {        
   	  var timePassed = Date.now() - start;

        e.target.style.height = 45 + timePassed/200 + 'px';
        e.target.style.width = 45 + timePassed/200 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 20);
    }

    function inincrase (e) {
    	var start = Date.now(); 
     	var timer = setInterval(function() {        
        var timePassed = Date.now() - start;

        e.target.style.height = 50 - timePassed/200 + 'px';
        e.target.style.width = 50 - timePassed/200 + 'px';

        if (timePassed > 1000) clearInterval(timer);

      }, 20);
    }

    for(var i = 0;  i < icon.length; i++) {
    	icon[i].addEventListener('mouseover', incrase);
    	icon[i].addEventListener('mouseout', inincrase);
    }

    var hover1 = document.getElementsByClassName("hover1");
    var hover2 = document.getElementsByClassName("hover2");

	function change1 (e) {
	e.target.setAttribute("src", "images/mask1.png");
	}

	function changeout1 (e) {
	e.target.setAttribute("src", "images/image1.png");
	}
	
	function change2 (e) {
	e.target.setAttribute("src", "images/mask2.png");
	}
	
	function changeout2 (e) {
	e.target.setAttribute("src", "images/image2.png");
	}
	

    for ( var i = 0; i<hover1.length; i++) {
    	hover1[i].addEventListener('mouseover', change1);
    	hover1[i].addEventListener('mouseout', changeout1);
    }

    for ( var i = 0; i<hover2.length; i++) {
    	hover2[i].addEventListener('mouseover', change2);
    	hover2[i].addEventListener('mouseout', changeout2);
    }
    var cl = document.getElementById("clients");

 	function cLcount() {
    var clients = 50;
 	var timerCl = setInterval ( function() {
 	 	 clients++;
 	 	cl.innerHTML = clients;
  	
  	if (clients >= 1600)
  		clearInterval(timerCl);
	}, 2)
 }

cLcount();

  }
