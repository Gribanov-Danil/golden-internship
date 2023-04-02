export const toggler = () => {
    let themeToggler = document.querySelector('.toggler__block');
    let togglerTextList = document.querySelectorAll('.toggler__text')
    let enterSpanList = document.querySelectorAll('.enter__date')
    themeToggler.onclick = () =>{
        togglerTextList.forEach((item) => item.classList.toggle('active'))
        enterSpanList.forEach((item) => item.classList.toggle('hidden'))
        themeToggler.classList.toggle('checked')
    }
}