
<script>
import { Bar } from "vue-chartjs";
//import { Line } from "vue-chartjs";

let pointRadius=4;
let pointHoverRadius=7;
let borderWidth=4;

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ["02/23", "02/24", "02/25", "02/26", "02/27", "02/28", "03/01", "03/02", "03/03", "03/04"],
        datasets: [{
          type:'line',
          label: "處理中",
          data: [3, 6, 2, 5, 10, 6, 5, 4, 5, 6],
          fill:false,
          backgroundColor: "rgba(250,145,79,0.9)",
          borderColor: "rgba(250,145,79,0.9)",
          pointBackgroundColor: "rgba(250,145,79,0.9)",
          pointRadius:pointRadius,
          pointHoverRadius:pointHoverRadius,
          borderWidth:borderWidth
        },{
          type:'line',
          label: "已完成",
          data: [5, 4, 6, 8, 3, 7, 2, 5, 8, 7],
          fill:false,      
          backgroundColor: "rgba(0,192,164,0.9)",
          borderColor: "rgba(0,192,164,0.9)",  
          pointBackgroundColor: "rgba(0,192,164,0.9)",
          pointRadius:pointRadius,
          pointHoverRadius:pointHoverRadius,
          borderWidth:borderWidth
        }]
      },
      {
        tooltips: {
        enabled: true, 
        mode: 'label'
        },          
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 9,
            usePointStyle:true,
          }
        }, 
        responsive: true,
        maintainAspectRatio: false,
      }

    );
  }
};
</script>