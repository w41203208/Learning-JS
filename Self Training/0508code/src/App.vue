<template>
  <div id="app">
    <TVheader/>
    <TVsidebar/>

    <section class="dash-main-section" id="main" v-on:scroll="handleSCroll()">
      <div class="dash-main-wrapper">
        <router-view></router-view>  
      </div>  
    </section>

  </div>
</template>

<script>
import TVheader from './components/TVheader/header.vue'
import TVsidebar from './components/TVsidebar/sidebar.vue'
export default {
  name: 'app',
  data (){
    return {

    }
  },
  components: {
    TVheader,
    TVsidebar,
  },
  
  created () {
    let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('scroll', this.handleSCroll);
    window.addEventListener("resize", this.onResize);
    setTimeout(() =>  this.onResize(), 1);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll);
    window.removeEventListener("resize", this.onResize);
  },
  methods:{
    
    handleSCroll () {
 
      let page_title = document.querySelector(".page-title");
      let main_section = document.querySelector(".dash-main-section");

      if (page_title!=null && main_section!=null){

        if (window.scrollY > 50 || main_section.scrollTop > 50) {
          page_title.classList.add("sticky");       
        } else {
          page_title.classList.remove("sticky");
        } 

      }
    },
    onResize() {
      let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);

      let sidebar = document.querySelector(".dash-sidebar");
      let main_wrapper = document.querySelector(".dash-main-wrapper");
      let windowsize = window.innerWidth;
			if (windowsize < 900) { // if the window is less than 900px wide then turn off the sidebar
				sidebar.classList.add('sidebar-min');
				main_wrapper.classList.add('sidebar-min');
			}
			else {		
				sidebar.classList.remove('sidebar-min');
				main_wrapper.classList.remove('sidebar-min');
			}
    }
  
  },
  watch:{
    $route (to, from) {
      to; from;
      this.$nextTick(this.handleSCroll); 
    }
  } 

}
</script>

<style>
</style>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/dashboard/dashboard-style.scss';
  @import "vue-select/src/scss/vue-select.scss";
</style>
