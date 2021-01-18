<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<style>
html, body, div, span, h1, h2, p, a, address, em, img, ul, li, nav {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
nav {
	display: block;
}
body {
	line-height: 1;
}
ul {
	list-style: none;
}


/* -------------------------------- 

Primary style

-------------------------------- */
*, *::after, *::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  color: #243040;
  background-color: #000;
}

body, html {
  /* prevent horizontal scrolling */
  overflow-x: hidden;
  overflow-y: hidden;
}

a {
  color: #9cb3a8;
  text-decoration: none;
}

/* -------------------------------- 

Main Components 

-------------------------------- */

.cd-nav-trigger {
  position: fixed;
  z-index: 3;
  left: 2%;
  top: 20px;
  height: 54px;
  width: 54px;
  background-color: #243040;
  border-radius: 50%;
  /* image replacement */
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  transition: transform 0.5s;
}
.cd-nav-trigger .cd-nav-icon {
  /* icon created in CSS */
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 22px;
  height: 2px;
  background-color: #ffffff;
}
.cd-nav-trigger .cd-nav-icon::before, .cd-nav-trigger .cd-nav-icon:after {
  /* upper and lower lines of the menu icon */
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  /* Force Hardware Acceleration in WebKit */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.5s, width 0.5s, top 0.3s;
  -moz-transition: -moz-transform 0.5s, width 0.5s, top 0.3s;
  transition: transform 0.5s, width 0.5s, top 0.3s;
}
.cd-nav-trigger .cd-nav-icon::before {
  -webkit-transform-origin: right top;
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  transform-origin: right top;
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  -o-transform: translateY(-6px);
  transform: translateY(-6px);
}
.cd-nav-trigger .cd-nav-icon::after {
  -webkit-transform-origin: right bottom;
  -moz-transform-origin: right bottom;
  -ms-transform-origin: right bottom;
  -o-transform-origin: right bottom;
  transform-origin: right bottom;
  -webkit-transform: translateY(6px);
  -moz-transform: translateY(6px);
  -ms-transform: translateY(6px);
  -o-transform: translateY(6px);
  transform: translateY(6px);
}
.cd-nav-trigger svg {
  position: absolute;
  top: 0;
  left: 0;
}
.cd-nav-trigger circle {
  /* circle border animation */
  -webkit-transition: stroke-dashoffset 0.4s 0s;
  -moz-transition: stroke-dashoffset 0.4s 0s;
  transition: stroke-dashoffset 0.4s 0s;
}
@media only screen and (min-width: 1170px) {
  .cd-nav-trigger {
    top: 40px;
  }
}

.cd-nav {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #243040;
  visibility: hidden;
  -webkit-transition: visibility 0s 0.7s;
  -moz-transition: visibility 0s 0.7s;
  transition: visibility 0s 0.7s;
}
.cd-nav .cd-navigation-wrapper {
  /* all navigation content */
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 40px 5% 40px calc(5% + 80px);
  /* Force Hardware Acceleration in WebKit */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: -webkit-transform 0.7s;
  -moz-transition: -moz-transform 0.7s;
  transition: transform 0.7s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0.01, 0.77, 0.78);
  -moz-transition-timing-function: cubic-bezier(0.86, 0.01, 0.77, 0.78);
  transition-timing-function: cubic-bezier(0.86, 0.01, 0.77, 0.78);
}
.cd-nav h2 {
  position: relative;
  margin-bottom: 1.7em;
  font-size: 1.3rem;
  font-weight: 800;
  color: #080b0f;
  text-transform: uppercase;
}
.cd-nav h2::after {
  /* bottom separation line */
  content: '';
  position: absolute;
  left: 0;
  bottom: -20px;
  height: 1px;
  width: 60px;
  background-color: currentColor;
}
.cd-nav .cd-primary-nav {
  margin-top: 60px;
}
.cd-nav .cd-primary-nav li {
  margin: 1.6em 0;
}
.cd-nav .cd-primary-nav a {
  font-family: "Merriweather", serif;
  font-size: 2.4rem;
  color: rgba(255, 255, 255, 0.3);
  display: inline-block;
}
.cd-nav .cd-contact-info {
  margin-top: 80px;
}
.cd-nav .cd-contact-info li {
  font-family: "Merriweather", serif;
  margin-bottom: 1.5em;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.3);
}
.cd-nav .cd-contact-info a {
  color: #ffffff;
}
.cd-nav .cd-contact-info span {
  display: block;
}
.cd-nav .cd-contact-info li, .cd-nav .cd-contact-info a, .cd-nav .cd-contact-info span {
  font-size: 1.6rem;
}
@media only screen and (min-width: 1170px) {
  .cd-nav .cd-navigation-wrapper {
    padding: 62px 20%;
  }
  .cd-nav .cd-navigation-wrapper::after {
    clear: both;
    content: "";
    display: table;
  }
  .cd-nav .cd-half-block {
    width: 50%;
    float: left;
  }
  .cd-nav .cd-primary-nav {
    margin-top: 0;
  }
  .cd-nav h2 {
    font-size: 1.5rem;
    margin-bottom: 5.6em;
  }
  .cd-nav .cd-primary-nav li {
    margin: 2em 0;
  }
  .cd-nav .cd-primary-nav a {
    font-size: 4.4rem;
  }
  .cd-nav .cd-contact-info {
    margin-top: 120px;
    text-align: right;
  }
  .cd-nav .cd-contact-info li {
    margin-bottom: 2.4em;
  }
  .cd-nav .cd-contact-info li, .cd-nav .cd-contact-info a, .cd-nav .cd-contact-info span {
    font-size: 2rem;
  }
}
.cd-nav .cd-primary-nav a:hover{
color: #FFF;
text-decoration: none;
}
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 5px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    color: inherit;
}

