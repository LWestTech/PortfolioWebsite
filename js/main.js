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
.setClassToggle('.console', 'fadeIn')
// .addIndicators()
.addTo(controller);

// const textScene = new ScrollMagic.Scene({
//     triggerElement: '.console',
//     duration: 300,
//     triggerHook: 0
// })
// .addIndicators()
// .setPin('.console')
// .addTo(controller);

