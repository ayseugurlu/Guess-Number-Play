//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let hak;
let numberInput = document.getElementById("number-input");
let checkButton = document.getElementById("check");
let warning = document.getElementById("warning");





function oyunBaslasin() {
    const rastgele = Math.ceil(Math.random() * 20);
console.log(rastgele);

hak = 5;

  checkButton.addEventListener("click", () => {
    
    let guess = +numberInput.value;
    console.log(guess);

    if (hak > 0) {
      if (rastgele === guess) {
        warning.textContent = "Tebrikler, doğru tahmin ettiniz.👯‍♂️";
      } else if (rastgele > guess) {
        warning.textContent = "Arttır📈";
        hak--;
        numberInput.value = "";
      } else {
        warning.textContent = "Azalt📉";
        hak--;
      }

      if (hak === 0 && rastgele !== guess) {
        warning.textContent =
          "5 tahmin hakkiniz bitti. Maalesef dogru tahmin edemediniz.😢";
        showQuestion();
      }
    }
  });
}

function showQuestion() {
  const question = document.getElementById("question");
  question.style.display = "block";

  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  yesButton.addEventListener("click", () => {
    location.reload();
  });

  noButton.addEventListener("click", () => {

    const veda = document.getElementById("veda")
    veda.textContent = "Oyun oynadiginiz icin tesekkürler. Iyi günler!";
    veda.style.display="block"
    question.style.display="none"
  });
}


oyunBaslasin();