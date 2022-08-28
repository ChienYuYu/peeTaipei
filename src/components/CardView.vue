<template>
  <div class="col col-12 col-md-6 col-lg-4 my-2" v-for="(item, index) in data" :key="index">
    <div class="card h-100">
      <div class="card-header bg-secondary">
        <p class="mb-0 text-white">
          公廁名稱 :
          <span class="text-warning"> {{ item.公廁名稱 }} </span>
        </p>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h6 class="card-title mb-3">地址: {{ item.公廁地址 }} </h6>
        <div class="d-flex align-items-center justify-content-between">
          <p class="mb-0 text-danger d-inline-block pe-3 mb-2">
            經度: {{ item.經度 }} <br>緯度: {{ item.緯度 }}
          </p>
          <a href="#" class="btn btn-outline-dark text-nowrap"
          @click.prevent="goMap(item.緯度, item.經度)">地圖</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
    };
  },
  methods: {
    goMap(w, j) {
      console.log(w, j);
      window.location.href = `https://www.google.com.tw/maps/place/${w},${j}`;
    },
  },
};
</script>
