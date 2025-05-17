document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const paymentSystems = document.querySelectorAll('.payment-system');
    const amountInput = document.getElementById('amountInput');
    const walletInput = document.getElementById('walletInput');
    const submitBtn = document.getElementById('submitBtn');
    const balanceValue = document.getElementById('balanceValue');
    
    // Выбранная платежная система
    let selectedSystem = null;
    
    // Обработчики для платежных систем
    paymentSystems.forEach(system => {
        system.addEventListener('click', function() {
            // Удаляем выделение у всех систем
            paymentSystems.forEach(s => s.classList.remove('selected'));
            
            // Добавляем выделение выбранной
            this.classList.add('selected');
            selectedSystem = this.getAttribute('data-system');
            
            // Активируем кнопку если все заполнено
            checkForm();
        });
    });
    
    // Проверка формы
    function checkForm() {
        const amountValid = amountInput.value && amountInput.value !== '0,00';
        const walletValid = walletInput.value && walletInput.value !== '0';
        
        submitBtn.disabled = !(selectedSystem && amountValid && walletValid);
    }
    
    // Обработчики изменения полей
    amountInput.addEventListener('input', checkForm);
    walletInput.addEventListener('input', checkForm);
    
    // Обработчик отправки формы
    submitBtn.addEventListener('click', function() {
        if (submitBtn.disabled) return;
        
        const amount = amountInput.value;
        const wallet = walletInput.value;
        
        // Здесь должна быть реальная логика вывода средств
        alert(`Запрос на вывод ${amount} ₽ через ${selectedSystem} отправлен!\nКошелек: ${wallet}`);
        
        // Сброс формы
        paymentSystems.forEach(s => s.classList.remove('selected'));
        amountInput.value = '';
        walletInput.value = '';
        selectedSystem = null;
        submitBtn.disabled = true;
    });
    
    // Инициализация
    checkForm();
});