function exibir() {
    publicar_div.style.display = 'flex';
}

function exibirdetalhes() {
    publicar_div.style.display = 'flex';
}

function fechar() {
    publicar_div.style.display = 'none';
}

function fechardetalhes() {
    abrirdetalhes.style.display = 'none';
}

function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    let texto = textarea_descricao.value;
    let tag = textarea_tag.value;
    let tagValido = true, textoValido = true;

    if (texto == `` || tag == ``) {
        publica_erro.innerHTML = `Insira todos os campos`
        textoValido = false;
        tagValido = false;
    } else {
        let index = 0;
        for (let i = 0; i < tag.length; i++) {
            if (tag[i] == '#') {
                index++;
            }
        }

        if (index > 1) {
            tagValido = false;
            publica_erro.innerHTML = `Só pode ter um tag`
        } else {
            tag = tag.replace('#', '')
            tag = tag.replace(' ', '')
            tag = tag.toUpperCase()
        }
    }

    if (textoValido == true && tagValido == true) {
        var corpo = {
            descricao: texto,
            tag: tag
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
                window.alert("Post realizado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
                window.location = "./forum.html";
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
}