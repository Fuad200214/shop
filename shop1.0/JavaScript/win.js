const win7 = document.getElementById('win7')
const winxp = document.getElementById('winXP')
const win10 = document.getElementById('win10')
const win11 = document.getElementById('win11')
const close = document.getElementById('closeModal')
win7.onclick = () => {
    modal.classList.add('open')
}
winxp.onclick = () => {
    modal.classList.add('open')
}
win10.onclick = () => {
    modal.classList.add('open')
}
win11.onclick = () => {
    modal.classList.add('open')
}
close.onclick = () => {
    modal.classList.remove('open')
}