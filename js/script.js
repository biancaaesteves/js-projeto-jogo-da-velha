//* Marcadores de X e O
let x = document.querySelector(".x");
let o = document.querySelector(".o");

//* Caixas:
let boxes = document.querySelectorAll(".box");

//* Botões:
let buttons = document.querySelectorAll("#buttons-container button");

//* Mensagem:
let messageContainer = document.querySelector("#message");

//* Texto da Mensagem:
let messageText = document.querySelector("#message p");

let secondPlayer;

//* Contador de jogadas
let player1 = 0;
let player2 = 0;

//! Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
	// Quando alguém clica na caixa.
	boxes[i].addEventListener("click", function () {
		let el = checkEl(player1, player2);

		//* Verifica se já tem x ou o
		if (this.childNodes.length === 0) {
			// só adiciona elemento filho (executa a lógica abaixo) se o campo estiver vazio.
			let cloneEl = el.cloneNode(true);
			this.appendChild(cloneEl);

			//* Computar a jogada:
			if (player1 === player2) {
				player1++;

				if (secondPlayer === "ai-player") {
					// função executar a jogada:
					setTimeout(computerplay, 400);
					player2++;
				}
			} else {
				player2++;
			}
			// assim alterna entre os elementos.

			//* Checa quem venceu:
			setTimeout(checkWinCondition, 800);
		}
	});
}

//* Evento para saber se é 2 players ou IA :
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		// quando clicar nos botões

		secondPlayer = this.getAttribute("id");

		for (let j = 0; j < buttons.length; j++) {
			buttons[j].style.display = "none";
			// os botões desaparecem pq começa o jogo.
		}

		setTimeout(function () {
			let container = document.querySelector("#container");
			container.classList.remove("hide");
		}, 500);
		// esconde o botão na função acima e depois aparece o jogo.
	});
}

//* Função que checa quem vai jogar:
function checkEl(player1, player2) {
	if (player1 === player2) {
		// x
		el = x;
	} else {
		// o
		el = o;
	}

	return el;
}

//* Função que checa quem ganhou:
function checkWinCondition() {
	let b1 = document.getElementById("block-1");
	let b2 = document.getElementById("block-2");
	let b3 = document.getElementById("block-3");
	let b4 = document.getElementById("block-4");
	let b5 = document.getElementById("block-5");
	let b6 = document.getElementById("block-6");
	let b7 = document.getElementById("block-7");
	let b8 = document.getElementById("block-8");
	let b9 = document.getElementById("block-9");

	// Horizontal:
	if (
		b1.childNodes.length > 0 &&
		b2.childNodes.length > 0 &&
		b3.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b2Child = b2.childNodes[0].className;
		let b3Child = b3.childNodes[0].className;

		if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
			declaraWinner("x");
		} else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
			declaraWinner("o");
		}
	}

	if (
		b4.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b6.childNodes.length > 0
	) {
		let b4Child = b4.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b6Child = b6.childNodes[0].className;

		if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
			declaraWinner("x");
		} else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
			declaraWinner("o");
		}
	}

	if (
		b7.childNodes.length > 0 &&
		b8.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b7Child = b7.childNodes[0].className;
		let b8Child = b8.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;

		if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
			declaraWinner("x");
		} else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
			declaraWinner("o");
		}
	}

	// Vertical :
	if (
		b1.childNodes.length > 0 &&
		b4.childNodes.length > 0 &&
		b7.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b4Child = b4.childNodes[0].className;
		let b7Child = b7.childNodes[0].className;

		if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
			declaraWinner("x");
		} else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
			declaraWinner("o");
		}
	}

	if (
		b2.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b8.childNodes.length > 0
	) {
		let b2Child = b2.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b8Child = b8.childNodes[0].className;

		if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
			declaraWinner("x");
		} else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
			declaraWinner("o");
		}
	}

	if (
		b3.childNodes.length > 0 &&
		b6.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b3Child = b3.childNodes[0].className;
		let b6Child = b6.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;

		if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
			declaraWinner("x");
		} else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
			declaraWinner("o");
		}
	}

	// Diagonal :
	if (
		b1.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;

		if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
			declaraWinner("x");
		} else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
			declaraWinner("o");
		}
	}

	if (
		b3.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b7.childNodes.length > 0
	) {
		let b3Child = b3.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b7Child = b7.childNodes[0].className;

		if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
			declaraWinner("x");
		} else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
			declaraWinner("o");
		}
	}

	// Deu velha :

	let counter = 0;

	for (let i = 0; i < boxes.length; i++) {
		if (boxes[i].childNodes[0] !== undefined) {
			// significa que tem um elemento filho (ou um x ou uma o)
			counter++; // então incrementa o contador
		}
	}

	if (counter === 9) {
		declaraWinner("Deu velha");

		// Essa lógica conta os elementos que tem filho, e se não chegar numa vitória pelas condições acima, ele chega no 9, diz que deu velha.
	}
}

//* Função que limpa o jogo, declara o vencedor e atualiza o placar.
function declaraWinner(winner) {
	let scoreboardX = document.querySelector("#scoreboard-1");
	let scoreboardO = document.querySelector("#scoreboard-2");
	let msg = "";

	if (winner === "x") {
		scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
		msg = "O jogador 1 venceu!";
	} else if (winner === "o") {
		scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
		msg = "O jogador 2 venceu!";
	} else {
		msg = "Deu velha!";
	}

	// Exibe msg
	messageText.innerHTML = msg;
	messageContainer.classList.remove("hide");

	// Esconde msg:
	setTimeout(function () {
		messageContainer.classList.add("hide");
	}, 3000);
	// remove a msg da tela após 3 segundos.

	// Zera as jogadas:
	player1 = 0;
	player2 = 0;

	// Remove x e o :
	let boxesToRemove = document.querySelectorAll(".box div");
	// todos os boxes que tem x e o preenchidos.

	for (let i = 0; i < boxesToRemove.length; i++) {
		boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
		// remove a criança do pai delas. Subimos um nível, indo pro pai (parentNode) e depois removemos a filha do pai (removeChild), que é a div que temos o x e a o preenchidos. Assim conseguimos zerar o jogo e mostrar a mensagem.
	}
}

//* EXECUTA A LÓGICA DA JOGADA DO CPU:
function computerplay() {
	// AI será o
	let cloneO = o.cloneNode(true);
	counter = 0;
	filled = 0; // qtos estão preenchidos

	for (let i = 0; i < boxes.length; i++) {
		let randomNumber = Math.floor(Math.random() * 5);
		// cada vez que o for for executado, ele cria um num aleatório de novo.

		// só preencher se estiver vazio o filho.
		if (boxes[i].childNodes[0] === undefined) {
			// não está preenchido

			if (randomNumber <= 1) {
				boxes[i].appendChild(cloneO);
				counter++; // preencheu
				break;
			}
			// checagem de quantas estão preenchidas
		} else {
			filled++; // verifica qtas casas estão preenchida p/ não executar a função infinitamente.
		}
	}

	if (counter === 0 && filled < 9) {
		computerplay(); // chama a função recursiva.
	}
}
