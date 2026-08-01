const slider = document.getElementById('gridSlider');
const display = document.querySelector('.grid-size-display');

slider.addEventListener('input', () => {
    display.textContent = `${slider.value} X ${slider.value}`;
});


const gridContainer = document.querySelector('.grid');


let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        cell.addEventListener('mousedown', () => {
            cell.classList.add('painted');
        });

        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.classList.add('painted');
            }
        });

        gridContainer.appendChild(cell);
    }
}


// initial grid on page load
createGrid(32);

// update grid live as slider moves
slider.addEventListener('input', () => {
    display.textContent = `${slider.value} X ${slider.value}`;
    createGrid(Number(slider.value));
});


const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    createGrid(Number(slider.value));
});