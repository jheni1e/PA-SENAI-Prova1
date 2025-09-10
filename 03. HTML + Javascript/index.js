const sendnumbers = () => {
    let num1 = parseInt(document.getElementById("input").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);
    let numeros = [num1, num2, num3];

    let maior = 0;
    let menor = 0;
    let media = (num1 + num2 + num3) / 3;

    if (num1 == num2 || num2 == num3 || num1 == num3) {
        alert(`Dois números não podem ter o mesmo valor!`);
        return;
    }

    let inicio = 0;		
	for (i = 0; i < 3; i++) {
			if (inicio == 0) {
				maior = numeros[i];
				menor = numeros[i];
				inicio = 1;
			} else {
				if (numeros[i] > maior) {
					maior = numeros[i];
				}
				if (numeros[i] < menor) {
					menor = numeros[i];
				}
			}
	}

    let newalert = document.createElement('h4');
    newalert.className = "alerta";
    let divresultado = document.getElementById('resultado');
    newalert.innerHTML = `Maior número: ${maior}<br/>Menor número: ${menor}<br/>Média: ${media}`;
    divresultado.appendChild(newalert);
}