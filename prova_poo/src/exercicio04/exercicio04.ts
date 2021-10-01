// class Vendas {
//     constructor(
//         private nome: string,
//         private salario: number,
//         private valorVenda: number,
//     ){ }

//     getNomes() {
//         return this.nome
//     }

//     setNomes(nome: string) {
//         if(!nome) {
//             throw new Error('Sem nome ')
//         }
//         this.nome = nome
//     }

//     getSalarios() {
//         return this.salario
//     }

//     setSalarios(salario: number) {
//         if(salario < 0) {
//             throw new Error('Sem sálario')
//         }
//         this.salario = salario
//     }

//     getValorVenda() {
//         return this.valorVenda
//     }

//     setValorVenda(valorVenda: number) {
//         if (valorVenda < 0) {
//             throw new Error('Valor inválido ')
//         }
//         this.valorVenda = valorVenda
//     }

//     desconto(): number{
//         return this.salario * 0.08
//     }
// }

//     const vendedores = new Vendedores('Gabrielle', 1000, 700)
//     console.log(vendedores);
// try {
//     vendedores.nome = 'Gabrielle'
//     vendedores.salario = 1000
//     vendedores.valorVenda = 700
//     console.log(vendedores)

// } catch (err) {
// console.log(err.message);
// }
// console.log('Valor do desconto: ' + vendedores.desconto());

// class VendedorPessoaFisica extends Vendas {
//     static regioes = ['Sul', 'Sudeste', 'Centro-Oeste', 'Norte', 'Nordeste']
//     private regiao: string

//     constructor(nome: string, salario: number, valorVenda: number, regiao:string) {
//         super(nome, salario, valorVenda)
//         this.regiao = regiao
//     }

//     getRegiao(): string {
//         return this.regiao
//     }

//     setRegiao(regiao: string) {
//         if (!VendedorPessoaFisica.regiao.includes(regiao)) {
//             throw new Error('Região não encontrada')
//         }

//         this.regiao = regiao
//     }

//     comissao(): number {
//         if(this.regiao == 'Sul') {
//             return this.valorVenda * 0.10
//         } else if (this.regiao == 'Sudeste') {
//             return this.valorVenda * 0.12
//         } else if (this.regiao == 'Centro-Oeste') {
//             return this.valorVenda * 0.14
//         } else if (this.regiao == 'Norte') {
//             return this.valorVenda * 0.15
//         } else if (this.regiao == 'Nordeste') {
//             return this.valorVenda * 0.17
//         }
//         return 0
//     }

//     salarioTotal() {
//         return this.salario + this.comissao()
//     }

// }

//     const vendedorPessoaFisica = new VendedorPessoaFisica('Julia', 13400, 300, 'Nordeste')
// console.log(vendedorPessoaFisica)
// try {
//     vendedorPessoaFisica.nome = 'Julia Azevedo',
//     vendedorPessoaFisica.salario = 4000
//     vendedorPessoaFisica.valorVenda = 1000
//     vendedorPessoaFisica.regiao = 'Sudeste'
//     console.log(vendedorPessoaFisica)
// } catch (err:any) {
//     console.log(err.message);
// }
// console.log('Comissão Pessoa Física : ' + vendedorPessoaFisica.comissao())
// console.log('Salário Total Pessoa Física: ' + vendedorPessoaFisica.salarioTotal());

// class VendedorPessoaJuridica extends Vendas{
//     private nomeEmpresa: string
//     private totalFuncionarioss: number

//     constructor(nome: string, salario: number, valorVenda: number, nomeEmpresa:string, totalFuncionarios: number) {
//         super(nome, salario, valorVenda)
//         this.nomeEmpresa = nomeEmpresa
//         this.totalFuncionarioss = totalFuncionarios
//     }

//     getNomeEmpresa() {
//         return this.nomeEmpresa
//     }

//     setNomeEmpresa(nomeEmpresa: string) {
//         if (!nomeEmpresa) {
//             throw new Error('Nome da Empresa vazio ')
//         }
//         this.nomeEmpresa = nomeEmpresa
//     }

//     getTotalFuncionarioss() {
//         return this.totalFuncionarioss
//     }

//     setTotalFuncionarioss(totalFuncionarios: number) {
//         if(!totalFuncionarios) {
//             throw new Error('Total inválido ')
//         }
//         this.totalFuncionarioss = totalFuncionarioss
//     }

//     comissao() {
//         if(this.valorVenda < 5000) {
//             return this.valorVenda * 0.02
//         } else if (this.valorVenda >= 5000 && this.valorVenda < 10000 * 0.4){
//             return this.valorVenda * 0.04
//         } else if (this.valorVenda >= 10000) {
//             return this.valorVenda * 0.06
//         }
//         return 0
//     }

//     totalSalario(): number {
//         if (this.totalFuncionarioss < 100 ) {
//             return this.salario + this.comissao() + 200
//         } else {
//             return this.salario + this.comissao() + 300
//         }
//     }
// }

// const vendedorPessoaJuridica = new VendedorPessoaJuridica('Josefina Cardoso', 8000, 123, 'Microsoft', 789)
// console.log(vendedorPessoaJuridica);
// try {
//     vendedorPessoaJuridica.nome = 'Josefina Cardoso',
//     vendedorPessoaJuridica.salario = 8000
//     vendedorPessoaJuridica.valorVenda = 789
//     vendedorPessoaJuridica.regiao = 'Sudeste'
//     vendedorPessoaJuridica.nomeEmpresa = 'Microsoft'
//     vendedorPessoaJuridica.totalFuncionarios = 123
//     console.log(vendedorPessoaJuridica)
// } catch (err:any) {
//     console.log(err.message);
// }
// console.log('A comissão: ' + vendedorPessoaJuridica.comissao());
// console.log('O salário Total: ' + vendedorPessoaJuridica.totalSalario())