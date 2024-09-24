balaio=[];

for(i=1;i<=60;i++){balaio.push(i)}

document.write(`Sugestão de 6 (seis) números da mega sena: `)
for(i=0;i<6;i++){
    indice = Math.round(Math.random()*(balaio.length-i))//Nro aleatorio entre 1 a 60
    balaio.splice(indice,1);

    if(i==5){
        document.write(`${balaio[indice]}`)
    }else{
        document.write(`${balaio[indice]} - `)
    }

}