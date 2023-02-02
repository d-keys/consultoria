<?php
if (isset($_POST['email'])) {
    $email_para = "email";
    $email_assunto = "Dantas";
    $nome = $_POST['nome']; // required
    $email_de = $_POST['email']; // required

    function clean_string($string)
    {
        $bad = array(
            "content-type",
            "bcc:",
            "to:",
            "cc:",
            "href"
        );
        return str_replace($bad, "", $string);
    }
    $email_message = "Form details below.\n\n";
    $email_message .= "Name: " . clean_string($nome) . "\n";
    $email_message .= "Email: " . clean_string($email_de) . "\n";

    // email
    $headers = 'From: ' . $email_de . "\r\n" . 'Reply-To: ' . $email_de . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    mail($email_para, $email_assunto, $email_message, $headers);
    ?>

<div class="feedback">Obrigado por se registrar. Entraremos em contato o
	mais cedo possível.</div>
<?php
}
?>