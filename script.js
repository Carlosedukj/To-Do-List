// Estado da aplicação (onde ficam as tarefas)
let tarefas = [];

// Capturando elementos do DOM
const inputTarefa = document.getElementById("inputTarefa");
const criarTarefa = document.getElementById("adicionar");
const criarLista = document.querySelector("#list");

// Evento de clique no botão adicionar
criarTarefa.addEventListener("click", adicionarTarefas);

// Função para adicionar tarefa
function adicionarTarefas() {
  const valorDigitado = inputTarefa.value.trim();

  if (valorDigitado === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  tarefas.push(valorDigitado);

  inputTarefa.value = "";

  renderizarTarefas();
}

// Função para renderizar a lista
function renderizarTarefas() {
  // Limpa a lista antes de recriar
  criarLista.innerHTML = "";

  tarefas.forEach(function (tarefa, index) {
    const li = document.createElement("li");
    li.textContent = tarefa;

    // Criar botão remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function () {
      removerTarefa(index);
    });

    // Adiciona o botão dentro da li
    li.appendChild(botaoRemover);

    // Adiciona a li na ul
    criarLista.appendChild(li);
  });
}

// Função para remover tarefa
function removerTarefa(index) {
  const confirmar = confirm("Deseja remover essa tarefa?");

  if (!confirmar) return;

  tarefas.splice(index, 1);

  renderizarTarefas();
}