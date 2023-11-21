<template>
<div>
  <div class="page-title">
      <span>Opps! 看來來錯地方了!</span><br>
      <router-link to="/">點我回資訊首頁</router-link>
  </div>

  <div class="container-fluid">					
                          
      <TVfooter/>

  </div>
  

</div>
</template>

<script>
import TVfooter from '../components/TVfooter/footer.vue'
export default {
  name: 'about',
  components: {
    TVfooter,
  },
}
</script>
<style scoped>
 .about {
   margin-top: 65px;
   margin-left: 300px;
 }
</style>
