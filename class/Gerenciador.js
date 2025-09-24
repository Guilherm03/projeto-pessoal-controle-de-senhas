class GerenciadorSenhas {
    static totalSenhas = 0
    senhas = []

    adicionar(senhaObj) {
        this.senhas.push(senhaObj)
        GerenciadorSenhas.totalSenhas++
    }

    listarSenhas() {
        if (this.senhas.length === 0) {
            console.log("Nenhuma senha cadastrada.")
            return
        }
        else {
            console.log("Senhas cadastradas:")
            this.senhas.forEach(s => console.log(s.exibirResumo()))
        }

    }

    buscar(site) {
        return this.senhas.filter(s => s.site === site)
    }
}

module.exports = GerenciadorSenhas
