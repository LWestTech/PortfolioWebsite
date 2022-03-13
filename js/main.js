const magneticButtonsBox = document.querySelectorAll('.magnetic')

magneticButtonsBox.forEach(magneticButtonsBox => {
    magneticButtonsBox.addEventListener('mousemove', (e) =>{
        const position = magneticButtonsBox.getBoundingClientRect();

        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        magneticButtonsBox.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    })
    magneticButtonsBox.addEventListener('mouseout', (e) =>{
        const position = magneticButtonsBox.getBoundingClientRect();

        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        magneticButtonsBox.style.transform = `translate(0px, 0px)`;
    })
})