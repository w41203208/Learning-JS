<template>

    <footer class="footer">
            
        <div class="row">
            <div class="col-lg-12">                              
                <div class="footer__copyright__text">         
                    <p>&copy; {{ currentYear }} Smart Reality Tech. All rights reserved.</p>
                    <p>Version 1.0.0.1</p>
                </div>            
            </div>
        </div>

    </footer>

</template>


<script>
export default {
  name: 'TVfooter',
  components: {
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), // current year
    };
  }
}
</script>