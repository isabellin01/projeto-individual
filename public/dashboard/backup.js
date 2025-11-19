//KPIS
for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    if (totalUserEngj.includes(resposta[i].userId) == false) {
        totalUserEngj.push(resposta[i].userId);
        totalUserPost.push({
            idUser: resposta[i].userId,
            qtdPost: resposta[i].totalPostDoUsuario
        });
    }
    if (resposta[i].postResolvido == 0) {
        totalDuvidas++;
    }
    totalGenero.push(resposta[i].userGenero);
    if (resposta[i].userGenero = 'F') {
        contadorF++;
    } else if (resposta[i].userGenero = 'M') {
        contadorM++;
    } else {
        contadorO++;
    }
    totalIdade.push(resposta[i].userIdade);
    totalTag.push(resposta[i].postTag);
}

kpi_totalduvida.innerHTML = `${totalDuvidas}`;
kpi_totalpost.innerHTML = `${totalPost}`;
kpi_duvidasporpost.innerHTML = `${((totalDuvidas / totalPost) * 100).toFixed(2)}%`;


//GRÁFICO DO GÊNERO
let dados2 = {
    labels: ['Feminino', 'Masculino', 'Outros'],
    datasets: [{
        label: 'Gênero',
        data: [contadorF, contadorM, contadorO],
        fill: true,
        backgroundColor: ['rgba(101, 14, 130)', 'rgb(60, 117, 223)', 'rgb(60, 223, 101)'],
        tension: 0.1,
    }]
};
// dados2.datasets[0].data.push(contadorM);
const config2 = {
    type: 'doughnut',
    data: dados2
};
let myChart2 = new Chart(
    document.getElementById(`myChartCanvas_gender`),
    config2
);

//Dados para utilizar:
let totalUser = resposta[0].totalUser;
let totalPost = resposta[0].totalPost;
let totalDuvidas = 0;
let totalUserEngj = []; // Todos os usuários que postaram algo
let totalUserPost = []; // Quantidade total de post por usuário
let totalGenero = [];
let contadorF = 0;
let contadorM = 0;
let contadorO = 0;
let totalIdade = [];
let totalTag = [];