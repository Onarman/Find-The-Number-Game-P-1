window.onload = () =>{
    const guessNumber = document.querySelector("span");
    const inputArea = document.getElementsByClassName("input")[0];
    const checkButton = document.querySelector(".submit");
    const attempNumber = document.querySelector(".attempt");
    const resultGame = document.querySelector(".result");
    const restart = document.querySelector(".restart");
   
   
    let minNum = 1;
    let maxNum = 100;
    let attempt = 5;

    const randomNumber = Math.floor(Math.random()*100+1);
    // console.log(randomNumber);

    
    
    checkButton.addEventListener("click",() => {

        
        

         if (attempt == 0){
            resultGame.innerHTML= "Game Over! Dont give up.";
            checkButton.disabled=true;
            inputArea.disabled=true;

        }else if(+ inputArea.value == randomNumber){
            resultGame.innerHTML = "Congratulations"
            checkButton.disabled=true;
            inputArea.disabled=true;

        }else if(+ inputArea.value <= 0 || + inputArea.value > 100 || + inputArea.value == ""  ){
            setTimeout(function(){
                alert("ENTER A VALID NUMBER");
            },500);
            
        
        }else if(+ inputArea.value > randomNumber){
            attempt--;
            attempNumber.innerHTML = `Total balls : ${attempt}`;
            maxNum = + inputArea.value;
            guessNumber.innerHTML = `(${minNum} and ${maxNum})`;

        }else if(+inputArea.value < randomNumber ){
            attempt--;
            attempNumber.innerHTML =  `Total balls : ${attempt}`;
            minNum = + inputArea.value;
            guessNumber.innerHTML = `(${minNum} and ${maxNum})`;
            
        }
  
    })

    

    restart.addEventListener("click", () => {
        window.location.reload(false);

    });
    

}
