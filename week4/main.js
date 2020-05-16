const cells = document.getElementById("tic-tac-toe");
cells.addEventListener("click", game);

//Nanci - game
let counter = 0;

function game(event) {
    const target = event.target;
    counter++;
    if (target.innerHTML == "") {
        switch (counter % 2) {
            case 0:
                target.innerHTML = "O";
                target.style.color = "red";
                break;
            case 1:
                target.innerHTML = "X";
                target.style.color = "green";
                break;
        }
    }
    for (i = 0; i < 3; i++) {
        if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 3).innerHTML == 'X') && (document.getElementById(i + 6).innerHTML == 'X')) {
            var winner = "X Wins";
            document.getElementById("winner").innerText = winner;
        }
    }

    for (i = 0; i < 3; i++) {
        if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 3).innerHTML == 'O') && (document.getElementById(i + 6).innerHTML == 'O')) {
            var winner = "O Wins";
            document.getElementById("winner").innerText = winner;
        }
    }

    for (i = 0; i < 9; i += 3) {
        if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 1).innerHTML == 'X') && (document.getElementById(i + 2).innerHTML == 'X')) {
            var winner = "X Wins";
            document.getElementById("winner").innerText = winner;
        }
    }

    for (i = 0; i < 9; i += 3) {
        if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 1).innerHTML == 'O') && (document.getElementById(i + 2).innerHTML == 'O')) {
            var winner = "O Wins";
            document.getElementById("winner").innerText = winner;
        }
    }

    if ((document.getElementById(0).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(8).innerHTML == 'X')) {
        var winner = "X Wins";
        document.getElementById("winner").innerText = winner;
    }

    if ((document.getElementById(2).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(6).innerHTML == 'X')) {
        var winner = "X Wins";
        document.getElementById("winner").innerText = winner;
    }

    if ((document.getElementById(0).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(8).innerHTML == 'O')) {
        var winner = "O Wins";
        document.getElementById("winner").innerText = winner;
    }

    if ((document.getElementById(2).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(6).innerHTML == 'O')) {
        var winner = "O Wins";
        document.getElementById("winner").innerText = winner;
    }

    /*

      let targetId = target.getAttribute.id;
      let cells = document.querySelectorAll("td");
      switch (targetId) {
        case 0:
          if (target.value == cells[4].value && target.value == cells[8].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[3].value && target.value == cells[6].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[1].value && target.value == cells[2].value) {
            alert("Game Over! You Won!")
          }
          break;
        case 1:
          if (target.value == cells[4].value && target.value == cells[7].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[0].value && target.value == cells[2].value) {
            alert("Game Over! You Won!")
          }
          break;
        case 2:
          if (target.value == cells[5].value && target.value == cells[8].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[4].value && target.value == cells[6].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[0].value && target.value == cells[1].value) {
            alert("Game Over! You Won!")
          }
          break;
        case 3:
          if (target.value == cells[0].value && target.value == cells[6].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[4].value && target.value == cells[5].value) {
            alert("Game Over! You Won!")
          }
          break;
        case 4:
          if (target.value == cells[0].value && target.value == cells[8].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[3].value && target.value == cells[5].value) {
            alert("Game Over! You Won!")
          }
          break;
        case 5:if (target.value == cells[3].value && target.value == cells[4].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[2].value && target.value == cells[8].value) {
            alert("Game Over! You Won!")

          break;
        case 6:
          if (target.value == cells[7].value && target.value == cells[8].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[0].value && target.value == cells[3].value) {
            alert("Game Over! You Won!")
          } else if (target.value == cells[2].value && target.value == cells[4].value) {
            alert("Game Over! You Won!")
          }
          break;
      }
    */

}
/*
		2, 4, 6
		0, 4, 8
		0, 3, 6
		0, 1, 2
		1, 4, 7
		2, 5, 8
		3, 4, 5
		6, 7, 8
		*/
//Naomi - Reset
function reset() {
    counter = 0;
    for (let i = 0; i < 9; i++) {
        var cleared = "";
        var square = document.getElementById(i);
        var winner = document.getElementById('winner');
        square.innerText = cleared;
        winner.innerText = cleared;
    }
}
