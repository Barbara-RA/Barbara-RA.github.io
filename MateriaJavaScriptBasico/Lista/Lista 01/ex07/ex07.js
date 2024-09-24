
r= parseInt(prompt(`Por gentileza, informe 3 valores para formar uma cor RGB. \n IMPORTANTE: o valor deverá estar dentro do intervalo [0 à 255].\n 1° Informe a cor para R:`))
g= parseInt(prompt(`IMPORTANTE: o valor deverá estar dentro do intervalo [0 à 255].\n 2° Informe a cor para G:`))
b= parseInt(prompt(`IMPORTANTE: o valor deverá estar dentro do intervalo [0 à 255].\n 3° Informe a cor para B:`))

document.write(`<p style='color:rgb(${r},${g},${b});'>Fundamentos de Web Design II</p>`)

