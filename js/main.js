const chart = document.querySelector('#chart').getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 49874, 59874, 5998, 3467, 3993, 48847, 48116],
                borderColor: 'red',
                borderWidth: 2,
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 46000, 32698, 5000, 3000, 18656, 36844],
                borderColor: 'blue',
                borderWidth: 2,
            }
        ]
    }, 
    options: {
        responsive: true
    }
})

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = "none";
})

//change theme color

const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});