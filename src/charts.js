import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const charts = {}

charts.trend = (id, type) => {
  new Chart(document.getElementById(id), {
    "type": type,
    "data": {
      "labels": ["Dotnet", "Javascript", "Angular", "AWS", "GCP", "Azure"],
      "datasets": [{
        "label": "Fulfilled Coverage",
        "data": [10, 20, 30, 40, 50, 60],
        "borderColor": "rgb(255, 99, 132)",
        "backgroundColor": "rgba(196, 71, 58, 0.2)"
      }, {
        "label": "Variation",
        "data": [5, 15, 10, 30, 40, 30],
        "type": "line",
        "fill": false,
        "borderColor": "rgb(54, 162, 235)"
      }]
    },
    "options": {
      "scales": {
        "yAxes": [{
          "ticks": {
            "beginAtZero": true
          }
        }]
      }
    }
  })
}

export default charts