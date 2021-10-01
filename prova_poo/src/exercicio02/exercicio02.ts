// class Veiculos {
//     constructor(
//         private modelo: string,
//         private marca: string,
//         private ano: number,
//         private valorLocacao: number,
//         private qDias: number
//         ) {}

//     getModelo(){
//         return this.modelo
//     }

//     setModelo(modelo: string) {
//         if (!modelo) {
//             throw new Error('Sem modelo')
//     }
//         this.modelo = modelo
//     }

//     getMarca(){
//         return this.marca
//     }

//     setMarca(marca: string) {
//         if (!marca) {
//             throw new Error('Marca vazia')
//         }
//         this.marca = marca
//     }

//     getAno(){
//         return this.ano
//     }

//     setAno(ano: number) {
//         if (ano <= 0) {
//             throw new Error('Modelo não encontrado')
//     }
//         this.ano = ano
//     }

//     getValorLocacao(){
//         return this.valorLocacao
//     }

//     setValorLocacao(valorLocacao: number) {
//         if (valorLocacao <= 0) {
//             throw new Error('Valor inválido!!')
//     }
//         this.valorLocacao = valorLocacao
//     }

//     getQDias(){
//         return this.qDias
//     }

//     setQDias(qDias: number) {
//         if (qDias <= 0) {
//             throw new Error('Dias inválidos')
//     }
//         this.qDias = qDias
//     }

//     aluguel(){
//         return this.qDias * this.valorLocacao
//     }
// }

// const veiculo = new Veiculos ('A3 Sedan', 'Audi', 2016, 100, 7)
// console.log(veiculo);

// try {
     // veiculo.modelo = ''
     // veiculo.marca = ''
     // veiculo.ano = 0
     // veiculo.valorLocacao = 0
     // veiculo.qDias = 0
// } catch (err:any) {
//     console.log(err.message);

// }
 //console.log(veiculo);
// console.log("Total:" + veiculo.aluguel());