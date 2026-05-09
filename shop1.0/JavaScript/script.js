let oplate = false
const change = () => {
    document.getElementById('text').innerText='ждем оплату...'
    setTimeout(()=>{
        document.getElementById('text').innerText='оплата прошла'
        oplate = true
    },5000)
    if (oplate) {
        setTimeout(() => {
            document.getElementById('text').innerText = 'окно оплаты'
        }, 1000)
    }
}