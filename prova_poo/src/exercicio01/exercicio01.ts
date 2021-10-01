// class Pessoa {
//     static sexo = ["Masculino, Feminino"]

//     constructor(
//         public nome: string,
//         public sexo: string,
//         public idade: number,
//         ) {}

//     getNomes() {
//         return this.nome
//     }

//     setNomes(nome: string) {
//         if (!nome) {
//             throw new Error('Sem nome!')
//         }
//         this.nome = nome
//     }

//     getSexos() {
//         return this.sexo
//     }

//     setSexos(sexo: string) {
//         if (!Pessoa.sexo.includes(sexo)) {
//             throw new Error('Sem sexo!')
//         }
//         this.sexo = sexo
//     }

//     getIdades() {
//         return this.idade
//     }

//     setIdades(idade: number) {
//         if (idade <= 0 ) {
//             throw new Error('Sem idade!')
//     }
//         this.idade = idade
//     }

//     verificacaoIdade(idade: number) {
//         if (idade >= 18) {
//             console.log('Maior de idade');
//         } else {
//             console.log('Menor de idade');
//         }

//     }

// }

// const pessoa = new Pessoa('Gabrielle', 'Feminino', 24)
// console.log(pessoa);
// console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.verificacaoIdade(24))

// try {
    //pessoa.nome = ''
     //pessoa.idade = 0
//     pessoa.sexo = 'Nao possui'
//     console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.verificacaoIdade(17))
// } catch (err:any) {
// console.log(err.message);
// }


// try {
//     pessoa.idade = 17
//     console.log(pessoa.nome, 'possui ' + pessoa.idade)
// } catch (err: any) {
//     console.log(err.message)
// }
// console.log(pessoa.verificacaoIdade(17));