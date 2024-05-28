let turnO=true;
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rest");
const checkPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let endGame=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let displayWinner=(p1)=>{
    let display=document.querySelector("h2");
    display.innerText=`Congratulations! Winner is ${p1}`;
    //console.log("hello");
    endGame();
    
}
const detect=()=>{
    for(let pattern of checkPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
    
    if(p1!="" && p2!=""&& p3!=""){
        if(p1===p2 && p2==p3){
            //console.log("he");
            displayWinner(p1);
        }
    }
}
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        //console.log("hy");
        detect();
    })
    
});

    boxes.forEach((box)=>{
        reset.addEventListener("click",()=>{
            box.innerText="";
            box.disabled = false;
            turnO=true;
        })
    })


//pattern check
