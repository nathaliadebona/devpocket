const valorPx = document.getElementById('valor-px');
const valorBase = document.getElementById('valor-base');
const resultado = document.getElementById('resultado');

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