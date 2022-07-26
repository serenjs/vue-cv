<template>
  <div class="skills">
    <div class="innerWrapper">
      <h1>Skills & Education</h1>
      <section class="skills">
        <ul>
          <li class="laravel">Laravel</li>
          <li class="php">PHP</li>
          <li class="js">JS</li>
          <li class="git">Git</li>
          <li class="mysql">MySQL</li>
          <li class="html">HTML</li>
          <li class="css">CSS</li>
          <li class="ps">PS</li>
          <li class="xd">XD</li>
        </ul>
      </section>
      <section class="education">
        <div class="university">
          <h3>Pan-European University Apeiron</h3>
          <span>Bachelor's degree, Information Technology</span>
          <span>2016 - 2022</span>
        </div>
        <div class="highSchool">
          <h3>Gimnazija Banja Luka</h3>
          <span>Computer Science major</span>
          <span>2012 - 2016</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.innerWrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.university,
.highSchool {
  display: flex;
  flex-direction: column;
}

.skills ul {
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  gap: 10px;
  padding-left: 0;
  list-style-type: none;
}

.skills ul li {
  padding: 25px;
  background: var(--soft-dark);
  border-radius: 8px;
  position: relative;
  color: var(--vt-c-white);
  z-index: 1;
  padding-left: 15px;
}

.skills ul li:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  top: 15px;
  right: 20px;
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.laravel::after {
  background-image: url(../components/icons/laravel.svg);
}

.php:after {
  background-image: url(../components/icons/php.svg);
}

.js:after {
  background-image: url(../components/icons/js.svg);
}

.git:after {
  background-image: url(../components/icons/git.svg);
}

.mysql:after {
  background-image: url(../components/icons/mysql.svg);
}

.html:after {
  background-image: url(../components/icons/html.svg);
}

.css:after {
  background-image: url(../components/icons/css.svg);
}

.ps:after {
  background-image: url(../components/icons/photoshop.svg);
}

.xd:after {
  background-image: url(../components/icons/adobexd.svg);
}

@media (max-width: 550px) {
  .skills ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills {
    display: flex;
    align-items: center;
  }

  .skills ul li {
    padding-left: 10px;
    padding-right: 55px;

  }

  .skills ul li:after {
    width: 35px;
    height: 35px;
    top: 20px;
    right: 10px;
  }
}
</style>
