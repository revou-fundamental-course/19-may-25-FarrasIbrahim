let reversed = false;

function konversiSuhu() {
    const input = document.getElementById('input-suhu');
    const output = document.getElementById('fahrenheit');
    const detail = document.getElementById('detail-suhu');
    const suhu = parseFloat(input.value);

    if (isNaN(suhu)) {
        output.value = '';
        detail.value = 'Masukkan angka suhu yang valid.';
        return;
    }

    if (!reversed) {
        const hasil = (suhu * 9 / 5) + 32;
        output.value = hasil.toFixed(2);
        detail.value = `${suhu} °C sama dengan ${hasil.toFixed(2)} °F`;
    } else {
        const hasil = (suhu - 32) * 5 / 9;
        output.value = hasil.toFixed(2);
        detail.value = `${suhu} °F sama dengan ${hasil.toFixed(2)} °C`;
    }
}

function resetForm() {
    document.getElementById('input-suhu').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('detail-suhu').value = '';
}

function reverseKonversi() {
    reversed = !reversed;
    const label = document.querySelector('label[for="input-suhu"]');
    const outputLabel = document.querySelector('label[for="fahrenheit"]');

    if (reversed) {
        label.textContent = "Fahrenheit (°F):";
        outputLabel.textContent = "Celsius (°C):";
    } else {
        label.textContent = "Celsius (°C):";
        outputLabel.textContent = "Fahrenheit (°F):";
    }

    resetForm();
}
