function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do paciente. Pacientes cadastrados: Carlos ou Rita ou Joao ou Maria.</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase ()    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa, que serão concatenados dentro do loop
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados' (assumindo que 'dados' seja um array de objetos com as propriedades 'titulo', 'descricao' e 'link')
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Exames do Paciente</a> </div>
        `;
        }
        }        

        if (!resultados){
            resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do paciente. Pacientes cadastrados: Carlos ou Rita ou Joao ou Maria.</p>"

        }

    // Atribui o HTML gerado para o conteúdo interno da seção de resultados, substituindo qualquer conteúdo anterior
    section.innerHTML = resultados;
}


