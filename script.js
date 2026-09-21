const valorPx = document.getElementById('valor-px');
const valorBase = document.getElementById('valor-base');
const resultado = document.getElementById('resultado');

const valorHex = document.getElementById('valor-hex');
const resultadoRgb = document.getElementById('resultado-rgb');
const resultadoHsl = document.getElementById('resultado-hsl');
const corPreview = document.getElementById('cor-preview');

const seletorCor = document.getElementById('seletor-cor');

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

    seletorCor.value = valorHex.value;

    const rgb = hexParaRgb(hex);

    resultadoRgb.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    const hsl = rgbParaHsl(rgb.r, rgb.g, rgb.b);
    resultadoHsl.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    corPreview.style.backgroundColor = hex;
}

valorHex.addEventListener('input', converterCor);

function hexParaRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
}

function rgbParaHsl(r, g, b) {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;

    const l = (max + min) / 2;
    let h = 0;
    let s = 0;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));

        if (max === rNorm) {
            h = ((gNorm - bNorm) / delta) % 6;
        } else if (max === gNorm) {
            h = (bNorm - rNorm) / delta + 2;
        } else {
            h = (rNorm - gNorm) / delta + 4;
        }

        h = h * 60;

        if (h < 0) {
            h = h + 360;
        }
    }

    return {
        h: Math.round(h),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function atualizarPeloSeletor() {
    valorHex.value = seletorCor.value;
    converterCor();
}

seletorCor.addEventListener('input', atualizarPeloSeletor);

// ---- Gerador de CSS ---- //
const sliderHorizontal = document.getElementById('deslocamento-horizontal');
const sliderVertical = document.getElementById('deslocamento-vertical');
const sliderDesfoque = document.getElementById('desfoque');
const sliderOpacidade = document.getElementById('opacidade');
const spanHorizontal = document.getElementById('valor-deslocamento-horizontal');
const spanVertical = document.getElementById('valor-deslocamento-vertical');
const spanDesfoque = document.getElementById('valor-desfoque');
const spanOpacidade = document.getElementById('valor-opacidade');
const caixaPreview = document.getElementById('gerador-preview-caixa');
const seletorCorSombra = document.getElementById('cor-sombra');
const resultadoSombra = document.getElementById('resultado-sombra');

function atualizarSombra() {
    spanHorizontal.textContent = sliderHorizontal.value + 'px';
    spanVertical.textContent = sliderVertical.value + 'px';
    spanDesfoque.textContent = sliderDesfoque.value + 'px';
    spanOpacidade.textContent = sliderOpacidade.value + '%';

    const rgbSombra = hexParaRgb(seletorCorSombra.value);
    const opacidade = sliderOpacidade.value / 100;

    const sombra = `${sliderHorizontal.value}px ${sliderVertical.value}px ${sliderDesfoque.value}px rgba(${rgbSombra.r}, ${rgbSombra.g}, ${rgbSombra.b}, ${opacidade})`;

    caixaPreview.style.boxShadow = sombra;
    resultadoSombra.textContent = `box-shadow: ${sombra};`;

}

sliderHorizontal.addEventListener('input', atualizarSombra);
sliderVertical.addEventListener('input', atualizarSombra);
sliderDesfoque.addEventListener('input', atualizarSombra);
sliderOpacidade.addEventListener('input', atualizarSombra);
seletorCorSombra.addEventListener('input', atualizarSombra);

atualizarSombra();

const botoesCopiar = document.querySelectorAll('.botao-copiar');

botoesCopiar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const textoResultado = botao.previousElementSibling.textContent;
        navigator.clipboard.writeText(textoResultado);

        botao.textContent = 'Copiado!';

        setTimeout(() => {
            botao.textContent = 'Copiar';
        }, 1500);
    });
});