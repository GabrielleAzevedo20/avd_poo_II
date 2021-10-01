// class Funcionarios {
//     constructor(
//         public nome: string,
//         public salarioHora: number,
//         public diaTrabalhado: number,
//         public faltaAno: number
//     ) {}

//     getNome() {
//         return this.nome;
//     }

//     setNome(nome: string) {
//         if(!nome) {
//             throw new Error('Nome inválido!')
//         }
//         this.nome = nome
//     }

//     getSalarioHora() {
//         return this.salarioHora;
//     }

//     setSalarioHora(salarioHora: number) {
//         this.salarioHora = salarioHora
//     }

//     getDiaTrabalhado() {
//         return this.diaTrabalhado;
//     }

//     setDiaTrabalhado(diaTrabalhado: number) {
//         this.diaTrabalhado = diaTrabalhado
//     }

//     getFaltaAno() {
//         return this.faltaAno
//     }

//     setFaltaAno(faltaAno: number) {
//         this.faltaAno = faltaAno
//     }

//     calculoSalarioBruto() {
//         return this.salarioHora * this.diaTrabalhado
//     }
//     funcPLR() {
//         if (this.faltaAno == 0) {
//             return this.calculoSalarioBruto()
//         } else if (this.faltaAno == 1) {
//             return this.calculoSalarioBruto() * 0.94
//         } else if (this.faltaAno == 2) {
//             return this.calculoSalarioBruto() * 0.92
//         } else if (this.faltaAno == 3) {
//             return this.calculoSalarioBruto() * 0.90
//         } else if (this.faltaAno == 4) {
//             return this.calculoSalarioBruto() * 0.88
//         } else (this.faltaAno >= 5)
//             return 0
//     }

//     desconto() {
//         return this.calculoSalarioBruto() * 0.05
//     }

//     salarioLiquido() {
//         return this.calculoSalarioBruto() - this.desconto() + this.funcPLR()
//     }
// }

// const funcionarios = new Funcionarios('Gabrielle', 80, 200, 0)
// console.log(`A funcionária de nome ${funcionarios.nome}, tem o salário bruto
// de ${funcionarios.calculoSalarioBruto()}, teve ${funcionarios.faltaAno} falta e sua PLR foi
// de ${funcionarios.funcPLR()}.`)

// const funcionarioss = new Funcionarios('Lara Croft', 40, 150, 5)
// console.log(`A funcionária de nome ${funcionarioss.nome} tem o salário bruto de
// ${funcionarioss.calculoSalarioBruto()}, o desconto de ${funcionarioss.desconto()}, a PLR de
// ${funcionarioss.funcPLR()} e o salário líquido de ${funcionarioss.salarioLiquido()}`)