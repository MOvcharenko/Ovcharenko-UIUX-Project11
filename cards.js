// 1: Creating objects.
const cards = [
    { id: 1, title: "Learn JavaScript", description: "Understand the basics of JavaScript.", imageUrl: "https://placehold.co/600x400", link: "https://placehold.co/600x400" },
    { id: 2, title: "Master CSS", description: "Advanced layouts and animations.", imageUrl: "https://placehold.co/600x400", link: "https://placehold.co/600x400" },
    { id: 3, title: "HTML Essentials", description: "Build strong foundations with HTML.", imageUrl: "https://placehold.co/600x400", link: "https://placehold.co/600x400" },
    { id: 4, title: "React Basics", description: "Learn React.js for building UIs.", imageUrl: "https://placehold.co/600x400", link: "https://placehold.co/600x400" },
    { id: 5, title: "Backend Development", description: "Server-side coding with Node.js.", imageUrl: "https://placehold.co/600x400", link: "https://placehold.co/600x400" }
  ];

  console.log(cards);

//2.1: Initializing container.
const container = document.createElement("div");
container.id = "card-container";
document.body.appendChild(container);

//2.2: Dynamically adding cards to the container.
cards.forEach(card => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = card.imageUrl;
  img.alt = card.title;

  const title = document.createElement("h3");
  title.textContent = card.title;

  const desc = document.createElement("p");
  desc.textContent = card.description;

  const link = document.createElement("a");
  link.href = card.link;
  link.textContent = "Learn More";
  link.target = "_blank";

  cardDiv.appendChild(img);
  cardDiv.appendChild(title);
  cardDiv.appendChild(desc);
  cardDiv.appendChild(link);

  // 3: Event listener for a card, highlighting it.
  cardDiv.addEventListener("click", () => {
    cardDiv.style.backgroundColor = "#d3d3d3"; 
    console.log(`Clicked on ${card.title}`);
  });

  container.appendChild(cardDiv);
});

//4: Array methods.
const totalTitleChars = cards.reduce((total, card) => total + card.title.length, 0);
console.log("Total characters in all titles:", totalTitleChars);

const sortedCards = [...cards].sort((a, b) => a.title.localeCompare(b.title));
console.log("Cards sorted alphabetically:", sortedCards);

const jsCards = cards.filter(card => card.description.toLowerCase().includes("javascript"));
console.log("Cards mentioning JavaScript:", jsCards);

const cardTitles = cards.map(card => card.title);
console.log("All card titles:", cardTitles);
