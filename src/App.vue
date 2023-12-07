<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeAbout from './components/HomeAbout.vue'
import Social from './components/Social.vue'
</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HomeAbout name="David Vidovic" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/employment-history">Employment history</RouterLink>
        <RouterLink to="/skills">Skills & Education</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <Social mail="mail@davidvidovic.com"/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-text);
}

nav a.router-link-exact-active {
  color: var(--green);
  border-left: 1px solid var(--green);
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
