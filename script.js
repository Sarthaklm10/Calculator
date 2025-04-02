let result = document.getElementById('result');

function clearResult() {
    result.value = '';
    result.classList.add('animate-clear');
    setTimeout(() => result.classList.remove('animate-clear'), 500);
}

function deleteLast() {
    let currentValue = result.value;
    result.value = currentValue.slice(0, -1);
}

function append(value) {
    result.value += value;
    result.classList.add('animate-input');
    setTimeout(() => result.classList.remove('animate-input'), 300);
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
        console.error("Error occurred during calculation.");
    }
}

function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        append(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        append(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearResult();
    } else if (key === '%') {
        append('%');
    }
}

document.addEventListener('keydown', handleKeyPress);