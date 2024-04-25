function createDice(number) {
	const matrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

	const dice = document.createElement("div");

	dice.classList.add("dice");

	for (const dotPosition of matrix[number]) {
		const dot = document.createElement("div");

		dot.classList.add("dice-dot");
		dot.style.setProperty("--top", dotPosition[0] + "%");
		dot.style.setProperty("--left", dotPosition[1] + "%");
		dice.appendChild(dot);
	}

	return dice;
}

function random(dices) {
	dices.innerHTML = "";

	for (let i = 0; i < 4; i++) {
		const random = Math.floor((Math.random() * 6) + 1);
		const dice = createDice(random);

		dices.appendChild(dice);
	}
}


const dices = document.querySelector(".dices");
const btn = document.querySelector(".btn");



btn.addEventListener("click", () => {
	const interval = setInterval(() => {
		random(dices);
	}, 100);

	setTimeout(() => clearInterval(interval), 1000);
});