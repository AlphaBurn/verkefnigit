const actionBtn = document.getElementById('action-btn');
const outputText = document.getElementById('output-text');

actionBtn.addEventListener('click', function() {
    if (outputText.classList.contains('hidden')) {
        outputText.classList.remove('hidden');
        actionBtn.textContent = 'Fela texta';
    } else {
        outputText.classList.add('hidden');
        actionBtn.textContent = 'Smelltu a mig';
    }
});