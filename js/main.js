function openMenu() { 
    $('#flyout').toggleClass('menuShown');
    $('.menuImage').toggleClass('menuShown');
}

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

$('.consoleStartContainer').css("display", "block");
$('.consoleEndContainer').css("display", "none");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var endConsoleBlink = false;

function consoleEndBlinkAnimStart() {
    if (endConsoleBlink == false) {
        endConsoleBlink = true;
        consoleEndBlinkAnimOff();
    }
}

function consoleEndBlinkAnimOn() {
    document.getElementById('textEndOn').style.display = "block";
    document.getElementById('textEndOff').style.display = "none";
    sleep(1000).then(() => {
        if (endConsoleBlink) {
            consoleEndBlinkAnimOff();
        }
    });
}
function consoleEndBlinkAnimOff() {
    document.getElementById('textEndOn').style.display = "none";
    document.getElementById('textEndOff').style.display = "block";
    sleep(1000).then(() => {
        if (endConsoleBlink) {
            consoleEndBlinkAnimOn();
        }
    });   
}
function consoleEndBlinkAnimStop() {
    endConsoleBlink = false;
}

const controller = new ScrollMagic.Controller();

const consoleReveal = new ScrollMagic.Scene({
    triggerElement: '.console',
})
.on('enter leave', function () {
$('.console').toggleClass('fadeIn');
$('.menucontainer').toggleClass('hidden');
$('#flyout').toggleClass('hidden');
$('.heroR').toggleClass('hidden');
})
.setClassToggle('.menucontainer', 'hidden')
// .addIndicators()
.addTo(controller);

const consolePart1Text = [
    ""
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest>"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath..."
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[|---------------] 0% &nbsp; &nbsp; 6.9gb | 42.0 kB/s"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[====|-----------] 36% &nbsp; &nbsp;6.9gb | 42.6 kB/s"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[=========|------] 62% &nbsp; &nbsp;6.9gb | 41.9 kB/s"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 99% &nbsp; &nbsp;6.9gb | 42.1 kB/s"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing..."
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202</span>"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span>"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span>"
    ,"Lucas West<br>Student (HS) Developer. Full Stack.<br><br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13</span>"
    ,"<br>C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span>"
    ,"C:\\Users\\LWest> about -me<br>Name: Lucas West<br>Full time occupation: Student<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span>"
    ,"Name: Lucas West<br>Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.</span>"
    ,"Student type: Highschool<br>-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.</span>"
    ,"-> phase: 2<br>Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.</span>"
    ,"Initiating careerpath...<br>>hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.</span>"
    ,">hosting on port :34253<br>>retrive packets in @localhost/future<br>>downloading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[===============|] 100% &nbsp; &nbsp;6.9gb | DONE<br>>processing...<br><span class=red>>ERROR: missing experience entry => de6c768b-3c29-4698-a858-b681bc17cfcf<br>>ERROR: missing experience entry => 8ae772a2-7d67-4618-aedd-82ec9da83202<br>>ERROR: missing skill entry => f0377fb5-3c16-4654-969c-159904346b18<br>>ERROR: missing experience entry => ffce9fd9-fda1-42bf-b0b1-7a32b81bbe8a</span><br>>received: <span class=blue>beginner html/css/js</span><br><span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.</span>"
    ,"<span class=red>>ERROR: missing project entry => 630d16b2-66e3-418a-80af-1bb610a0aea4<br>>ERROR: missing skill entry => 1b1253be-6450-46c8-8a0f-e0739c09e723<br>>ERROR: missing skill entry => 461146e9-4683-4fdc-b754-2b7ccdf10d13<br>>ERROR: missing experience entry => df1d546f-62e0-4dd3-a43b-d1daa0e7523f<br>>ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing project entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing skill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.</span>"
    ,">ERROR: missing project entry => 857bedac-5b92-40a7-880d-8d20128ea3f0</span><br>>received: <span class=blue>intermediate java</span><br><span class=red>>ERROR: missing pro#ect entry => 22a4bc4b-2944-483d-8021-421c92f6c9c3<br>>ERROR: missing *&ill entry => db3451e6-33c1-4cb1-99bc-b21f6793cb60<br>>E#@$! cannot l(cate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>>ERROR: cannot locate <span class=blue>{skill}</span>. Try getting some {experience} first.<br>[i/D4dbJBwfEg9y&.F{8z4*Vz?H)={:qj-hAjV2)Xf&tw(4eHTBW5!vP){Wh@2[MQF<br>rw_dAkL!@ZHnQGQ/PkjjdG&RXiq-TAKjAP=KpA*e7$#7;p{R?Kb9%p#FpC):<br>M3[Jdw.x82J*:taamYh6@Y3.42%24wZB@<br>*Ui/PSkxcE2Vhcm=[#SXY.3!G(2f;?W+86Lh</span>"
    ,"<span class=red>>ERROR: can%@t locate <span class=blue>{ski(l}</span>. Try *etting some {experience} first.<br>>ERROR: cannot l@(ate <span class=blue>{exp*#@ence}</span>. Try g@&%&ng some {skill} fir!t.<br>>ERROR: cannot l(%#@e <span class=blue>{experienc&}</span>. Try g#ttin& @ome {skill} first.<br>>ERROR: cannot locate <span class=blue>{sk!^l}</span>. Try getting some {e^$erience} first.<br>>ERROR: cannot locate <span class=blue>{%x#@rience}</span>. Try getting some {sk&ll} first.<br>>ERROR: cann*@ )ocate <span class=blue>{job}</span>. Try get!(ng a {job} first.<br>>ERR(#! cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} fi$@t.<br>>ERROR: cannot locate <span class=blue>{job}</span>. Try getting a {job} first.<br>>ERROR: cannot locate <span class=blue>{experience}</span>. Try getting some {skill} first.<br>>ER&OR: !%nnot locate <span class=blue>{j%b}</span>. Try getting a {job} first.<br>>ERROR: ca*@%t loc*te <span class=blue>{skill}</span>. !&y getting some {experience} first.<br>>ERROR: can*@t locate <span class=blue>{skill}</span>. Try ge&^@ng some {experience} %irst.<br>[i/D4dbJBwfEg9y&.F{8z4*Vz?H)={:qj-hAjV2)Xf&tw(4eHTBW5!vP){Wh@2[MQF<br>rw_dAkL!@ZHnQGQ/PkjjdG&RXiq-TAKjAP=KpA*e7$#7;p{R?Kb9%p#FpC):<br>M3[Jdw.x82J*:taamYh6@Y3.42%24wZB@<br>*Ui/PSkxcE2Vhcm=[#SXY.3!G(2f;?W+86Lh<br>Z?(8gLURi;![38R_nX#/N[<br>)QEV4P*Yj{rbTPLfvhkxQJ82gZ&7PRNpWBrE/,TP,xKC@5*J+Zh,Q}aWR;{+STYiZg<br>r(h$;KwBw98fJJ:xa<br>?h=W#R9_=T_@mxu]%UftfNgY]{W[5PH,jBncpe_d7qL;&CUX#*xBT{aZ9Rjyxq93VL[G<br>=zdm[C(i25FeRk$BYVc}NQv9&+;+rQ3)&G8gfa.yxY7ad(X9g:;R*2:r</span>"
]

