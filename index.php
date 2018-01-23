<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sadistic</title>
  </head>
  <body>
    <h1>Test message</h1>
    <canvas id="snake" width="400" height="400">

    </canvas>
    <script type="text/javascript">
      window.onload=function() {
        canva=document.getElementById('snake');
        ctx=canva.getContext('2d');
        document.addEventListener('keydown', keyPush);
        setInterval(game, 1000/15);
      }
      xv=yv=0
      function game() {

      }
      function keyPush() {

      }
    </script>
  </body>
</html>
