window.onload = function () {
    let canvas = document.getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");

    let x = window.innerWidth / 2, y = 0;
    let effects = [];
    function render() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 640, 480);

        let drawEffect = _ => {

        }

        let drawPlayer = c => {
            ctx.strokeStyle = c;
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.rect(x, y, 50, 50);
            ctx.stroke();
        }

        drawPlayer("yellow");
    }

    let v = 0, leftPressed = false, rightPressed = false;
    let hasJumped = false;
    
    function animate() {
        v += 0.15;
        y += v;
        if (y >= 400) {
            y = 400;
            v = 0;
            hasJumped = false;
        }

        if (rightPressed) {
            x += 2;
            effects.push({x: x + 30, y: y + 50, angle: R});
        }
        if (leftPressed) {
            x -= 2;
            effects.push([x + 10, y + 50]);
        }

        render();
        console.log(x, y);
        requestAnimationFrame(animate);
    }
    animate();

    document.onkeydown = function(e) {
        console.log("Down", e.keyCode);
        if (e.keyCode == 39)
            rightPressed = true;
        if (e.keyCode == 37)
            leftPressed = true;
        if (e.keyCode == 38) {
            if (!hasJumped)
                v = -5.0;

            hasJumped = true;
        }
    }
    document.onkeyup = function(e) {
        console.log("Up", e.keyCode);
        if (e.keyCode == 39)
            rightPressed = false;
        if (e.keyCode == 37)
            leftPressed = false;
    }
}