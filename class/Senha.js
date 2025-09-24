class Senha {
    #senha

    constructor(site, login, senha) {
        this.site = site
        this.login = login
        this.#senha = senha
    }

    get senha() {
        return this.#senha
    }

    set senha(novaSenha) {
        this.#senha = novaSenha
    }

    mostrarLogin() {
        return `Site: ${this.site} | Login: ${this.login}`
    }

    exibirResumo() {
        return `Site: ${this.site} Login: ${this.login} | Senha: ********`
    }
}

module.exports = Senha