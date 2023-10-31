console.log('%c https://github.com/hadizz', 'font-size: 20px;')

const inputContent = document.getElementById('your-content')
const outputContent = document.getElementById('virasted-content')
const copyBtn = document.getElementById('copy-btn')

inputContent?.addEventListener('input', event => {
    const virastar = new Virastar()
    outputContent.value = virastar.cleanup(inputContent.value)
});

copyBtn?.addEventListener('click', () => {
    if (!navigator.clipboard) {
        copyBtn.classList.toggle('error')
        copyBtn.innerText = '⛔ رونوشت گرفته نشد!'

        return
    }

    const textToCopy = outputContent.value.trim()

    try {
        navigator.clipboard.writeText(textToCopy)
        copyBtn.classList.toggle('success')
        copyBtn.innerText = '✅ رونوشت گرفته شد!'

    } catch (err) {
        copyBtn.innerText = '⛔ رونوشت گرفته نشد!'
    }
    setTimeout(function () {
        copyBtn.classList.remove('error', 'success')
        copyBtn.innerText = '📝 رونوشت نوشتار ویراسته'
    }, 2000)
})