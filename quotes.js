const quotes = [
  {
    quotation:
      "“If you don't make mistakes, you're not working on hard enough problems. And that's a mistake.”",
    author: "― Frank Wilczek"
  },
  {
    quotation:
      "“It does not matter how slowly you go as long as you do not stop.”",
    author: "-Confucius"
  },
  {
    quotation: "Only I can change my life. No one can do it for me.”",
    author: "-Carol Burnett"
  }
];
//명언들 배열안에 넣어주기(배열 하나 하나는 명언과 이름이 든 객체 형태로)

function getRandomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = random.quotation;
  author.innerText = random.author;
  return random;
}
//랜덤 으로 문장을 뽑는 함수 만들고, 뽑아진 문장을 paintQuote()함수를 통해 나타내기
function init() {
  getRandomQuote();
}
//최종 함수 실행!
init();
