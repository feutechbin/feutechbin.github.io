let activeSquare = null;

        function spawnSquare(color) {
            const container = document.getElementById("container");

            //if theres an active square, send it back up before making a newone
            if (activeSquare) {
                moveUp(activeSquare);
            }

            const square = document.createElement("div");
            square.style.width = "150px";
            square.style.height = "150px";
            square.style.position = "absolute";
            square.style.top = "-150px";
            square.style.left = "50%";
            square.style.transform = "translateX(-50%)";
            square.style.backgroundColor = color;
            container.appendChild(square);

            activeSquare = square;
            moveDown(square);
        }

        function moveDown(square) {
            let position = -150; //start position above container
            function animate() {
                if (position < 250) {
                    position += 5;
                    square.style.top = position + "px";
                    requestAnimationFrame(animate);
                }
            }
            animate();
        }

        function moveUp(square) {
            let position = 250;
            function animate() {
                if (position > -150) {
                    position -= 5;
                    square.style.top = position + "px";
                    requestAnimationFrame(animate);
                } else {
                    square.remove();
                }
            }
            animate();
        }