window.addEventListener('load', function () {
    document.querySelectorAll('[data-add-to-card]').forEach(function (elem) {
        let product = elem.getAttribute('data-add-to-card');
        if (product) {
            elem.addEventListener('click', function () {
                let card = JSON.parse(window.localStorage.getItem('card'));
                if (!card.includes(product)) {
                    card.push(product);
                    window.localStorage.setItem('card', JSON.stringify(card));
                }
            })
        }
    });
});