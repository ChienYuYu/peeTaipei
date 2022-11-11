<template>
  <div class="pagination d-flex justify-content-center align-items-center py-4">
    <button type="button" class="btn btn-outline-dark mx-2" @click="switchPage('previous')"
    :disabled="currentPageNum === 0">
      前一頁
    </button>
    <p class="mb-0">目前第{{ currentPageNum + 1 }}頁 / 共{{ totalPageNum }}頁</p>
    <button type="button" class="btn btn-outline-dark mx-2" @click="switchPage('next')"
    :disabled="currentPageNum +1 === totalPageNum">
      下一頁
    </button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const currentPageNum = computed(() => store.state.currentPageNum);
    const totalPageNum = computed(() => store.state.totalPageNum);

    function switchPage(pn) {
      store.commit('switchPage', pn);
    }

    return { currentPageNum, totalPageNum, switchPage };
  },
};
</script>
