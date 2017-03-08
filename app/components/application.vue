<template lang="html">
  <div class="app">
    <div class="navbar">
      <div class="container">
        <h1 class="navbar__heading">Marvel</h1>
      </div>
    </div>

        <div class="main">

          <div class="left">
            <img src="https://i.annihil.us/u/prod/marvel/i/mg/3/b0/4c6951936e21d/background.jpg" alt="" class="left__big">
            <div class="left-title">Spider-Girl (2010-2011)</div>
            <div class="date">2010-2011</div>
            <div class="creators">
              <div class="creators-heading">Creators</div>
              <ul class="creators-list">
                <li class="creators-list__item">Tom Brennan</li>
                <li class="creators-list__item">Mike Del Mundo</li>
                <li class="creators-list__item">Clayton Henry</li>
                <li class="creators-list__item">Barry Kitson</li>
                <li class="creators-list__item">Jelena Kevic Djurdevic</li>
                <li class="creators-list__item">Paul Tobin</li>
              </ul>
            </div>
          </div>

        <div class="right">

          <div class="characters">
            <h2 class="characters-heading">Characters</h2>
            <ul class="grid characters-list">
              <li class="characters-list__item">
                <img src="http://www.placecera.com/300/300" alt="" class="characters-list__photo">
                <p class="characters-list__name">Red Hulk</p>
              </li>
              <li class="characters-list__item">
                <img src="http://www.placecera.com/300/300" alt="" class="characters-list__photo">
                <p class="characters-list__name">Spider-Girl (Anya Corazon)</p>
              </li>
              <li class="characters-list__item">
                <img src="http://www.placecera.com/300/300" alt="" class="characters-list__photo">
                <p class="characters-list__name">Spider-Girl (May Parker)</p>
              </li>
              <li class="characters-list__item">
                <img src="http://www.placecera.com/300/300" alt="" class="characters-list__photo">
                <p class="characters-list__name">Spider-Man</p>
              </li>
            </ul>
          </div>

          <div class="comics">
            <h2 class="comics-heading">Comics</h2>
            <ul class="grid2 comics-list">

              <li class="comics-list__item">
                <div class="comics__card">
                  <img src="http://www.placecera.com/300/300" alt="" class="comics-list__photo">
                  <p class="comics-list__number">#8</p>
                  <p class="comics-list__name">Spider-Girl (2010) #8</p>
                  <button class="read-more">Read More</button>
                </div>
              </li>

              <li class="comics-list__item">
                <div class="comics__card">
                  <img src="http://www.placecera.com/300/300" alt="" class="comics-list__photo">
                  <p class="comics-list__number">#7</p>
                  <p class="comics-list__name">Spider-Girl (2010) #7</p>
                  <button class="read-more">Read More</button>
                </div>
              </li>

              <li class="comics-list__item">
                <div class="comics__card">
                  <img src="http://www.placecera.com/300/300" alt="" class="comics-list__photo">
                  <p class="comics-list__number">#6</p>
                  <p class="comics-list__name">Spider-Girl (2010) #6</p>
                <button class="read-more">Read More</button>
              </div>
              </li>

              <li class="comics-list__item">
                <div class="comics__card">
                <img src="http://www.placecera.com/300/300" alt="" class="comics-list__photo">
                <p class="comics-list__number">#5</p>
                <p class="comics-list__name">Spider-Girl (2010) #5</p>
                <button class="read-more">Read More</button>
              </div>
              </li>

            </ul>
          </div>

        </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
