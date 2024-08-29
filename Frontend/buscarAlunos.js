const tabela = document.querySelector('tbody');

function criarAluno(){
    const aluno = {
        id: 1,
        nome: 'João da Silva',
        modulo: 'Módulo 1'
    };
    
    const novaLinha = document.createElement('tr');
    
    const celulaId = document.createElement('td');
    celulaId.textContent = aluno.id;
    novaLinha.appendChild(celulaId);
    
    const celulaNome = document.createElement('td');
    celulaNome.textContent = aluno.nome;
    novaLinha.appendChild(celulaNome);
    
    const celulaModulo = document.createElement('td');
    celulaModulo.textContent = aluno.modulo;
    novaLinha.appendChild(celulaModulo);
    
    tabela.appendChild(novaLinha);    
}
