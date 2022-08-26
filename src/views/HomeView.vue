<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="text-center text-white bg-dark bg-opacity-75 py-2">
        peeTaipei 台北尿尿網
      </h1>

      <div class="container search-bar-wrap">
        <input class="form-control" type="search" placeholder="輸入區或路名" aria-label="Search">
      </div>
    </header>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Libero esse temporibus est sed natus reprehenderit
        rem, odio possimus, nesciunt, labore illum nihil. Corrupti
        molestias fugit tenetur iure tempore doloremque eos.
      </p>
    </section>
    <footer class="footer bg-dark text-secondary text-center py-3 mt-auto">
      PeeTaipei 關心您尿尿的地方<br><span class="fz-14">Copyright &copy;2022 Chen ChienYu</span>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');
.wrapper{
  height: 100%;
  border: 1px solid #aaa;
  display: flex;
  flex-direction: column;
}
.header {
  position: relative;
  height: 260px;
  background-image: url('../assets/img/pexels-cottonbro-4114710.jpg');
  background-position: 50% 32%;
  background-size: cover;

  h1 {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 18px;
  }
}

.search-bar-wrap {
  position: absolute;
  bottom: 23%;
  right: 0;
  left: 0;
}
</style>
