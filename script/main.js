setInterval(() => {
    const caption = document.getElementById('date__caption');

    let date = new Date();

    caption.innerHTML = date.getHours()+':'+
                        date.getMinutes()+':'+
                        date.getSeconds()
}, 1000);

