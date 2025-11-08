let userscore = 0;
let compscore = 0;
const images = document.querySelectorAll(".img img");
let textshow = document.querySelector(".move p");
let col = document.querySelector(".move");

// gamechoice
const gamechoice =() =>{
  const options = ["rock" , "paper" , "scissors"];
  const randinx = Math.floor(Math.random() * 3);
  return options[randinx];
}




images.forEach((img) => {


  // animate
  img.addEventListener(("mouseenter") , () => {
    img.style.outline = "4px solid black";
  });

  img.addEventListener(("mouseleave") , () => {
    img.style.outline = "none";
  });





  // clicktoplay
img.addEventListener(("click") , () => {
  const userchoice = img.alt;
  const compchoice = gamechoice();

  console.log("you choose : " ,userchoice );
  console.log("Computer chose:", compchoice);

  // tie
  if(userchoice === compchoice) { 
    textshow.innerText = "It's a tie!";
     col.style.backgroundColor = "rgb(32, 35, 52)"
  }


  // userwin
   else if(
    (userchoice === "rock" && compchoice === "scissors") ||
      (userchoice === "paper" && compchoice === "rock") ||
      (userchoice === "scissors" && compchoice === "paper")
  ) {
    userscore++;
     textshow.innerText = `You chose ${userchoice} , Computer chose ${compchoice} — You crushed it!`;
      col.style.backgroundColor = "#008000"
    console.log(userscore);
  }


  // compwin
   else {
     compscore++;
      textshow.innerText = `You chose ${userchoice} , Computer chose ${compchoice} — Oh no! Computer takes the crown!`;
      col.style.backgroundColor = "#cc0000"
     console.log(compscore);
  }


  const scoreboards = document.querySelectorAll(".scores p");

scoreboards[0].textContent = userscore;
scoreboards[2].textContent = compscore;


});

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
    // Reset scores
    userscore = 0;
    compscore = 0;

    // Update scoreboard
    const scoreboards = document.querySelectorAll(".scores p");
    scoreboards[0].textContent = userscore;
    scoreboards[2].textContent = compscore;

    // Reset text and background color
    textshow.innerText = "Pick your move";
    col.style.backgroundColor = "rgb(32, 35, 52)";
});



});