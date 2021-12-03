// @ts-nocheck
var ctx = document.getElementById('myChart');
gradientChartOptionsConfiguration = {
    maintainAspectRatio: true,
    legend: {
        display: false
    },
    tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
            },
            ticks: {
                suggestedMin: 1.6,
                suggestedMax: 100,
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }],
        xAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(220,53,69,0.1)',
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }]
    }
};
//this is data for your orders
let myOrderData = [
    [5, 3, 7, 6, 8, 3, 9, 4, 3, 7, 6, 8, 4, 9, 5, 3, 7, 6, 8, 4, 9, 2, 8, 5, 10], //Today
    [7, 15, 17, 16, 18, 14, 19, 50], //Week(default)
    [15, 23, 27, 19, 24, 21, 25, 15, 23, 27, 19, 24, 4, 3, 7, 6, 8, 4, 9, 5, 3, 7, 6, 8, 19, 24, 21, 25, 15, 23, 140], //Month
    [20, 23, 27, 18, 31, 26, 32, 20, 23, 27, 18, 31, 26, 32, 300], //Year
];
let myOrderLabels = [
    ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'], //Today
    ['Mo', 'To', 'We', 'Th', 'Fr', 'Sa', 'Su'], //Week(default)
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], //Month
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'], //Year
];
//create the default graph
var myCharts = new Chart(ctx, {
    type: 'line',
    data: {
        labels: myOrderLabels[1],
        datasets: [{
            label: '# Orders ',
            data: myOrderData[1],
            backgroundColor: 'rgba(83, 51, 237, .3)',
            borderColor: '#13111f',
            borderWidth: 3
        }]
    },
    options: gradientChartOptionsConfiguration
});

//toggle between the graphs
const selectInput = document.getElementById('select_date');
selectInput.onchange = function() {
        d = selectInput.value;
        changeDataByTime(myOrderData[d], d);
    }
    //update the graph
function changeDataByTime(theData, d) {
    removeData();
    myCharts.data.labels = myOrderLabels[d];
    myCharts.data.datasets.forEach((dataset) => {
        dataset.data = theData;
    });
    myCharts.update();
}

function removeData() {
    myCharts.data.labels = [];
    myCharts.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    myCharts.update();
}