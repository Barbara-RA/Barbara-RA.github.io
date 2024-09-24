// document.write(`<h1>Números da mega sena: </h1>`)
// for(i=0;i<6;i++){
//     x = Math.round(Math.random()*59) //Nro aleatorio entre 1 a 60
//     if(i==6-1){
//         document.write(`${x}`)
//     }else{
//         document.write(`${x} - `)  
//     }
// }

balaio=[];

for(i=1;i<=60;i++) balaio.push(i)


// for(i=0;i<6;i++){
//     indice = Math.round(Math.random()*(balaio.length-i))//Nro aleatorio entre 1 a 60
//     document.write(`${balaio[indice]} - `)
//     balaio.splice(indice,1);
// }


for(i=0;i<6;i++){
    indice = Math.round(Math.random()*(balaio.length-i))//Nro aleatorio entre 1 a 60
    balaio.splice(indice,1);

    if(i==5){
        document.write(`${balaio[indice]}`)
    }else{
        document.write(`${balaio[indice]} - `)
    }

}
