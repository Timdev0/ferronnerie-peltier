<template>
    <div id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Ferronnerie PELTIER</router-link>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">À propos</router-link>
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu Dropdown
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <router-link class="dropdown-item" to="">Dropdown item 1</router-link>
                <router-link class="dropdown-item" to="">Dropdown item 2</router-link>
                <router-link class="dropdown-item" to="">Dropdown item 3</router-link>
                <router-link class="dropdown-item" to="">Dropdown item 4</router-link>
                <router-link class="dropdown-item" to="">Dropdown item 5</router-link>
              </div>
            </li>
          </ul>
        </div>

        </div>
    </div>
</template>

<!-- <style scoped>
    
</style> -->

