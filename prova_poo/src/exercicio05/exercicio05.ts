// class Produtos {
//     constructor (
//         public produto: string,
//         public preco: number,
//         public quantidade: number
//     ) {}

//     getProduto() {
//         return this.produto
//     }

//     setProduto(produto: string) {
//         if(!produto) {
//             throw new Error('Produto vazio ')
//         }
//         this.produto = produto
//     }

//     getPreco() {
//         return this.preco;
//     }
//     setPreco(preco: number) {
//         if(preco <= 0) {
//             throw new Error('Preço negativo ')
//         }
//         this.preco = preco
//     }

//     getQuantidade() {
//         return this.quantidade;
//     }

//     setQuantidade(quantidade: number) {
//         if(quantidade <= 0) {
//             throw new Error('Quantidade inválida ')
//         }
//         this.quantidade = quantidade
//     }

//     desconto() {
//         if(this.quantidade <= 20) {
//             return 0
//         } else if (this.quantidade <= 50) {
//             return this.preco * this.quantidade * 0.1
//         } else if (this.quantidade <= 80) {
//             return this.preco * this.quantidade * 0.2
//         } else {
//             return this.preco * this.quantidade * 0.25
//         }

//     }

//     total(){
//         return this.quantidade * this.preco - this.desconto()
//     }

// }
// const produtos = new Produtos('Xbox Series X', 6500, 2)
// console.log(`O produto ${produtos.produto} com o preço ${produtos.preco}, a quantidade comprada foi de ${produtos.quantidade}, e teve o desconto de ${produtos.desconto()} e o valor pago foi de ${produtos.total()}`);

