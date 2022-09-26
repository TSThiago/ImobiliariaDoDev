let arrayImoveis = []

class Pessoa{
    Nome
    CPF
    Nascimento

    constructor(nome,cpf,nascimento){
        this.Nome = nome
        this.CPF = cpf
        this.Nascimento = nascimento
    }
}

class Imovel{
    Endereco
    CEP
    Area
    Banheiros
    Quartos
    Moradores = []
    Valor

    constructor(endereco,cep,area,banheiros,quartos,valor){
        this.Endereco = endereco
        this.CEP = cep
        this.Area = area
        this.Banheiros = banheiros
        this.Quartos = quartos
        this.Valor = parseFloat(valor)
    }
    
    AdicionarMorador(){
        // let nome = prompt("Insira o nome do morador")
        // let cpf = prompt("Insira o CPF do morador")
        // let nascimento = prompt("Insira a data de nascimento:")
        
        let novoMorador = new Pessoa("Luiz","00000000","30/04/1998")
        this.Moradores.push(novoMorador)
    }
    
    RemoverMorador(moradorParametro){
        this.Moradores.forEach((x,index) => {
            if(moradorParametro == x.Nome){
                this.Moradores.splice(index ,1)
            }
        })
    }
}

class Casa extends Imovel{
    ComQuintal

    constructor(endereco,cep,area,banheiros,quartos,valor,comQuintal){
        super(endereco,cep,area,banheiros,quartos,valor)
        this.ComQuintal = comQuintal
    }

    CalcularValorCasa(){
        if(this.ComQuintal == true){
            this.Valor = (this.Valor * 1.3)
        }
    }
}

class Apartamento extends Imovel{
    Andar
    ValorCondominio
    constructor(endereco,cep,area,banheiros,quartos,valor,andar,valorCondominio){
        super(endereco,cep,area,banheiros,quartos,valor)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
    }

    CalcularValorAp(){
        this.Valor = this.Valor + this.ValorCondominio
    }
}

class Kitnet extends Imovel{
    
    constructor(endereco,cep,area,banheiros,quartos,valor){
        super(endereco,cep,area,banheiros,quartos,valor)
    }


}

let casa = new Casa("SP","00000-000","75m²",5,2,1000000.00,true)
casa.AdicionarMorador()
casa.CalcularValorCasa()
// apartamento.RemoverMorador("Luiz")

