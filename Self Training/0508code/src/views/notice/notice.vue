<template>
    <div>
        <div class="page-title multi-route-page">
            <span>公告管理</span>
            <div class="sub-title">查看及管理學生資訊內容。</div>

            <div class="multi-route-page-selector">
            
                <ul class="multi-route">
                                                    
                    <router-link tag="li" active-class="active" to="/notice/notice-list">公告列表</router-link>      

                    <router-link tag="li" active-class="active" to="/notice/notice-banner">輪播管理</router-link>                         
                                                                                                                               
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
    name: 'notice',
    components: {
        TVfooter,
    },
}
</script>