const consolePart1 = new ScrollMagic.Scene({
    triggerElement: '.console',
    duration: 5000,
    triggerHook: 0
})
.setPin('.console')
.on("enter leave", function (e) {
    if(e.type != "enter") {
        document.getElementById("consoleText").innerHTML = " ";
    }
})
.on('progress', function (prg) {
    console.log(Math.floor(prg.progress * (consolePart1Text.length + 3)));
    document.getElementById("consoleText").innerHTML = consolePart1Text[Math.floor(prg.progress * (consolePart1Text.length))];
    switch (Math.floor(prg.progress * (consolePart1Text.length + 3))) {
        case 0:
            document.getElementById("consoleCaret").style.WebkitTransform = "translate(0px,0px)";
            break;
        case 1:
            document.getElementById("consoleCaret").style.WebkitTransform = "translate(173px,74px)";
            break;
        case 2:
        case 15:
            document.getElementById("consoleCaret").style.WebkitTransform = "translate(271px,74px)";
            break;
        case 16:
            document.getElementById("consoleCaret").style.WebkitTransform = "translate(271px,26px)";
            break;
        case 17:
            document.getElementById("consoleCaret").style.WebkitTransform = "translate(271px,2px)";
            $("#consoleCaret").show();
            break;
        case 18:
            $("#consoleCaret").hide();
            break;
        case 25:
            $('.consoleStartContainer').css("display", "block");
            $('.consoleEndContainer').css("display", "none");
            consoleEndBlinkAnimStop();
            break;
        case 26:
            consoleEndBlinkAnimStart();
            $('.consoleEndContainer').css("display", "flex");
            $('.consoleStartContainer').css("display", "none");
            $("#textEndOn").css({width:"1200px",height:(700 * (1 + (26 - (prg.progress * (consolePart1Text.length + 3))))) + "px"});
            $("#textEndOff").css({width:"1200px",height:(700 * (1 + (26 - (prg.progress * (consolePart1Text.length + 3))))) + "px"});
        default:
            consoleEndBlinkAnimStop();
            break;
    }
    console.log(endConsoleBlink);
})
// .addIndicators()
.addTo(controller);