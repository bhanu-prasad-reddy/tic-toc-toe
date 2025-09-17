let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".re-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")
let turnO =true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disabledBoxes = ()=>{
    for ( let box of boxes){
            box.disabled = true;
    }
};
const enabledBoxes = ()=>{
    for ( let box of boxes){
            box.disabled = false;
            box.innerText="";
    }
};
const showWinner =(Winner)=>{
    msg.innerText =`congratulation,winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let poss1val = boxes[pattern[0]].innerText;
        let poss2val = boxes[pattern[1]].innerText;
        let poss3val = boxes[pattern[2]].innerText;
    
    if(poss1val !="" && poss2val !="" && poss3val !=""){
        if(poss1val === poss2val && poss2val === poss3val){
            showWinner(poss1val);
        }
    }    
    }
};
const resetGame =()=>{
    turnO =true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);