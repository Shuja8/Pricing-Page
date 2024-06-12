document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const currencySelect = document.getElementById('currencySelect');
    const currencySymbols = document.querySelectorAll('.currencySymbol');
    const storageUnitInput = document.getElementById('storageUnit');
    const storageUnits = document.querySelectorAll('.storageUnit');

    billingToggle.addEventListener('change', function() {
        if (billingToggle.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'inline');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'inline');
            yearlyPrices.forEach(price => price.style.display = 'none');
        }
    });

    currencySelect.addEventListener('change', function() {
        const selectedCurrency = currencySelect.value;
        currencySymbols.forEach(symbol => symbol.textContent = selectedCurrency);
    });

    storageUnitInput.addEventListener('input', function() {
        const selectedUnit = storageUnitInput.value;
        storageUnits.forEach(unit => unit.textContent = selectedUnit);
    });
});
