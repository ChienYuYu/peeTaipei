<template>
  <header class="header">
    <h1 class="text-center text-white bg-dark bg-opacity-50 py-3">
      PeeTaipei 台北尿尿網
    </h1>
    <div class="container search-bar-wrap">
      <input class="form-control" type="search" placeholder="請輸入區或路名尋找附近的廁所"
      aria-label="Search" v-model="inputValue">
    </div>
  </header>
  <div class="wrapper">
    <section class="container">
      <div class="row">
        <Card v-for="(item, index) in showData" :key="index"
        :item="item" :index="index" :currentPage="currentPage" />
      </div>
      <Pagination @previous-page="previousPage" @next-page="nextPage" :totalPage="totalPage"
        :currentPage="currentPage" />
    </section>
    <footer class="footer bg-dark text-secondary text-center py-3 mt-auto">
      PeeTaipei 關心您尿尿的地方<br><span class="fz-14">Copyright &copy;2022 Chen ChienYu</span>
    </footer>
  </div>
</template>

<script>
import Card from '../components/CardView.vue';
import Pagination from '../components/PaginationView.vue';

export default {
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      data: [],
      eachPageData: [],
      totalPage: 0,
      currentPage: 0,
      inputValue: '',
    };
  },
  methods: {
    getData() {
      const url = 'data/64e392a0fcb63fa9fb1f596bcb86e96b_export.json';
      this.axios.get(url)
        .then((res) => {
          this.data = res.data;
          this.pageNum();
        });
    },
    pageNum() {
      this.eachPageData = [];
      this.totalPage = Math.ceil(this.filterData.length / 10);
      for (let i = 0; i < this.totalPage; i += 1) {
        const tempArr = this.filterData.slice(i * 10, i * 10 + 10);
        this.eachPageData.push(tempArr);
      }
    },
    previousPage() {
      if (this.currentPage !== 0) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage !== this.eachPageData.length) {
        this.currentPage += 1;
      }
    },
  },
  created() {
    this.getData();
  },
  computed: {
    showData() {
      return this.eachPageData[this.currentPage];
    },
    filterData() {
      return this.data.filter((item) => item.公廁地址.match(this.inputValue));
    },
  },
  watch: {
    filterData() {
      this.currentPage = 0;
      this.pageNum();
    },
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');

.header {
  position: relative;
  height: 260px;
  background-image: url('../assets/img/pexels-cottonbro-4114710.jpg');
  background-position: 50% 33%;
  background-size: cover;

  h1 {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    letter-spacing: .1rem;
  }

  .search-bar-wrap {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 35%;
    transform: translateY(50%);
    display: flex;
    justify-content: center;

    input {
      width: 75%;
    }
  }
}

.wrapper {
  height: calc(100vh - 260px);
  display: flex;
  flex-direction: column;
}
</style>
