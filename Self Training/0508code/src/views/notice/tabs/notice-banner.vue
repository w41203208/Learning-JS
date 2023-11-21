<script>
import UploadImages from "vue-upload-drop-images"
import json from './notice-banner/data.json';
export default {
  name: 'notice-banner',
  components: {
    UploadImages,
  },
  data() {
    return {
      perPage: 12,
      currentPage: 1,
      allSelected: false,  
      indeterminate: false,
      fields: [ //*** != filtered */
        {
          key: "id",
          label: "輪播號碼"
        },
        {
          key: "bgSrc",
          label: "圖片預視"
        },

        {
          key: "info",
          label: "圖片檔案資料"
        },
        {
          key: "time",
          label: "發布時間"
        },
        {
          key: "link",
          label: "連結"
        },
        {
          key: "data",
          label: "統計資料"
        },
        {
          key: "Action",
          label: "動作"
        },       
      ],
      merchants: json,
      currentMerchant:[
        {src:'0'},
        {tel:'0'},
        {address:'0'}
      ],

      placeValue: null,
      searchInput: null,
      images:[],
    }

  },
  methods: {
    removeAt(idx) { // remove particular element
      this.merchants.splice(idx, 1);
    },
    uploadMultiImage(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
          let img = {
              src: URL.createObjectURL(selectedFiles[i]),
              file: selectedFiles[i],
          }
          this.images.push(img);
      }
    },
  },
  watch: {
  },
  computed: {
    filtered () { // filtered array from items
       const filtered = this.merchants.filter((merchant) => {
        return (this.placeValue == null  || this.placeValue.value == 'all' || merchant.address.includes(this.placeValue.label))&&
               (this.searchInput == null || merchant.name.includes(this.searchInput))
      });
      return filtered.length > 0 ? filtered : [];
    },
    rows() {
      return this.filtered.length;
    },
  }
}
</script>
<template src="./notice-list-banner.html"></template>

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
  .imageBrowser{
    height: 100%;
    width: 100%;
  }
}
</style>
