<template>
    <div id="404">
        <div class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">404
        <small>Page non trouvée</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Accueil</router-link>
        </li>
        <li class="breadcrumb-item active">404</li>
      </ol>

      <div class="jumbotron">
        <h1 class="display-1">404</h1>
        <p>La page que vous cherchez est introuvable. Voici des liens utiles pour vous remettre sur les rails.</p>
        <ul>
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>
              <router-link to="/galerie">Galerie</router-link>
          </li>
          <li>
              <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <!-- /.jumbotron -->

    </div>
    </div>
</template>
<style scoped>
  .jumbotron{
    min-height: 478px;
  }
</style>
