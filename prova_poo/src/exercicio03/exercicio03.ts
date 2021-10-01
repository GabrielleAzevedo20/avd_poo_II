// class impostoRenda {
//     constructor (
//         private nome: string,
//         private rendaMensal: number
//     ) { }

//     getNomes() {
//         return this.nome
//     }

//     setNomes(nome: string) {
//         if(!nome){
//             throw new Error('Nome inválido!!')
//         }
//         this.nome = nome
//     }

//     getRendaMensal() {
//         return this.rendaMensal
//     }

//     setRendaMensal(rendaMensal: number) {
//         if (rendaMensal < 0 ) {
//             throw new Error('A renda mensal é inválida')
//         }
//         this.rendaMensal = rendaMensal
//     }
// }
// class PessoaFisica extends impostoRenda {
//     private saude: number

//     constructor(nome: string, rendaMensal: number, saude: number) {
//         super(nome, rendaMensal)
//         this.saude = saude
//     }

//     getSaude(): number {
//         return this.saude
//     }

//     setSaude(saude: number) {
//         if (saude < 0) {
//             throw new Error('Gasto negativo')
//         }
//         this.saude = saude
//     }

//     calculaImpostoPF(){
//         if (this.rendaMensal < 20000 && this.saude) {
//             return this.rendaMensal * 0.15
//         }
// }
// }

// const pessoaFisica = new PessoaFisica('João', 50000, 2000)
// console.log(`O valor do imposto de renda da Pessoa Fisica é: ${pessoaFisica.calculaImpostoPF()}`);



// class PessoaJuridica extends impostoRenda {
//     private funcionario: number

//     constructor(nome: string, rendaMensal: number, funcionario: number) {
//         super(nome, rendaMensal)
//         this.funcionario = funcionario
//     }

//     getFuncionario(): number {
//         return this.funcionario
//     }

//     setFuncionario(funcionario: number) {
//         if (funcionario < 0) {
//             throw new Error('A quantidade de funcionários inválida')
//         }
//         this.funcionario = funcionario
//     }

//     calculaImpostoPJ(): number {
//         if(this.funcionario < 10) {
//             return this.rendaMensal * 0.16
//         } else {
//             return this.rendaMensal * 0.14
//         }
//     }
// }

// const pessoaJuridica = new PessoaJuridica('Sérgio Oliveira', 500000, 25)
// console.log(pessoaJuridica);
// console.log('O valor do imposto de renda da pessoa jurídica é: ' + pessoaJuridica.calculaImpostoPJ());

// try {
//     pessoaJuridica.nome = 'Gabrielle'
//     pessoaJuridica.funcionario = 120
//     pessoaJuridica.rendaMensal = 10000
// } catch (err:any) {
//     console.log(err.messege);

// }
 //console.log(pessoaJuridica);


// try {
 //     pessoaFisica.nome = 'Kassandra'
 //     pessoaFisica.funcionario = 340
 //     pessoaFisica.rendaMensal = 50000
 // } catch (err:any) {
 //     console.log(err.message);
 // }