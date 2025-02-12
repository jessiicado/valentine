//if user clicks no,
// - change image, text, and grow the yes button

document.addEventListener("DOMContentLoaded", function () {
  const answer_yes = document.getElementById("yes");
  const answer_no = document.getElementById("no");
  const gifImage = document.getElementById("cat-gifs");
  const message = document.getElementById("question");

  const gifList = [
    "cat-1.gif",
    "cat-2.gif",
    "cat-3.gif",
    "cat-4.gif",
    "cat-5.gif",
  ];
  const msgList = [
    "Are you sure?",
    "ARE YOU REALLY SURE?!?",
    "I thought we had something special...",
    "PLEASE POOKIE!!",
    "PWEEAAASSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
  ];

  let gifIndex = 0;
  let noClickCount = 0;
  let msgIndex = 0;

  function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    const numberOfHearts = 20; // Adjust this number to create more or fewer hearts

    // Generate random heart positions and add them to the container
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // Set random position and size for each heart
      heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      heart.style.top = `${Math.random() * 100}vh`; // Random vertical position
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Randomize the float animation duration

      heartsContainer.appendChild(heart);
    }
    setTimeout(() => {
      hearts.remove();
    }, 200); //removes hearts after animation
  }

  answer_no.addEventListener("click", () => {
    if (gifIndex < gifList.length - 1) {
      gifIndex++;
      gifImage.src = gifList[gifIndex]; // Use gifList array

      noClickCount++;
      answer_yes.style.transform = `scale(${
        1 + noClickCount * 0.4
      }) translate(${noClickCount * -10}px, ${noClickCount * 10}px)`; // Scale and move

      msgIndex++;
      message.textContent = msgList[msgIndex]; // Use gifList array
    } else {
      answer_no.disabled = true;
    }
  });

  answer_yes.addEventListener("click", () => {
    message.textContent = "YAYAYAYAY!!!!"; //changes text
    gifImage.src = "happy-cat.gif";
    answer_no.disabled = true;
    answer_yes.disabled = true;
    createHearts();
  });
});
