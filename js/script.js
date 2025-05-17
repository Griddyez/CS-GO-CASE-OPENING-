document.addEventListener('DOMContentLoaded', () => {
    const topupBtn = document.getElementById('topupBtn');
    const paymentMethods = document.getElementById('paymentMethods');
    const methodItems = document.querySelectorAll('.method-item');

    // Обработчик кнопки пополнения
    topupBtn.addEventListener('click', () => {
        paymentMethods.style.display = 'block';
    });

    // Обработчики выбора метода оплаты
    methodItems.forEach(item => {
        item.addEventListener('click', function() {
            methodItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});