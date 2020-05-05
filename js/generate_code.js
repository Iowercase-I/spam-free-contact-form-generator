/*!
* Contact Form Generator
*/


$(document).ready(function() {
  $('#get_code_button').click(function(event) {
    event.preventDefault();
    //show code
    $('#code').show();
    // clear code
    $('#code_html').html("");
    $('#code_php').html("");
    //top of form
    $("<p>&lt;form id='myForm' action='submit_contact.php' method='post'&gt;</p>").appendTo('#code_html');

    //title, email, redirect url
    var title = $('#title').val();
    var destination_email = $('#your_email').val();
    var redirect_url = $('#redirect_url').val();

    //money button
    var to = $('#user_number').val();
    var amount = $('#amount').val();
    var currency = $('#selected_currency').val();
    var label = $('#button_label').val();
    var client_id = $('#client_id').val();
    var button_id = $('#button_id').val();
    var type = $('#type').val();

    //title
    if( $('#title').val().length > 0){
      $("<p>&lt;h5&gt;&lt;strong&gt;" + title + "&lt;/strong&gt;&lt;/h5&gt;</p>").appendTo('#code_html');
    };

    // grid setup
      $("<p>&lt;div class='grid-x grid-margin-x'&gt;</p>").appendTo('#code_html');

    // if name
    if($("#name_builder").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;&lt;label&gt;Name&lt;/label&gt;&lt;input type='text' name='name' placeholder='Your Name' /&gt;&lt;/div&gt;</p>").appendTo('#code_html');
    };
    // if email
    if($("#email_builder").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;&lt;label&gt;Email&lt;/label&gt;&lt;input type='text' name='email' placeholder='Your Email' /&gt;&lt;/div&gt;</p>").appendTo('#code_html');
    };
    // if website
    if($("#website_builder").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;&lt;label&gt;Web Site&lt;/label&gt;&lt;input type='text' name='personal_site' placeholder='Your Web Site' /&gt;&lt;/div&gt;</p>").appendTo('#code_html');
    };
    // if phone
    if($("#phone_builder").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;&lt;label&gt;Phone&lt;/label&gt;&lt;input type='text' name='phone' placeholder='Your Phone' /&gt;&lt;/div&gt;</p>").appendTo('#code_html');
    };

    // top of checkboxes div
    $("<p>&lt;div class='large-12 cell'&gt;</p>").appendTo('#code_html');
    // if newsletter
    if($("#newsletter_builder").is(':checked')){
      $("<p>&lt;label class='checkboxes'&gt;&lt;input id='newsletter_checkbox' name='newsletter' type='checkbox' &gt;Newsletter Sign-up&lt;/label&gt;</p>").appendTo('#code_html');
    };
    // if donate option
    if($("#donate_option").is(':checked')){
      $("<p>&lt;label class='checkboxes'&gt;&lt;input id='donation_checkbox' type='checkbox' &gt;Add Donation&lt;/label&gt;</p>").appendTo('#code_html');
    };
    // bottom of checkboxes div
          $("<p>&lt;/div&gt;</p>").appendTo('#code_html');

    // if donate
    if($("#donate_option").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;<br />\
&lt;div id='donate'&gt;<br />\
&lt;div class='grid-x grid-margin-x'&gt;<br />\
&lt;div class='large-6 medium-6 small-6 cell'&gt;<br />\
&lt;label class='textboxes'&gt;Amount&lt;/label&gt;<br />\
&lt;input type='text' id='donation_amount' name='donation_amount' /&gt;<br />\
&lt;/div&gt;<br />\
&lt;div class='large-6 medium-6 small-6 cell'&gt;<br />\
&lt;label&gt;Select Currency<br />\
&lt;select id='donation_currency' name='donation_currency'&gt;<br />\
&lt;option selected value='USD'&gt;US Dollar&lt;/option&gt;<br />\
&lt;option value='BSV'&gt;Bitcoin SV&lt;/option&gt;<br />\
&lt;/select&gt;<br />\
&lt;/label&gt;<br />\
&lt;/div&gt;<br />\
&lt;/div&gt;<br />\
&lt;/div&gt;<br />\
&lt;/div&gt;</p>").appendTo('#code_html');
    };



    // if message
    if($("#message_builder").is(':checked')){
      $("<p>&lt;div class='large-12 cell'&gt;&lt;label&gt;Comments&lt;/label&gt;&lt;textarea name='message' placeholder='Comments'&gt;&lt;/textarea&gt;&lt;/div&gt;</p>").appendTo('#code_html');
    };

    // add moneybutton
    $("<p>&lt;div class='large-12 cell'&gt;<br />\
    &lt;div id='money_button_contact' class='money-button'\
    data-to='" + to + "'\
    data-amount='" + amount + "'\
    data-currency='" + currency + "'\
    data-label='" + label + "'\
    data-client-identifier='" + client_id + "'\
    data-button-id='" + button_id + "'\
    data-button-data='{}'\
    data-type='" + type + "'\
    data-on-payment='myCustomCallback'\
    &gt;&lt;/div&gt;&lt;/div&gt;</p>").appendTo('#code_html');

    // grid setup close
      $("<p>&lt;/div&gt;</p>").appendTo('#code_html');

    // end form
    $("<p>&lt;/form&gt;</p>").appendTo('#code_html');

    // generate.php

    $("<p>&lt;?php<br />\
$a = $_POST['name'];<br />\
$b = $_POST['email'];<br />\
$c = $_POST['personal_site'];<br />\
$d = $_POST['message'];<br />\
$e = $_POST['phone'];<br />\
$newsletter = $_POST['newsletter'];<br />\
$amount = $_POST['donation_amount'];<br />\
$currency = $_POST['donation_currency'];<br />\
$content =<br />\
'" + title + " Payment and Message Received -<br />\
Name: ' . $a . '<br />\
Email: ' . $b . '<br />\
Website: ' . $c . '<br />\
Phone: ' . $e . '<br />\
Message: ' . $d . '<br />\
Newsletter: ' . $newsletter . '<br />\
Donation Amount: ' . $amount . '<br />\
Donation Currency: ' . $currency;<br />\
mail( '" + destination_email + "', 'Spam-free Form Payment and Message Received - ' . $a . ', ' . $b . ', ' . $c, $content );<br />\
header('Location: " + redirect_url + "');<br />\
exit('Redirecting you to " + redirect_url + "');<br />\
?&gt;<br />\
</p>").appendTo('#code_php');
  });
});
