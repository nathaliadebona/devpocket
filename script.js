const valorPx = document.getElementById('valor-px');
const valorBase = document.getElementById('valor-base');
const resultado = document.getElementById('resultado');

const valorHex = document.getElementById('valor-hex');
const resultadoRgb = document.getElementById('resultado-rgb');
const resultadoHsl = document.getElementById('resultado-hsl');
const corPreview = document.getElementById('cor-preview');

const formatoHex = /^#[0-9A-Fa-f]{6}$/;

// ---- Conversor de medidas ----//
function converterUnidades() {
    if (valorPx.value === '') {
        resultado.textContent = '0 rem';
        return;
    }

    const px = Number(valorPx.value);
    const base = Number(valorBase.value);

    if (base <= 0) {
        resultado.textContent = 'Base inválida';
        return;
    }

    const rem = px / base;
    resultado.textContent = Number(rem.toFixed(3)) + ' rem';
}

valorPx.addEventListener('input', converterUnidades);
valorBase.addEventListener('input', converterUnidades);

// ---- Conversor de cores ---- //
function converterCor() {
    const hex = valorHex.value;

    if (!formatoHex.test(hex)) {
        resultadoRgb.textContent = '—';
        resultadoHsl.textContent = '—';
        return;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    resultadoRgb.textContent = `rgb(${r}, ${g}, ${b})`;
    corPreview.style.backgroundColor = hex;
}

valorHex.addEventListener('input', converterCor);