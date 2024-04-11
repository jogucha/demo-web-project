function calculaRomano() {
    numero = document.getElementById("numero").value;
    window.alert(numero);
    romano = "";
    if (numero == 1) {
        romano = "I";
    }
    if (numero == 5) {
        romano = "V";
    }
    if (numero == 10) {
        romano = "X";
    }
    document.getElementById("resultado").innerHTML = romano;
}
