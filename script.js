const quotes = [
  "Be kind whenever possible. It is always possible. – Dalai Lama",
  "No act of kindness, no matter how small, is ever wasted. – Aesop",
  "Kindness is the language which the deaf can hear and the blind can see. – Mark Twain",
  "Spread love everywhere you go. – Mother Teresa",
  "Act with kindness, but do not expect gratitude. – Confucius",
  "Wherever there is a human being, there is an opportunity for kindness. – Seneca"
];

const links = [
  { name: "Charity: Water", url: "https://www.charitywater.org" },
  { name: "GiveWell", url: "https://www.givewell.org" },
  { name: "GlobalGiving", url: "https://www.globalgiving.org" },
  { name: "The Life You Can Save", url: "https://www.thelifeyoucansave.org" },
  { name: "Doctors Without Borders", url: "https://www.doctorswithoutborders.org" }
];

const quoteBox = document.getElementById('quote');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteBox.textContent = randomQuote;

const donationBox = document.getElementById('donation-links');
const shuffledLinks = links.sort(() => 0.5 - Math.random()).slice(0, 2);
shuffledLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = "_blank";
  a.textContent = `Donate to ${link.name}`;
  donationBox.appendChild(a);
});
