const categories = document.getElementsByClassName("category");

fetch("data.json")
	.then((res) => res.json())
	.then((dataJson) => {
		for (let i = 0; i < categories.length; i++) {
			const categoryName = document.createElement("div");
			categoryName.classList.add("category__name");
			const icon = document.createElement("img");
			icon.src = dataJson[i].icon;
			icon.alt = "";
			categoryName.appendChild(icon);
			const name = document.createElement("p");
			name.textContent = dataJson[i].category;
			categoryName.appendChild(name);
			const score = document.createElement("p");
			score.classList.add("category__score");
			const scoreNum = document.createElement("span");
			scoreNum.textContent = dataJson[i].score;
			score.appendChild(scoreNum);
			scoreNum.after("/ 100");
			categories[i].appendChild(categoryName);
			categories[i].appendChild(score);
		}
	});
