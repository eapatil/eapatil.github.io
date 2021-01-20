<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<body>
<h1 class="eli">Eleazer</h1>
	<!-- <main> -->
		<!-- <h1>My Projects</h1> -->
		<!-- <p>Click on the hamburger menu to explore</p> -->
	<!-- </main> -->
	
	<div class="type" id="delay"><p><img src="https://avatars2.githubusercontent.com/u/20547953?s=460&amp;u=9b920c74e7b413f8b64be506e35c114fa8655686&amp;v=4" alt="" style="
    border-radius: 20px;"></p>
<p><span>Eleazer A Patil</span><br><em style="font-style: italic;">Sr. SharePoint Web Content Publisher at Deloitte</em></p>
<p>I have extensive and rich experience in developing User Interface. Proficient in web development with dynamic interactivity. Have delivered end to end projects in SharePoint and provided automation solutions in many verticals. </p>
<p><span><a href="https://www.linkedin.com/in/epatil/" target="_blank" rel="noopener"><img src="https://www.pngkey.com/png/detail/80-802453_2018-supply-chain-solutions-linkedin-view-my-linkedin.png" alt="" width="140" style="margin-right: 10px;border-radius: 5px;"></a></span> <span><a href="https://trailblazer.me/id/eapatil" target="_blank" rel="noopener"><img src="https://trailblazer.me/resource/1608686754000/assets/assets/images/profile/trailblazer-me.svg" alt="" width="200" style="background-color: #FFF; padding: 10px;border-radius: 5px;"></a></span> </p>
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
						<li><a href="RTSC">Responsive Text Size Converter</a></li>
						<li><a href="PS">Parallax Scrolling</a></li>
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
