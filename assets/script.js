function trendIt(text, separator) {
  let newText = "";
  for (let i in text) {
    newText += text[i];
    newText += separator;
  }
  return newText.substr(0, newText.length - 1).toUpperCase();
}

const newline = document.getElementById("newline");
const output = document.getElementById("output");
const trendit = document.getElementById("trendit");
const copy = document.getElementById("copy");
const tweet = document.getElementById("tweet");

newline.onclick = () => {
  trendit.click();
};

trendit.onclick = () => {
  const input = document.getElementById("input");
  const value = input.value;
  let separator = " ";
  if (newline.checked) {
    separator = "\n";
  }
  output.value = trendIt(value, separator);
};

output.onclick = () => {
  this.select();
};

copy.onclick = () => {
  output.select();
  document.execCommand("copy");
  copy.innerText = "Copiado!";
  copy.style.backgroundColor = "#8aceaa";
  setTimeout(() => {
    copy.style.backgroundColor = "#50d890";
    copy.innerText = "Copiar";
  }, 3000);
};

tweet.onclick = () => {
  const text = encodeURI(output.value);
  location.href = `https://twitter.com/intent/tweet?text=${text}&related=dotenorio&url=`;
};
