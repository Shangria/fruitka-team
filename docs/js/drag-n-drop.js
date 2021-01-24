window.addEventListener('load', function (){
    const tbody = document.querySelector('tbody');

    const rows = [ ...tbody.querySelectorAll('tr') ];

    rows.forEach((elem) => elem.setAttribute('draggable', true));

    function getDragAfterElement(tbody, y) {
        const draggableElements = [...tbody.querySelectorAll('tr:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }


    function dragstart(e) {
        const event = e.target;

        if(!event.matches('.product-table-body__row')) return;

        event.classList.add('dragging');
    }

    function dragover(e) {
        e.preventDefault();
        const draggable = tbody.querySelector('.dragging');
        const afterElement = getDragAfterElement(tbody, e.clientY);

        if (afterElement === null) {
            tbody.appendChild(draggable);
        } else {
            tbody.insertBefore(draggable, afterElement);
        }
    }

    function dragend(e) {
        const event = e.target;

        event.classList.remove('dragging');
    }

    tbody.addEventListener('dragstart', dragstart);
    tbody.addEventListener('dragover', dragover);
    tbody.addEventListener('dragend', dragend);
})

