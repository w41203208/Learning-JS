<template>
    <div>
        <div class="page-title multi-route-page">
            <span>課程管理</span>
            <div class="sub-title">管理課程及狀態相關資訊內容。</div>

            <div class="multi-route-page-selector">
            
                <ul class="multi-route">
                                                    
                    <router-link tag="li" active-class="active" to="/class/class-list">課程列表</router-link>      

                    <router-link tag="li" active-class="active" to="/class/class-status-list">狀態列表</router-link>                         
                                                                                                                               
                </ul>
                                        
            </div>	
        </div>

        <div>					
            
            <router-view></router-view> 

            <!-- <TVfooter/> -->

        </div>

    </div>
</template>

<script>
import TVfooter from '../../components/TVfooter/footer.vue'
export default {
    name: 'class',
    components: {
        TVfooter,
    },
}
</script>
