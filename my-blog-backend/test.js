
let [name, quote] = ['Themistocles', 'He who commands the sea has command of everything.'];
console.log(`${name}: "${quote}"`);

const { username, text, buildQuote } = { username: 'Julian the Apostate', text: 'You have won, O Galilean.', buildQuote: (a,b) => { return `It was ${a} who said, "${b}"`;} };
console.log(`${username}: "${text}"`);
console.log(buildQuote(username, text));