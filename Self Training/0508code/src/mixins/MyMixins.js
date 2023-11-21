
import Vue from 'vue'
export const MyMixins = {
    methods: {  
        formatPrice(value) {
        let val = value;
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        uploadImage(event ,className){
            let imageBrowser = document.querySelector(className);
            let reader = new FileReader();
            reader.onload = function (e) {
                //console.log(e.target.result);             
                imageBrowser.setAttribute('src', e.target.result);
                //$('.drag-hint').addClass('hide');
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        dateTranslator(date) { // translate YYYY-MM-DD to YYYY/MM/DD
            let translatedDate = date.replace(/-/g, '/');
            return translatedDate; 
        },
        
    }
}
Vue.mixin(MyMixins);