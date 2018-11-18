<template>
    <div id="contact" class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">Contact</h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Accueil</router-link>
        </li>
        <li class="breadcrumb-item active">Contact</li>
      </ol>

      <!-- Content Row -->
      <div class="row">
        <!-- Map Column -->
        <div class="col-lg-8 mb-4">
          <!-- Embedded Map -->
          <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=petlier%20willy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <!-- Contact Details Column -->
        <div class="col-lg-4 mb-4">
          <h3>Détails de contact</h3>
          <p>
            14 rue du Bois Gasseau
            <br>Samoreau, 77210
            <br>
          </p>
          <p>
            <abbr title="Téléphone">Téléphone</abbr>: <a href="tel:0160716125">01 60 71 61 25</a>
          </p>
          <p>
            <abbr title="Email">Adresse mail</abbr>:
            <a href="mailto:ferronnerie.peltier@free.fr">ferronnerie.peltier@free.fr 
            </a>
          </p>
          <p>
            <abbr title="Horaires">Horaires</abbr>: Lundi - Vendredi: 8h à 12h - 13h à 18h Samedi :  9h à 12h
          </p>
        </div>
      </div>
      <!-- /.row -->

      <!-- Contact Form -->
      <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
      <div class="row">
        <div class="col-lg-8 mb-4">
          <h3>Envoyer un message</h3>
          <!-- 
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group form-group">
              <div class="controls">
                <label>Nom prénom :</label>
                <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                <p class="help-block"></p>
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Numéro de téléphone :</label>
                <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Adresse mail :</label>
                <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Message :</label>
                <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
              </div>
            </div>
            <div class="g-recaptcha" data-sitekey="6LfW0HUUAAAAAD19gxgIflAghLkRDUsZjgUq9737"></div>
            <div id="success"></div>-->
            <!-- For success/fail messages -->
           <!-- <button type="submit" class="btn btn-primary" id="sendMessageButton">Envoyer</button>
          </form> -->
         <a id="foxyform_embed_link_189660" href="https://fr.foxyform.com/">foxyform</a>
        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
</template>

<style scoped>
  a#foxyform_embed_link_189660{
    display: none !important;
  }
</style>

<script type="text/javascript">
export default {
  name: 'contact',

  mounted() {
    var d = document;
    var t = 'script';
    var g = d.createElement(t);
    var s = d.getElementsByTagName(t)[0];
    
    g.src = "http://fr.foxyform.com/js.php?id=189660&sec_hash=7e5b33b50c6&width=350px";
    s.parentNode.insertBefore(g, s);
  }
}
</script>