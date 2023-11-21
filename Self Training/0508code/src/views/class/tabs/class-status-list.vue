<script>
import UploadImages from "vue-upload-drop-images"
import TVfooter from '@/components/TVfooter/footer.vue'
import json from './class-status-list/data.json';

export default {
  name: 'class-status-list',
  components: {
    TVfooter,
    UploadImages,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      allSelected: false,
      indeterminate: false,
      searchInput: null,
      fields: [ // Table field //*** != filtered */
        {
          key: "id",
          label: "編號"
        },
        {
          key: "stateicon",
          label: "狀態圖示"
        },
        {
          key: "state",
          label: "狀態名稱"
        },

        {
          key: "Action",
          label: "動作"
        },
      ],
      userData: json,
      currentMerchant:[
        {src:'0'},
        {tel:'0'},
        {address:'0'}
      ],

      selectedUserFilter:  {
        value:'all',
        label:'全部'
      },
    }

  },
  methods: {
    removeAt(item) { // remove particular element

     if(confirm("確定刪除?")){
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    updateView() { // update view
      //console.log('refresh');
      if (this.isShowns.length > 0){
        this.t_isShowns = this.isShowns;
        this.isShowns=[];
        setTimeout(() =>  this.isShowns = this.t_isShowns, 1);
      }

    },
    uploadFileHandleEvt(){

    },
    fileInputHandleEvt(e){
      const { name } = e.target.files[0];
      this.files.push({
        name: name,
      })

      this.uploadFile = e.target.files[0];
    },
    cancelClickHandleEvt(){
      this.files = []
      this.$bvModal.hide("classimport")
    },
    //新增圖片

    uploadMultiImage(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
          let img = {
              src: URL.createObjectURL(selectedFiles[i]),
              file: selectedFiles[i],
          }
          this.images.push(img);
      }
    },//結束
  },
  watch: {
    isShowns: { // if 'isShowns' checkbox array have change
      handler: function () {
        //console.log('mutex');
        if (this.isShowns.length > 1 ){ // only one element in this array (true false)
           this.isShowns.splice(0, 1);
        }
      },
    }
  },
  computed: {
    filtered () { // filtered array from items
      const filtered = this.userData.filter((item) => {
        return (this.selectedUserFilter == null  || this.selectedUserFilter.value == 'all' || item.userType == this.selectedUserFilter.value)&&
               (this.searchInput == null || item.name.includes(this.searchInput))
      });
      return filtered.length > 0 ? filtered : [];
    },
    rows() {
      return this.filtered.length;
    },
  }
}
</script>
<template src="./class-status-list.html"></template>

<style lang="scss" scoped>



</style>