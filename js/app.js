$(document).foundation();

// Smooth Scroll
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')

.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

//contact buttons
$(function($) {

  // Main function
  $.contactButtons = function(options) {

    // Define the defaults
    var defaults = {
      effect: '', // slide-on-scroll
      buttons: {
        'facebook': { class: 'facebook', use: false, icon: 'facebook', link: '', title: 'Share on Facebook' },
        'google': { class: 'gplus', use: false, icon: 'google-plus', link: '', title: 'Share on Google Plus' },
        'linkedin': { class: 'linkedin', use: false, icon: 'linkedin', link: '', title: 'Share on LinkedIn' },
        'twitter': { class: 'twitter', use: false, icon: 'twitter', link: '', title: 'Share on Twitter' },
        'pinterest': { class: 'pinterest', use: false, icon: 'pinterest', link: '', title: 'Share on Pinterest' },
        'phone': { class: 'phone', use: false, icon: 'phone', link: '', title: 'Call us', type: 'phone' },
        'email': { class: 'email', use: false, icon: 'envelope', link: '', title: 'Send us an email', type: 'email' }
      }
    };

    // Merge defaults and options
    var s,
    settings = options;
    for (s in defaults.buttons) {
      if (options.buttons[s]) {
        settings.buttons[s] = $.extend(defaults.buttons[s], options.buttons[s]);
      }
    }

    // Define the container for the buttons
    var oContainer = $("#contact-buttons-bar");

    // Check if the container is already on the page
    if (oContainer.length === 0) {

      // Insert the container element
      $('body').append('<div id="contact-buttons-bar">');

      // Get the just inserted element
      oContainer = $("#contact-buttons-bar");

      // Add class for effect
      oContainer.addClass(settings.effect);

      // Add show/hide button
      var sShowHideBtn = '<button class="contact-button-link show-hide-contact-bar"><span class="fa fa-angle-left"></span></button>';
      oContainer.append(sShowHideBtn);

      var i;
      for (i in settings.buttons) {
        var bs = settings.buttons[i],
        sLink = bs.link,
        active = bs.use;

        // Check if element is active
        if (active) {

          // Change the link for phone and email when needed
          if (bs.type === 'phone') {
            sLink = 'tel:' + bs.link;
          } else if (bs.type === 'email') {
            sLink = 'mailto:' + bs.link;
          }

          // Insert the links
          var sIcon = '<span class="fa fa-' + bs.icon + '"></span>',
          sButton = '<a href="' + sLink +
          '" class="contact-button-link cb-ancor ' + bs.class + '" ' +
          (bs.title ? 'title="' + bs.title + '"' : '') +
          (bs.extras ? bs.extras : '') +
          '>' + sIcon + '</a>';
          oContainer.append(sButton);
        }
      }

      // Make the buttons visible
      setTimeout(function() {
        oContainer.animate({ left: 0 });
      }, 200);

      // Show/hide buttons
      $('body').on('click', '.show-hide-contact-bar', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
        oContainer.find('.cb-ancor').toggleClass('cb-hidden');
      });
    }
  };

  // Slide on scroll effect
  $(function() {

    // Define element to slide
    var el = $("#contact-buttons-bar.slide-on-scroll");

    // Load top default
    el.attr('data-top', el.css('top'));

    // Listen to scroll
    $(window).scroll(function() {
      clearTimeout($.data(this, "scrollCheck"));
      $.data(this, "scrollCheck", setTimeout(function() {
        var nTop = $(window).scrollTop() + parseInt(el.attr('data-top'));
        el.animate({
          top: nTop
        }, 500);
      }, 250));
    });
  });

}(jQuery));

// Initialize Share-Buttons
$.contactButtons({
  effect: 'slide-on-scroll',
  buttons: {
    'facebook': { class: 'facebook', use: true, link: 'https://www.facebook.com/sharer/sharer.php?u=spam-free-contact-form-generator', extras: 'target="_blank"' },
    'twitter': { class: 'twitter', use: true, link: 'https://twitter.com/home?status=spam-free-contact-form-generator' },
    'google': { class: 'gplus', use: true, link: 'https://plus.google.com/share?url=https://github.com/Iowercase-I/spam-free-contact-form-generator' },
    'linkedin': { class: 'linkedin', use: true, link: 'https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Iowercase-I/spam-free-contact-form-generator&title=spam-free-contact-form-generator' }
  }
});

