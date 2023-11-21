<script>
 export default {

   name:'TVheader',
   
   props:{
     
   },
   methods:{ 
      toggle_menu(){
         let dash_sidebar = document.querySelector(".dash-sidebar");
         let dash_main_wrapper = document.querySelector(".dash-main-wrapper");

         //console.log("toggle btn clicked");

         if (dash_sidebar.classList.contains('sidebar-min') && dash_main_wrapper.classList.contains('sidebar-min')){
            dash_sidebar.classList.remove('sidebar-min');
            dash_main_wrapper.classList.remove('sidebar-min');
         } else {
            dash_sidebar.classList.add('sidebar-min');
            dash_main_wrapper.classList.add('sidebar-min');
         }
  
      }
   }

}
</script>

<template src="./header.html"></template>
