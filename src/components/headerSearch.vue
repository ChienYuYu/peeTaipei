<template>
   <header class="header">
    <h1 class="text-center text-white bg-dark bg-opacity-50 py-3">
      PeeTaipei 台北尿尿網
    </h1>
    <div class="container search-bar-wrap">
      <input class="form-control" type="search"
      placeholder="請輸入區或路名尋找附近的廁所"
      aria-label="Search" v-model="inputDistRoad">
      <p class="text-white" v-show="toileSearchtNum === toileAllNum">
        總共<span class="text-warning">{{toileAllNum}}</span>個廁所點
      </p>
      <p class="text-white" v-show="toileSearchtNum !== toileAllNum">
        搜尋到<span class="text-warning">{{toileSearchtNum}}</span>個廁所點
      </p>
    </div>
  </header>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const inputDistRoad = ref('');
    const toileAllNum = computed(() => store.state.toiletData.length);
    const toileSearchtNum = computed(() => store.getters.filterData.length);
    watch(inputDistRoad, () => {
      store.commit('inputDistRoad', inputDistRoad.value);
      store.commit('countPage');
    });
    return { inputDistRoad, toileAllNum, toileSearchtNum };
  },
};
</script>

<style lang="scss" scoped>
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
    align-items: center;
    flex-direction: column;

    input {
      width: 75%;
    }
  }
}
</style>
