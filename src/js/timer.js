(function (){
    window.addEventListener('load', function () {

        const target_date = new Date().getTime() + (1000 * 3600 * 48); // установить дату обратного отсчета

        const daysHtml = document.getElementById("section-product-promotion-days"); // получить элемент тега
        const hoursHtml = document.getElementById("section-product-promotion-hours"); // получить элемент тега
        const minsHtml = document.getElementById("section-product-promotion-mins"); // получить элемент тега
        const secsHtml = document.getElementById("section-product-promotion-secs"); // получить элемент тега


        getCountdown();

        setInterval(function () {
            getCountdown();
        }, 1000);

        function getCountdown() {

            let days, hours, minutes, seconds; // переменные для единиц времени

            let current_date = new Date().getTime();
            let seconds_left = (target_date - current_date) / 1000;

            days = pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = pad(parseInt(seconds_left / 60));
            seconds = pad(parseInt(seconds_left % 60));

            daysHtml.innerHTML = days;
            hoursHtml.innerHTML = hours;
            minsHtml.innerHTML = minutes;
            secsHtml.innerHTML = seconds;

        }

        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }

    })

})()