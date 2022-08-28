<template>
  <div class="pagination d-flex justify-content-center align-items-center py-4">
    <button type="button" class="btn btn-outline-dark mx-2"
     @click="$emit('previous-page')" :disabled="currentPage === 0">
      前一頁
    </button>
    <p class="mb-0">目前第{{ currentPage+1 }}頁 / 共{{ totalPage }}頁</p>
    <button type="button" class="btn btn-outline-dark mx-2"
    @click="$emit('next-page')" :disabled="currentPage === totalPage-1">
      下一頁
    </button>
  </div>
</template>

<script>
export default {
  props: ['totalPage', 'currentPage'],
};
</script>
