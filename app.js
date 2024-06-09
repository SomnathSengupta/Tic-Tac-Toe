let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let turn0 = true;

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}

reset = () =>{
    turn0 = true;
    for (let box of boxes) {
        box.innerText = "";
    }
    enableBtn();
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

checkWinner = () => {
    for (let pattern of arr) {
        let pos0Value = boxes[pattern[0]].innerText;
        let pos1Value = boxes[pattern[1]].innerText;
        let pos2Value = boxes[pattern[2]].innerText;

        if (pos0Value != "" && pos1Value != "" && pos2Value != "") {
            if (pos0Value === pos1Value && pos1Value === pos2Value) {
                msg.innerText = `Winner ${pos1Value}`;
                msg.classList.remove("hide");
                disableBtn();
            }
        }
    }
}

resBtn.addEventListener("click", reset);