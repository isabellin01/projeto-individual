function exibir() {
    publicar_div.style.display = 'flex';
}

function fechar() {
    publicar_div.style.display = 'none';
}

function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    var corpo = {
        descricao: textarea_descricao.value,
        tag: textarea_tag.value
    }

    fetch(`/avisos/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            // insertTag(corpo.tag);
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            window.location = "/dashboard/mural.html";
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}