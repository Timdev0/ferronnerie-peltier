<template>
  <div class="home">
    <div id="header">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active" style="background-image: url('/assets/02.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <p class="main-slide">Vérandas</p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('/assets/03.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <p class="main-slide">Portes</p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('/assets/04.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <p class="main-slide">Portails</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
      </div>
    </div>

    <div class="container first-container">

      <div class="row marg-top-row-2">
        <div class="col-lg-7">
          <h1 class="content">Ferronnerie d'Art - Serrurerie - Metallerie | Willy Peltier</h1>
          <p>Créée en 1982, notre ferronnerie familiale vous propose des créations sur mesure : portails, verrières, vérandas, escaliers, rampes débillardées, portes d'entrée, serrurerie,...</p>
        </div>
        <div class="col-lg-5 fire-art">
          <h4>Le feu et le fer au service de l'art</h4>
          <img src="/assets/peltier.jpg" alt="logo-ferronnerie-peltier"  style="height: 152px; width: auto;" title="logo-ferronnerie-peltier">
        </div>
      </div>

      <h2>Nos réalisations</h2>

      <div class="row marg-top-row-1">
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/07-thumb.jpg" full="/assets/07.jpg" altname="portes-portails" titlename="portes-portails"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Portes - Portails
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/16-thumb.jpg" full="/assets/16.jpg" altname="Vérandas" titlename="Vérandas"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Vérandas
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/06-thumb.jpg" full="/assets/06.jpg" altname="Rampes" titlename="Rampes"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Rampes
              </h3>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/05-thumb.jpg" full="/assets/05.jpg" altname="Mains-courantes" titlename="Mains-Courantes"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Mains courantes
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/09-thumb.jpg" full="/assets/09.jpg" altname="Décorations" titlename="Décorations"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Décorations
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
          <image-dialog thumb="/assets/08-thumb.jpg" full="/assets/08.jpeg" altname="Serrurerie" titlename="Serrurerie"></image-dialog>
            <div class="card-body">
              <h3 class="card-title">
                Serrurerie
              </h3>
            </div>
          </div>
        </div>
        <p class="see-more">Pour voir plus de nos créations : <router-link class="btn btn-primary" to="/galerie">Accèdez à la Galerie</router-link></p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",

  mounted() {
    $(".carousel").carousel();
  }
};
</script>

<script>
import ImageDialog from '../components/ImageDialog.vue';

export default {
    components: { ImageDialog },
}
</script>

<style scoped>
.first-container {
  margin-top: 24px;
}

.marg-top-row-2 {
  margin-top: 2rem;
}

.marg-top-row-1 {
  margin-top: 1rem;
}

.fire-art {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

@media screen and (max-width: 991px) {
    .fire-art{
      text-align: center;
      margin-bottom: 2rem;
    }
  }


.main-slide {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  margin-top: 0;
}

h1.content{
  font-size: 2rem;
}

.see-more{
  padding-left: 15px;
}
</style>

