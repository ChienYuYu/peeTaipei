<template>
  <HeaderSearch />
  <div class="wrapper">
    <section class="container">
      <Card />
      <Pagination />
    </section>
    <Footer />
  </div>
  <a href="#" class="btn btn-warning text-white gotop" v-show="showBtn">▲</a>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import HeaderSearch from '../components/headerSearch.vue';
import Card from '../components/CardView.vue';
import Pagination from '../components/PaginationView.vue';
import Footer from '../components/footerView.vue';

export default {
  components: {
    HeaderSearch,
    Card,
    Pagination,
    Footer,
  },
  setup() {
    const store = useStore();
    const showBtn = ref(false);
    store.dispatch('getApi');

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          showBtn.value = true;
        } else {
          showBtn.value = false;
        }
      });
    });

    return { showBtn };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');

.wrapper {
  height: calc(100vh - 260px);
  display: flex;
  flex-direction: column;
}

.gotop {
  position: fixed;
  bottom: 0;
  z-index: 20;
  right: 0;
  margin: 0 .5rem .5rem 0;
}
</style>
