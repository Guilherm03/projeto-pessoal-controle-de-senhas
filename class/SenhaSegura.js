const Senha = require("./Senha")

class SenhaSegura extends Senha {
    constructor(site, login, senha) {
        super(site, login, senha)
    }

    exibirResumo() {
        return `Site: ${this.site} Login: ${this.login} | Senha: ********`
    }
}

module.exports = SenhaSegura 