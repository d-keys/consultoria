<?php
if(isset($_POST['email'])) {
    $email_para = "email@domínio.com";
    $email_assunto = "Consultoria - Obrigado por se registrar!";
    $nome = $_POST['nome']; // required
    $email_de = $_POST['email']; // required
    $telefone = $_POST['telefone']; // not required
    
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
    
    $email_mensagem = "Detalhes do formulário abaixo.\n\n";
    $email_mensagem .= "Nome: ".clean_string($nome)."\n";
    $email_mensagem .= "Email: ".clean_string($email_de)."\n";
    $email_mensagem .= "Telefone: ".clean_string($telefone)."\n";
    
    // create email headers
    $headers = 'De: '.$email_de."\r\n".
        'Responder para: '.$email_de."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($email_para, $email_assunto, $email_mensagem, $headers);
    ?>
  <!-- include your own success html here -->

  <div class="feedback">Agradecemos o seu contato. Assim que possível responderemos.</div>
  <?php
}
?>