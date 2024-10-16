document
    .getElementById("inscricaoform")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            genero: document.querySelector('input[name="genero"]:checked').value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            notificacoes: document.querySelector('input[name="notificacoes"]').checked,
        };
        console.log("Dados:", formData);

        fetch("http://localhost:5500", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Inscrição realizada com sucesso!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Ocorreu um erro ao realizar a inscrição.");
            });
    });
