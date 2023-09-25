const api_url = "https://type.fit/api/quotes";

async function getQuote(api) {
  const response = await fetch(api);
  const data = await response.json();

  console.log(data);

  //   console.log(data.length);
  console.log(Math.ceil(Math.random() * data.length) - 1);

  document.getElementById("quote").innerHTML =
    data[Math.ceil(Math.random() * data.length) - 1].text;

  document.getElementById("author").innerHTML =
    data[Math.ceil(Math.random() * data.length)].author;
}

// getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      document.getElementById("quote") +
      "----by" +
      document.getElementById(author),
    "tweet window",
    "width:600, height:300"
  );
}