body {
    background-image: linear-gradient(120deg, #4f0088 0%, #000000 100%);
    height: 100vh;
}

h1.eli {
    font-size: 25vw;
    text-align: center;
    position: fixed;
    width: 100vw;
    z-index: 1;
    color: #ffffff26;
    text-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
    top: 50%;
    transform: translateY(-50%);
    margin-left: -34%;
}
.type {
    background: rgba(0, 0, 0, 0);
    width: 70vw;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 30px 30px 10px;
    box-shadow: 0 0 150px -20px rgba(0, 0, 0, 0.5);
	margin-left: -50%;
	margin-top: 40%;
    z-index: 1;
	border-radius: 10px;
}
P {
    color: #f5f5f5;
    margin: 0 0 20px;
    font-size: 17px;
    line-height: 1.2;
}

span {
    color: #f0c674;
}
.type a {
    text-decoration: none;
	color: #006dcc;
}
@media (max-width: 480px) {
h1.eli {
    top: 50%;
    margin-left: 0px;
}
.type {
	width: 90%;
    margin: 0 auto;
	margin-left: 0px;
	margin-top: 80%;
	width: 90vw;

}
}
</style>
<body>

<h1 class="eli">Eleazer</h1>
	<!-- <main> -->
		<!-- <h1>My Projects</h1> -->

		<!-- <p>Click on the hamburger menu to explore</p> -->
	<!-- </main> -->
	
	<div class="type"><p><img src="https://avatars2.githubusercontent.com/u/20547953?s=460&amp;u=9b920c74e7b413f8b64be506e35c114fa8655686&amp;v=4" alt="" style="
    border-radius: 20px;"></p>
<p><span>Eleazer A Patil</span><br><em style="/* text-decoration: dashed; */text-decoration: i;font-style: italic;">Sr. SharePoint Web Content Publisher at Deloitte</em></p>
<p>I have extensive and rich experience in developing User Interface. Proficient in web development with dynamic interactivity. Have delivered end to end projects in SharePoint and provided automation solutions in many verticals. </p>
<p><span><a href="https://www.linkedin.com/in/epatil/" target="_blank" rel="noopener"><img src="https://www.pngkey.com/png/detail/80-802453_2018-supply-chain-solutions-linkedin-view-my-linkedin.png" alt="" width="140" style="margin-right: 10px;"></a></span> <span><a href="https://trailblazer.me/id/eapatil" target="_blank" rel="noopener"><img src="https://trailblazer.me/resource/1608686754000/assets/assets/images/profile/trailblazer-me.svg" alt="" width="200" style="background-color: #FFF; padding: 10px;"></a></span> </p>



<p>Click on the hamburger menu to explore</p>

</div>

	<a href="#cd-nav" class="cd-nav-trigger">Menu 
		<span class="cd-nav-icon"></span>

		<svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
			<circle fill="transparent" stroke="#656e79" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
		</svg>
	</a>
	
	<div id="cd-nav" class="cd-nav">
		<div class="cd-navigation-wrapper">
			<div class="cd-half-block">
				<h2>Projects</h2>

				<nav>
					<ul class="cd-primary-nav">
						<li><a href="Loaders">CSS Loaders</a></li>
						<li><a href="#">Navigation Bars</a></li>
						<li><a href="#">Grid layouts</a></li>
						<li><a href="#">Carousel's</a></li>
						<li><a href="#">Other</a></li>
					</ul>
				</nav>
			</div><!-- .cd-half-block -->
			
			<div class="cd-half-block">
				<address>
					<ul class="cd-contact-info">
						<li>
                        <span>Eleazer A Patil</span>
                        <span><a href="mailto:e_patil@hotmail.com">e_patil@hotmail.com</a></span>
                        <span>+91 9177 613 457</span>
							<span>Hyderabad</span>
							<span>India</span>
						</li>
					</ul>
				</address>
			</div> <!-- .cd-half-block -->
		</div> <!-- .cd-navigation-wrapper -->
	</div> <!-- .cd-nav -->
</body>
<script>
jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});
</script>
<script>
var str = document.getElementsByClassName('type')[0].innerHTML.toString();
var i = 0;
document.getElementsByClassName('type')[0].innerHTML = "";

setTimeout(function() {
    var se = setInterval(function() {
        i++;
        document.getElementsByClassName('type')[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByClassName('type')[0].innerHTML = str;
        }
    }, 10);
},0);
</script>
