const magneticButtonsBox = document.querySelectorAll('.magnetic')

magneticButtonsBox.forEach(magneticButtonsBox => {
    magneticButtonsBox.addEventListener('mousemove', (e) =>{
        const position = magneticButtonsBox.getBoundingClientRect();

        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - window.scrollY - position.top - position.height / 2;

        magneticButtonsBox.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    })
    magneticButtonsBox.addEventListener('mouseout', (e) =>{
        const position = magneticButtonsBox.getBoundingClientRect();

        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        magneticButtonsBox.style.transform = `translate(0px, 0px)`;
    })
})


const controller = new ScrollMagic.Controller();

const consoleReveal = new ScrollMagic.Scene({
    triggerElement: '.console',
})
.on('enter leave', function () {
$('.console').toggleClass('fadeIn');
$('.menucontainer').toggleClass('hidden');
$('.heroR').toggleClass('hidden');
})

.setClassToggle('.menucontainer', 'hidden')
// .addIndicators()
.addTo(controller);

const consolePart2 = new ScrollMagic.Scene({
    triggerElement: '.console',
    duration: 500,
    triggerHook: 0
})
.setPin('.console')
.on("enter leave", function (e) {
    if(e.type != "enter") {
        document.getElementById("consoleText").innerHTML = " ";
    }
})
.on('progress', function (prg) {
    if(prg.progress < 0.5) {
        document.getElementById("consoleText").innerHTML = "Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest>";

    } else if(prg.progress > 0.5) {
        document.getElementById("consoleText").innerHTML = "Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...";
    }
    })
// .addIndicators()
.addTo(controller);