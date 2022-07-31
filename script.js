const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");
const refreshBtn = document.querySelector(".fa-rotate");

const facts = [
  "It is impossible for most people to lick their own elbow. (try it!)",
  "A crocodile cannot stick its tongue out.",
  "A shrimp's heart is in its head.",
  "It is physically impossible for pigs to look up into the sky.",
  "The \"sixth sick sheik's sixth sheep's sick\" is believed to be the toughest tongue twister in the English language.",
  "If you sneeze too hard, you could fracture a rib.",
  "Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.",
  "In the course of an average lifetime, while sleeping you might eat around 70 assorted insects and 10 spiders, or more.",
  "Some lipsticks contain fish scales.",
  "Cat urine glows under a black-light.",
  "Like fingerprints, everyone's tongue print is different.",
  "Rubber bands last longer when refrigerated.",
  "There are 293 ways to make change for a dollar.",
];

const factNumber = Math.floor(Math.random() * facts.length);
const date = new Date();

const refresh = () => {
	const factNumber = Math.floor(Math.random() * facts.length);
	funFact.textContent = facts[factNumber]
}

currentDay.textContent = date.toLocaleString("en", { weekday: "long" });
funFact.textContent = facts[factNumber];
refreshBtn.addEventListener("click", refresh)