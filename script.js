// Модальное окно
const modal = document.getElementById('appointmentModal');
const openBtns = document.querySelectorAll('#openModalBtn, .openModalBtn2');
const closeSpan = document.querySelector('.close');

function openModal() {
    modal.style.display = 'flex';
}
function closeModal() {
    modal.style.display = 'none';
}

openBtns.forEach(btn => btn.addEventListener('click', openModal));
closeSpan.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Обработка формы
const form = document.getElementById('appointmentForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('serviceSelect').value;
    const doctor = document.getElementById('doctorSelect').value;
    const date = document.getElementById('date').value;

    if (!name || !phone || !date) {
        alert('Пожалуйста, заполните имя, телефон и дату!');
        return;
    }

    alert(`Спасибо, ${name}! Ваша заявка на услугу "${service}" к врачу ${doctor} на ${date} принята. Мы свяжемся с вами в ближайшее время.`);
    form.reset();
    closeModal();
});