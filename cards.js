// 1: Creating objects.
const cards = [
    { id: 1, title: "Learn JavaScript", description: "Understand the basics of JavaScript.", imageUrl: "images/js-course.png", link: "https://placehold.co/600x400" },
    { id: 2, title: "Master CSS", description: "Advanced layouts and animations.", imageUrl: "images/css-course.png", link: "https://placehold.co/600x400" },
    { id: 3, title: "HTML Essentials", description: "Build strong foundations with HTML.", imageUrl: "images/html-course.png", link: "https://placehold.co/600x400" },
    { id: 4, title: "React Basics", description: "Learn React.js for building UIs.", imageUrl: "images/react-course.png", link: "https://placehold.co/600x400" },
    { id: 5, title: "Backend Development", description: "Server-side coding with Node.js.", imageUrl: "images/node-course.png", link: "https://placehold.co/600x400" }
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

  // 3: Event listener for a card,
  cardDiv.addEventListener("click", () => {
    cardDiv.style.backgroundColor = "#d3d3d3"; // Highlight card
    console.log(`Clicked on ${card.title}`);
  });

  // Append card to container
  container.appendChild(cardDiv);
});