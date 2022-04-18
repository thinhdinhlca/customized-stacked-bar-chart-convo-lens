// https://www.chartjs.org/


window.function = function (name, socialize, task, inquire, advocate, support, disagree, facilitate, action_plan, interrupt, detract, width, height) {

  // data
  name = name.value ?? "";
  socialize = socialize.value ?? "";
  task = task.value ?? "";
  inquire = inquire.value ?? "";
  advocate = advocate.value ?? "";
  support = support.value ?? "";
  disagree = disagree.value ?? "";
  facilitate = facilitate.value ?? "";
  action_plan = action_plan.value ?? "";
  interrupt = interrupt.value ?? "";
  detract = detract.value ?? "";
  width = width.value ?? "100";
  height = height.value ?? "80";
 

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw">
  <canvas id="gr1"></canvas>
</div>
    <script>
    let config = {
  type: 'bar',
  data: {
    labels: [${name}],
    datasets: [
      {
        label: 'Socialize',
        backgroundColor: '#00254D',
        data: [${socialize}],
      },
      {
        label: 'Task',
        backgroundColor: '#549F93',
        data: [${task}],
      },
      {
        label: 'Inquire',
        backgroundColor: '#E55934',
        data: [${inquire}],
      },
      {
        label: 'Advocate',
        backgroundColor: '#DAC4F7',
        data: [${advocate}],
      },
      {
        label: 'Support',
        backgroundColor: '#576CA8',
        data: [${support}],
      },
      {
        label: 'Disagree',
        backgroundColor: '#9A031E',
        data: [${disagree}],
      },
      {
        label: 'Facilitate',
        backgroundColor: '#1FC7FF',
        data: [${facilitate}],
      },
      {
        label: 'Action Plan',
        backgroundColor: '#883E30',
        data: [${action_plan}],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false
      }
    },
    title: {
      display: true,
      text: 'Overview by Participants (mins)',
      fontSize: 20,
      padding: 30
    },
    legend: {
        display: false
    },
    scales: {
      xAxes: [
        {
          stacked: true,
           gridLines: {
                drawOnChartArea: false
            }
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
                drawOnChartArea: false
            }
        },
      ],
    },
  },
}
;

    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}