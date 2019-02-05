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
          <form name="contact" method="POST" action="/success.html" netlify-recaptcha netlify>
            <div class="control-group form-group">
              <div class="controls">
                <label>Nom *</label>
                <input type="text" class="form-control" name="name" required>
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Numéro de téléphone</label>
                <input type="tel" class="form-control" id="phone">
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Adresse mail *</label>
                <input v-model="email" type="email" class="form-control" name="email" required>
                <p class="help-msg" v-if="validateEmail() === false && email.length > 0">
                  <ul>
                    <li>Adresse email invalide</li>
                  </ul>
                  </p>
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Message *</label>
                <textarea v-model="message" rows="10" cols="100" class="form-control" name="message" required maxlength="999" style="resize:none"></textarea>
                <p class="help-msg" v-if="message.length > 0 && message.length < 5">
                  <ul>
                    <li>Le message est trop court</li>
                  </ul>
                </p>
              </div>
            </div>
            <vue-recaptcha class="captcha" sitekey="6LfW0HUUAAAAAD19gxgIflAghLkRDUsZjgUq9737"></vue-recaptcha>

            <!-- For success/fail messages -->
            <button type="submit" class="btn btn-primary" id="sendMessageButton" :disabled="validateEmail() === false || message.length < 5">Envoyer</button>
          </form>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
</template>

<style scoped>
  .help-msg{
    margin-top: 6px;
  }
  .captcha{
    margin-bottom: 8px;
  }
</style>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    VueRecaptcha,
  },

  data: function() {
    return {
      email: '',
      message: '',
    };
  },

  methods:{
    validateEmail:function() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
},
    validateMessage:function(){
      return
    }
  }
}
</script>
