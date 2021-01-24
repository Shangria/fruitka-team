(function () {
    let card = getCardFromStorage();
    if (card == null) {
        saveCardToStorage([]);
    }

    function getCardFromStorage() {
        return JSON.parse(window.localStorage.getItem('card'));
    }

    function saveCardToStorage(card) {
        window.localStorage.setItem('card', JSON.stringify(card));
    }


    window.addEventListener('load', function () {
        const RENDER_CARD_EVENT_NAME = 'dsfhdushfisdfidsfiusd';

        document.querySelectorAll('[data-add-to-card]').forEach(function (elem) {
            let product = elem.getAttribute('data-add-to-card');
            if (product) {
                elem.addEventListener('click', function () {
                    let card = getCardFromStorage();
                    if (!card.includes(product)) {
                        card.push(product);
                        saveCardToStorage(card);
                        document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));
                    }
                })
            }
        });

        document.querySelectorAll('[data-remove-from-card]').forEach(function (elem) {
            let product = elem.getAttribute('data-remove-from-card');
            if (product) {
                elem.addEventListener('click', function () {
                    let card = getCardFromStorage();
                    if (card.includes(product)) {
                        card = card.filter(p => p !== product);
                        saveCardToStorage(card);
                        document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));
                    }
                })
            }
        });
        document.addEventListener(RENDER_CARD_EVENT_NAME, function (e) {
            renderCard(e.name);
        })
        let cardContainer = document.getElementById('card-container');
        if (cardContainer != null) {
            renderCard(cardContainer);
            document.addEventListener(RENDER_CARD_EVENT_NAME, function (e) {
                renderCard(e.name);
            })
        }

        function renderCard(cardContainer) {
            alert(cardContainer);
        }

    });
})();





