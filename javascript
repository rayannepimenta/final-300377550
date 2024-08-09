
function getDate() {
    const dateInput = document.getElementById('birthday').value;
    return new Date(dateInput);
}


function start() {
    const countDownDate = getDate();
    const now = new Date();

   
    if (countDownDate <= now) {
        alert("Date is Expired");
        return;
    }

    
    const interval = setInterval(function() {

       
        const now = new Date().getTime();

        const distance = countDownDate - now;

    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const dicseconds = Math.floor((distance % 1000) / 100); // 0.1 sec

        document.getElementById("demo").innerHTML = `${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes} <sub>mins</sub> ${seconds} <sub>secs</sub> ${dicseconds} <sub>dicsecs</sub>`;


        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 100); 
}
