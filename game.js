        canvasWidth = 800;
        canvasHeight = 480;
        
        x = canvasWidth/2;
        y = canvasHeight/2;

        w_key = 87;
        a_key = 65
        s_key = 83;
        d_key = 68;

        var hue;

        velocityX;
        velocityY;

        var canvas;

        function setup() {
            canvas = createCanvas(canvasWidth, canvasHeight);
            g = createGraphics(canvasWidth, canvasHeight)

            colorMode(HSB, 100);
            g.colorMode(HSB, 100);
            noSmooth();

            background(88);
            hue = 0;

            square = true;
            speed = 2;
        }

        function draw()
        {
            console.log(speed);

            hue += 1;

            if (hue > 100) hue = 0;

            g.fill(color(hue, 100, 100));
            g.noStroke()

            width = 40;
            height = 40;

            g.rect(x, y, width, square ? height : 1);
        
            

            if (keyIsDown(w_key))
            {
                t = y;
                while (y > t - speed)
                {
                    y -= 1;
                    g.rect(x, y, width, square ? height : 1);
                }
            }
            if (keyIsDown(s_key))
            {
                t = y;
                while (y < t + speed)
                {
                    y += 1;
                    g.rect(x, y, width, square ? height : 1);
                }
            }
            if (keyIsDown(a_key))
            {
                t = x;
                while (x > t - speed)
                {
                    x -= 1;
                    g.rect(x, y, width, square ? height : 1);
                }
            }
            if (keyIsDown(d_key))
            {
                t = x;
                while (x < t + speed)
                {
                    x += 1;
                    g.rect(x, y, width, square ? height : 1);
                }
            }

            x = x > canvasWidth ? 0 - width : x < 0 - width ? canvasWidth : x;
            y = y > canvasHeight ? 0 - height : y < 0 - height ? canvasHeight : y;

            if (keyIsDown(82))
            {
                reset();
            }

            image(g, 0, 0, canvasWidth, canvasHeight);
        }

        function reset()
        {
            g.background(88);
        }

        function save()
        {
            saveCanvas();
        }