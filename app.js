// var x = document.getElementById('form1')
// for(var i = 0; i < x.length; i++){
//     document.write(x.elements[i].value)
//     document.write("<br>")
// }
function oblicz() {
    a = Number(liczby.a.value)
    b = Number(liczby.b.value)
    dzialanie = liczby.dzialanie.value
    
    switch(dzialanie){
        case '+':
            wynik = a + b
            break
        case '-':
            wynik = a - b
            break
        case '/':
            wynik = a / b
            break
        case '*':
            wynik = a * b
            break
        case '**':
            wynik = a ** b
            break
    }
}
setInterval(() => {
    oblicz()
    document.getElementById('wynik').innerHTML = wynik
}, 100);