class Cartao{
        constructor(debito,valor){
                this.debito=debito
                this.valor=valor
                if(debito>=valor){
                        console.log('Compra Aprovada')
                        this.debito -= this.valor
                }
                else{
                        console.log('Compra Recusada')

                }
        }
}
const c1=new Cartao(1200,1202)
console.log(c1)