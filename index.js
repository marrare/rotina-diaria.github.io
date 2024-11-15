let contador = 1;  // Variável para contar o número da tabela

// Função para carregar as tabelas a partir do novo localStorage
function carregarTabelas() {
    // Limpar qualquer dado antigo do localStorage
    localStorage.removeItem("tabelas");

    // Recupera as tabelas salvas do novo localStorage
    let tabelasSalvas = localStorage.getItem("tabelas");  // Recupera dados do localStorage
    if (tabelasSalvas) {
        // Se houver tabelas salvas, exibe-as
        document.getElementById("tabelas").innerHTML = tabelasSalvas;
        contador = document.querySelectorAll('table').length + 1;  // Ajusta o contador
    }
}

// Função para adicionar a tabela de atividades
function adicionarTabela() {
    let inputDia = document.getElementById("inputDia").value;
    let inputNoite = document.getElementById("inputNoite").value;

    // Verifica se os campos não estão vazios
    if (inputDia.trim() === "" || inputNoite.trim() === "") {
        alert("Por favor, preencha os campos para o dia e a noite.");
        return;
    }

    // Cria uma nova tabela
    let tabela = document.createElement("table");
    let tbody = document.createElement("tbody");

    // Cria a primeira linha com os títulos "Dia" e "Noite"
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = "Dia";
    let td2 = document.createElement("td");
    td2.textContent = "Noite";
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);

    // Cria a segunda linha com os dados inseridos para o dia e noite
    let tr2 = document.createElement("tr");
    let td3 = document.createElement("td");
    td3.textContent = inputDia;
    let td4 = document.createElement("td");
    td4.textContent = inputNoite;
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    // Adiciona um número identificador na primeira célula de cada tabela
    let tr3 = document.createElement("tr");
    let td5 = document.createElement("td");
    td5.textContent = "Visitante #" + contador;
    td5.colSpan = 2;  // Faz a célula ocupar as duas colunas
    tr3.appendChild(td5);
    tbody.appendChild(tr3);

    // Aplica o tbody à tabela
    tabela.appendChild(tbody);

    // Insere a tabela no corpo do documento, abaixo das tabelas existentes
    document.getElementById("tabelas").appendChild(tabela);

    // Incrementa o contador para a próxima tabela
    contador++;

    // Limpar as tabelas anteriores (visitantes 1-4)
    let tabelas = document.getElementById("tabelas").children;
    while (tabelas.length > 4) {
        document.getElementById("tabelas").removeChild(tabelas[0]);
    }

    // Salva as tabelas atuais no novo localStorage
    localStorage.setItem("tabelas", document.getElementById("tabelas").innerHTML);

    // Limpa os campos de input para a próxima entrada
    document.getElementById("inputDia").value = "";
    document.getElementById("inputNoite").value = "";
}

// Carrega as tabelas e reseta o localStorage assim que a página for carregada
window.onload = carregarTabelas;