<?php
$a = $_POST['name'];
$b = $_POST['email'];
$c = $_POST['personal_site'];
$d = $_POST['message'];
$e = $_POST['phone'];
$newsletter = $_POST['newsletter'];
$amount = $_POST['donation_amount'];
$currency = $_POST['donation_currency'];
$content =
'Spam-free Form Payment and Message Received -
Name: ' . $a . '
Email: ' . $b . '
Website: ' . $c . '
Phone: ' . $e . '
Message: ' . $d . '
Newsletter: ' . $newsletter . '
Donation Amount: ' . $amount . '
Donation Currency: ' . $currency;
mail( 'destination_email@your_domain.com', 'Spam-free Form Payment and Message Received - ' . $a . ', ' . $b . ', ' . $c, $content );
header('Location: https://your_redirect_site.com/');
exit('Redirecting you to https://your_redirect_site.com/');
?>
