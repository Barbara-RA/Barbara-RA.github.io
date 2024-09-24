vet=[]
vet.length
vet=[10,20,30]
vet=[0]

// alterar a posição 1 de 20 para 40
vet[1]=40;

// alterar a posição 2 de 30 para String
vet[2]="teste"


vet=[10,20,30]
// adcionando uma nova posição sem um vetor
vet.push(40);

// adcionando várias posições em um vetor
vet.push(50,60,70)

// removendo a ùltima posição de um vetor
elemento= vet.pop()

// removendo a primeira posição de um vetor
elemento= vet.shift()

// Invertendo a ordem das posições do vetor
vet.reverse();

vet=[10,20,30]

// removendo o numero 20 do vetor
vet.splice(1,1);

// adcionando o numero 25 no vetor
vet=[10,20,30]
vet.splice(2,0,25);