// Google Fonts
WebFontConfig = {
  google: { families: ['Lato:400,700,300:latin'] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

//  copy to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("#anchor").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

//fixedsocial buttons
$("#share").jsSocials({
  shares: ["twitter", "facebook", "linkedin"]
});
$("#share1").jsSocials({
  shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon"]
});
$("#share2").jsSocials({
  shares: ["twitter", "facebook", "linkedin"]
});

//privacy policy etc.
$(document).ready(
  function(){
    $("#lnk1").click(function () {
      $("#privacy_policy_content").show("slow");
    });

    $("#lnk4").click(function () {
      $("#license_content").show("slow");
    });

    // hide donation and reset button to .001
    //donate
    $('#donation_checkbox').change(function(){
      if (this.checked) {
        $("#donate").show();
      }
      else {
        $("#donate").hide();
        $('#donation_currency').val('USD');
        $('#donation_amount').val('.001');
        const div1 = document.getElementById('money_button_contact');
        moneyButton.render(div1, {
          amount: $('#donation_amount').val(),
          to: '1Aqs2y6Skt1KXDaw1k8qbSiuV6Cktbi4Kq',
          currency: $('#donation_currency').val(),
          label: 'Submit',
          clientIdentifier: '',
          buttonId: '',
          type: 'tip',
          onPayment: myCustomCallback
        });
      }
    });

    // preview hide donation and reset button to .001
    //donate
    $('#donate_option').change(function(){
      if (this.checked) {
        $('#donate_preview').show();
      }
      else {
        $("#donate_preview").hide();
        $("#donate_payment").hide();
        $('#donation_preview_checkbox_option').prop('checked', false);
        $('#donation_currency_preview').val('USD');
        $('#donation_amount_preview').val('.001');
        const div = document.getElementById('money_button_preview');
        moneyButton.render(div, {
          amount: $('#amount').val(),
          to: $('#user_number').val(),
          currency: $('#selected_currency').val(),
          label: $('#button_label').val(),
          clientIdentifier: $('#client_id').val(),
          buttonId: $('#button_id').val(),
          type: $('#type').val(),
          onPayment: submit_preview
        });
      }
    });
    $('#donation_preview_checkbox_option').change(function(){
      if (this.checked) {
        $('#donate_payment').show();
        const div = document.getElementById('money_button_preview');
        moneyButton.render(div, {
          amount: $('#donation_amount_preview').val(),
          to: $('#user_number').val(),
          currency: $('#donation_currency_preview').val(),
          label: $('#button_label').val(),
          clientIdentifier: $('#client_id').val(),
          buttonId: $('#button_id').val(),
          type: $('#type').val(),
          onPayment: submit_preview
        });
      }
      else {
        $("#donate_payment").hide();
        $('#donation_currency_preview').val('USD');
        $('#donation_amount_preview').val('.001');
        const div = document.getElementById('money_button_preview');
        moneyButton.render(div, {
          amount: $('#amount').val(),
          to: $('#user_number').val(),
          currency: $('#selected_currency').val(),
          label: $('#button_label').val(),
          clientIdentifier: $('#client_id').val(),
          buttonId: $('#button_id').val(),
          type: $('#type').val(),
          onPayment: submit_preview
        });
      }
    });
    $('#donation_currency_preview').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#donation_amount_preview').val(),
        to: $('#user_number').val(),
        currency: $('#donation_currency_preview').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });
    });

    $('#donation_amount_preview').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#donation_amount_preview').val(),
        to: $('#user_number').val(),
        currency: $('#donation_currency_preview').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });
    });


    ///contact button
    const div1 = document.getElementById('money_button_contact');
    moneyButton.render(div1, {
      amount: $('#donation_amount').val(),
      to: '1Aqs2y6Skt1KXDaw1k8qbSiuV6Cktbi4Kq',
      currency: $('#donation_currency').val(),
      label: 'Submit',
      clientIdentifier: '',
      buttonId: '',
      type: 'tip',
      onPayment: myCustomCallback
    });

    $('#donation_currency').change(function(){
      const div1 = document.getElementById('money_button_contact');
      moneyButton.render(div1, {
        amount: $('#donation_amount').val(),
        to: '1Aqs2y6Skt1KXDaw1k8qbSiuV6Cktbi4Kq',
        currency: $('#donation_currency').val(),
        label: 'Submit',
        clientIdentifier: '',
        buttonId: '',
        type: 'tip',
        onPayment: myCustomCallback
      });
    });

    $('#donation_amount').change(function(){
      const div1 = document.getElementById('money_button_contact');
      moneyButton.render(div1, {
        amount: $('#donation_amount').val(),
        to: '1Aqs2y6Skt1KXDaw1k8qbSiuV6Cktbi4Kq',
        currency: $('#donation_currency').val(),
        label: 'Submit',
        clientIdentifier: '',
        buttonId: '',
        type: 'tip',
        onPayment: myCustomCallback
      });
    });





    //submit forms after payment
    function myCustomCallback (payment) {
      document.getElementById("myForm").submit();
    };
    function submit_preview (payment) {
      document.getElementById("previewForm").submit();
    };


    // Form preview
    // Title change
    $('#title').on('change keyup paste',title_change);
    function title_change(){
      var txt = $('#title').val();
      $("#title_preview").html(txt);
    }


    //newsletter preview
    $('#newsletter_builder').change(function(){
      if (this.checked) {
        $('#newsletter_preview').show();
      }
      else {
        $('#newsletter_preview_checkbox').prop('checked', false);
        $('#newsletter_preview').hide();
      }
    });
    // Render money button form Preview


    const div = document.getElementById('money_button_preview');
    moneyButton.render(div, {
      amount: $('#amount').val(),
      to: $('#user_number').val(),
      currency: $('#selected_currency').val(),
      label: $('#button_label').val(),
      clientIdentifier: $('#client_id').val(),
      buttonId: $('#button_id').val(),
      type: $('#type').val(),
      onPayment: submit_preview
    });


    //change preview button when form fields change

    $('#selected_currency').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });

    });

    $('#amount').change(function(){
      $("#donate_payment").hide();
      $("#donate_preview").hide();
      $('#donate_option').prop('checked', false);
      $('#donation_preview_checkbox_option').prop('checked', false);
      $('#donation_currency_preview').val('USD');
      $('#donation_amount_preview').val('.001');
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });
    });

    $('#user_number').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });

    });

    $('#button_label').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });

    });

    $('#type').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });

    });
    $('#client_id').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });

    });
    $('#button_id').change(function(){
      const div = document.getElementById('money_button_preview');
      moneyButton.render(div, {
        amount: $('#amount').val(),
        to: $('#user_number').val(),
        currency: $('#selected_currency').val(),
        label: $('#button_label').val(),
        clientIdentifier: $('#client_id').val(),
        buttonId: $('#button_id').val(),
        type: $('#type').val(),
        onPayment: submit_preview
      });
    });

    // Render form fields



    $('#name_builder').change(function(){
      if (this.checked) {
        $("#name_preview").html("<label>Name</label><input type='text' name='name' placeholder='Your Name' />");
      }
      else {
        $("#name_preview").html("");
      }
    });


    $('#email_builder').change(function(){
      if (this.checked) {
        $("#email_preview").html("<label>Email</label><input type='text' name='email' placeholder='Your Email' />");
      }
      else {
        $("#email_preview").html("");
      }
    });

    $('#website_builder').change(function(){
      if (this.checked) {
        $("#website_preview").html("<label>Website</label><input type='text' name='website' placeholder='Your Website' />");
      }
      else {
        $("#website_preview").html("");
      }
    });
    $('#phone_builder').change(function(){
      if (this.checked) {
        $("#phone_preview").html("<label>Phone</label><input type='text' name='phone' placeholder='Your Phone' />");
      }
      else {
        $("#phone_preview").html("");
      }
    });
    $('#message_builder').change(function(){
      if (this.checked) {
        $("#message_preview").html("<label>Message</label><textarea name='message' placeholder='Message'></textarea>");
      }
      else {
        $("#message_preview").html("");
      }
    });


  });
