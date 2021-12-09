const first_player = "X";
let boxes = document.querySelectorAll(".box");

function boxClick(event) {
  box = event.target;

  let next_player = next(boxes, first_player);
  if (next_player == "O") {
    box.innerHTML = "O";
  } else if (next_player == "X") {
    box.innerHTML = "X";
  }

  console.log(box);
}

function next(boxes, first_player) {
  count_O = 0;
  count_X = 0;
  boxes.forEach((box) => {
    switch (box.innerHTML) {
      case "X":
        count_X++;
        break;
      case "O":
        count_O++;
        break;
      default:
        break;
    }
  });
  if (count_O > count_X) {
    return "X";
  } else if (count_O < count_X) {
    return "O";
  } else if (count_O == count_X) {
    return first_player;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", boxClick);
});
