<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link type="text/css" href="style.css" rel="STYLESHEET" />
    <title>La Yarara - Cuadro de honor</title>
  </head>
  <body>
    <?php
    $fileSize = filesize('honor');
    $file = fopen('honor', 'r');
    $honors = json_decode(fread($file, $fileSize));
    fclose($file);
    if (isset($_POST['points']) && isset($_POST['name'])) {
      if (empty($honors)) {
        $honors = array();
        echo 'Nada de nada';
      }
      array_push($honors, array($_POST['points'], $_POST['name']));
      rsort($honors);

      $file = fopen('honor', 'w+');
      fwrite($file, json_encode($honors));
      fclose($file);
    }
    ?>
    <table id="honorRoll">
      <tr>
        <th>Puntos</th>
        <th>Nombre</th>
      </tr>
      <?php foreach ($honors as $honor) {
 ?>
        <tr>
          <td><?php echo $honor[0] ?></td>
          <td><?php echo $honor[1] ?></td>
        </tr>
<?php } ?>
    </table>
    <div id="links"><a href="index.html">Volver</a></div>
  </body>
</html>
