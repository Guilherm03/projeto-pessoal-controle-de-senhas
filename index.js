const prompt = require("prompt-sync")()
const Senha = require("./class/Senha")
const SenhaSegura = require("./class/SenhaSegura")
const GerenciadorSenhas = require("./class/Gerenciador")

const gerenciador = new GerenciadorSenhas()

console.log("=== Sistema de Controle de Senhas ===")

let continuar = true

while (continuar) {
  console.log("\nEscolha uma opção:")
  console.log("1 - Adicionar senha normal")
  console.log("2 - Adicionar senha segura")
  console.log("3 - Listar senhas")
  console.log("4 - Buscar senha por site")
  console.log("5 - Sair")

  const opcao = prompt("Opção: ")

  switch (opcao) {
    case "1":
      const site1 = prompt("Site: ")
      const login1 = prompt("Login: ")
      const senha1 = prompt("Senha: ")
      const senhaNormal = new Senha(site1, login1, senha1)
      gerenciador.adicionar(senhaNormal)
      console.log("Senha adicionada!")
      break

    case "2":
      const site2 = prompt("Site: ")
      const login2 = prompt("Login: ")
      const senha2 = prompt("Senha: ")
      const senhaSegura = new SenhaSegura(site2, login2, senha2)
      gerenciador.adicionar(senhaSegura)
      console.log("Senha segura adicionada!")
      break

      case "3":
        let mostrarReal = prompt("Deseja mostrar as senhas reais? (s/n): ").toLowerCase()
        console.log("\nSenhas cadastradas:")
        gerenciador.senhas.forEach(s => {
          if (mostrarReal === 's' || mostrarReal === 'sim') {
            console.log(`Site: ${s.site} - Login: ${s.login} | Senha: ${s.senha}`)
          } else {
            console.log(s.exibirResumo())
          }
        })

        break

    case "4":
      const siteBusca = prompt("Digite o site para buscar: ")
      const resultados = gerenciador.buscar(siteBusca)
      if (resultados.length === 0) {
        console.log("Nenhuma senha encontrada.")
      } else {
        resultados.forEach(s => console.log(s.mostrarLogin()))
      }
      break

    case "5":
      continuar = false
      console.log("Saindo...")
      break

    default:
      console.log("Opção inválida!")
  }
}

console.log(`\nTotal de senhas cadastradas: ${GerenciadorSenhas.totalSenhas}`)