//---------- Music Button & Audio-----------------------------------
const button = document.querySelector('sl-button');
const audio = document.querySelector("audio");
const icon = button.querySelector('sl-icon');

button.addEventListener("click", () => {
  if (audio.paused) {
    button.variant = 'primary';
    icon.name = 'music-note-beamed';
    audio.volume = 0.2;
    audio.play();
    
  } else {
    button.variant = 'default';
    icon.name = 'volume-mute';
    audio.pause();

  }
});






//------------ Timeline Function(adding "active" tag to selected item on the timeline to switch layout) -----------------
const TimelineImg = document.querySelector(".TLImg");

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".TL1").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM1.jpg";
    TimelineImg.alt = "Cover Art";
});

$(".step02").click( function() {
	$("#line-progress").css("width", "18%");
	$(".TL2").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM2.jpg";
    TimelineImg.alt = "Cover Art";
});

$(".step03").click( function() {
	$("#line-progress").css("width", "38%");
	$(".TL3").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM3.jpg";
    TimelineImg.alt = "Cover Art";
});

$(".step04").click( function() {
	$("#line-progress").css("width", "58%");
	$(".TL4").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM4.jpg";
    TimelineImg.alt = "Cover Art";
});

$(".step05").click( function() {
	$("#line-progress").css("width", "78%");
	$(".TL5").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM5.jpg";
    TimelineImg.alt = "Cover Art";
});


$(".step06").click( function() {
	$("#line-progress").css("width", "98%");
	$(".TL6 ").addClass("active").siblings().removeClass("active");
    TimelineImg.src = "images/RM6.jpg";
    TimelineImg.alt = "Cover Art";
});
 

//-------------------------Animations----------------------

//Scroll Elements
gsap.registerPlugin(ScrollTrigger);

  // scroll element for Timeline Section
  const container = document.querySelector('.timeline');
  const animation = container.querySelector('sl-animation');
  const animation2 = container.querySelector('.scrollanim2');
  const animation3 = container.querySelector('.scrollanim3');
  const box = animation.querySelector('.TLImg');


  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {

        animation.play = true;
        animation2.play = true;
        animation3.play = true;

    } else {
      animation1.play = false;
      animation1.currentTime = 0;

      animation2.play = false;
      animation2.currentTime = 0;

      animation3.play = false;
      animation3.currentTime = 0;
    }
  });
  observer.observe(container);


//Gear Rotation Clockwise
anime({
    targets: 'path.cogBG.AC',
    rotate: '1turn',
    easing: 'linear',
    direction: 'normal',
    duration: 50000,
    loop: true
})


//Gear Rotation Anti-Clockwise
anime({
    targets: 'path.cogBG.rAC',
    rotate: '1turn',
    easing: 'linear',
    direction: 'reverse',
    duration: 50000,
    loop: true
})

gsap.to("",{
    scrollTrigger:"",
    x: 400,
    rotation: 300,
    duration:3
});