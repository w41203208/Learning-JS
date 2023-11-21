<script>
import TVfooter from '@/components/TVfooter/footer.vue'
import json from './data/data.json';
export default {
  name: 'account',
  components: {
    TVfooter,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      allSelected: false,  
      indeterminate: false,
      searchInput: null,
      isCheckUploadFile: false, //帳號管理 0516
      openSelLessonEdit: false,
      openSelLessonAdd: false,
      uploadFile: null,
      files: [], //結束 0516
      fields: [ // Table field //*** != filtered */
        {
          key: "userType.name",
          label: "權限"
        },
        {
          key: "id",
          label: "員工編號"
        },
        {
          key: "division.name",
          label: "部門"
        },
        {
          key: "name",
          label: "教師姓名"
        },
        {
          key: "gender.name",
          label: "性別"
        },
        {
          key: "birth",
          label: "出生年月日"
        },
        {
          key: "phoneNumber",
          label: "連絡電話"
        },
        {
          key: "currentClass",
          label: "正在教授的課程"
        },
        {
          key: "historyClass",
          label: "已教授過的課程"
        },
        {
          key: "Action",
          label: "動作"
        },       
      ],
      userData: json,
      userFilter: [ // user filter
        {
          value:'all',
          label:'全部'
        },
        {
          value: 1,
          label: '老師',
        }, 
        {
          value: 0,
          label: '主任',
        },  
      ],
      selectedUserFilter:  { // current seleted in user filter
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
    uploadFileHandleEvt(){  //帳號管理 0516
      if(this.isCheckUploadFile){
        console.log('good');
      }else{
        this.$bvModal.show("uploadFileCheckModal")
        console.log('bad');
      }
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
      this.uploadFile = false;
      this.isCheckUploadFile = false;

      this.$bvModal.hide("import")
    },
    openSelLessonHandleEvt(){
      this.openSelLessonAdd ? this.openSelLessonAdd = false : this.openSelLessonAdd = true;
    },
    openSelLessonEditHandleEvt(){
      this.openSelLessonEdit ? this.openSelLessonEdit = false : this.openSelLessonEdit = true;
    }
  }, //結束 0516

  watch: {
    isShowns: { // if 'isShowns' checkbox array have change
      handler: function () {
        //console.log('mutex');
        if (this.isShowns.length > 1 ){ // only one element in this array (true false)
           this.isShowns.splice(0, 1);
        }      
      },
    },
    uploadFile:{ //帳號管理 0516
      handler: function() {
        if(this.uploadFile){
          console.log('isUpload')
          this.isCheckUploadFile = true;
        }else{
          console.log('isUnUpload')
          this.isCheckUploadFile = false;
        }
      }
    } // 結束0516
  },
  
  computed: {
    filtered () { // filtered array from items
      const filtered = this.userData.filter((item) => {
        return (this.selectedUserFilter == null  || this.selectedUserFilter.value == 'all' || item.userType.type == this.selectedUserFilter.value)&&
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

<template src="./account.html"></template>

<style lang="scss" scoped>
#uploadFileCheckModal___BV_modal_header_{
  display: none !important;
}
.uploadFile-section{
  font-weight: bolder !important;
  display: flex;
  flex-direction: column;
}
.import-section{
  font-weight: bolder !important;
  display: flex;
  flex-direction: column;
  .import-desc{
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
    &>p{
      margin: 0;
    }
  }
}
.import-input{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.step-one{
  &>p{
    padding-right: 30px;
  }
  .step-div{
    display: flex;
    padding: 5px 10px;
    flex: 1 1;
    border-radius: 3px;
    border: 1.5px solid rgb(203, 203, 203);
    margin-left: 15px;
    margin-right: 15px;
    .step-select-btn{
      background-color: #309398;
      margin: 0;
      margin-right: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .step-select-file{
        display: none;
      }
    }
    .step-file-view{
      flex: 1 1;
      display: flex;
      align-items: center;
      .file-view-item{
        display: flex;
        align-items: center;
        margin: 7px;
        .img-icon{
          width: 20px;
          height: 20px;
          margin-right: 5px;
          &>img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .step-upload-btn{
    background-color: #309398;
  }
}
.step-two{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  &>p{
    padding-right: 30px;
  }
  .step-two-p{
    flex: 1 1;
    margin: 0px 15px;
  }
  .step-two-check-btn{
    background-color: #FA914F;
  }
}

.stu-btn{
  font-size: 14px;
  color: white;
  height: 36px;
  border-radius: 5px;
  padding: 1px 15px;
  border: none;
}

.stu-notice-div{
  border-radius: 3px;
  border: 1.5px solid rgb(203, 203, 203);
  padding: 5px 5px;
  margin-bottom: 25px;
  min-height: 100px;
  font-size: smaller;
}
.step-three{
  &>p{
    padding-right: 30px;
  }
  .step-three-desc{
    flex: 1 1;
    margin-left: 15px;
  }
  .step-three-check-btn{
    background-color: #FA914F;
  }
}

  .btn-answer{
    padding: 0px 25px ;
  }
  .btn-ok{
    background-color: #309398;

  }
  .btn-cancel{
    background-color: #FFF;
    border-width:1px;
    border-style:solid;
    border-color:#309398;
    color:#309398;
  }
.add  {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size:medium;
  &>p{
    padding-right: 30px;
    margin: 0px;
    max-width: 30%;
    min-width: 30%;
    font-weight: 600;
  }
  .add-div-outer{
    flex: 1 1;
  }
  .add-div{
    cursor: pointer;
    padding: 2px 10px;
    flex: 1 1;
    border-radius: 3px;
    border: 1.5px solid rgb(203, 203, 203);
    margin-left: 15px;
    margin-right: 15px;
    font-size:smaller;
    .step-select-btn{
      background-color: #309398;
    }
  }
    .add-div-sel{
    padding: 2px 10px;
    border-radius: 5px;
    border: 1px solid #309398;
    margin-left: 15px;
    margin-right: 0px;
    color:#309398;
    font-size:smaller;


  }
  .class{
    padding: 5px 7px;
    padding-bottom: 10px;
    border: 1px solid rgb(203, 203, 203);
    background: #FFF;
    border-radius: 5px;
    margin-left: 15px;
    position: absolute;
    font-size:smaller;
    .cla{
      margin-top: 10px;
      margin-bottom: 10px;
      &.one{
        &>:nth-child(3){
          margin-left: 15px;
        }
      }
      &.three{
        &>:nth-child(2){
          width: 100%;
        }
      }
      &.two{
        &>:nth-child(2){
          width: 100%;
        }
      }
    }
  .add-div-sel-opt{
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #309398;
    margin-top: 10px;
    margin-bottom: 10px;
    color:#309398;
    font-size:smaller;
  }

  .add-btn-import{
    width:100%;
    border-radius: 3px;
    border: 1.5px solid rgb(203, 203, 203);
    padding: 5px 45px ;
    background-color: #309398;
    color: white;
    border-radius: 8px;
    border: none;
    font-size:smaller;
    }
  }
}

.edit  {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size:medium;
  &>p{
    padding-right: 30px;
    margin: 0px;
    max-width: 30%;
    min-width: 30%;
    font-weight: 600;
  }
  .edit-div-outer{
    flex: 1 1;
  }
  .edit-div{
    cursor: pointer;
    padding: 2px 10px;
    flex: 1 1;
    border-radius: 3px;
    border: 1.5px solid rgb(203, 203, 203);
    margin-left: 15px;
    margin-right: 15px;
    font-size:smaller;
    .step-select-btn{
      background-color: #309398;
    }
  }
    .edit-div-sel{
    padding: 2px 10px;
    border-radius: 5px;
    border: 1px solid #309398;
    margin-left: 15px;
    margin-right: 0px;
    color:#309398;
    font-size:smaller;


  }
  .class{
    padding: 5px 7px;
    padding-bottom: 10px;
    border: 1px solid rgb(203, 203, 203);
    background: #FFF;
    border-radius: 5px;
    margin-left: 15px;
    position: absolute;
    font-size:smaller;
    .cla{
      margin-top: 10px;
      margin-bottom: 10px;
      &.one{
        &>:nth-child(3){
          margin-left: 15px;
        }
      }
      &.three{
        &>:nth-child(2){
          width: 100%;
        }
      }
      &.two{
        &>:nth-child(2){
          width: 100%;
        }
      }
    }
    .edit-div-sel-opt{
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #309398;
    margin-top: 10px;
    margin-bottom: 10px;
    color:#309398;
    font-size:smaller;
    }

    .edit-btn-import{
    width:100%;
    border-radius: 3px;
    border: 1.5px solid rgb(203, 203, 203);
    padding: 5px 45px ;
    background-color: #309398;
    color: white;
    border-radius: 8px;
    border: none;
    font-size:smaller;
    }
  }
}
</style>