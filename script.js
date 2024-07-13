document.addEventListener('DOMContentLoaded', function () {
    var pieData = {
        labels: ['Week1', 'Week2', 'Week3'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['#d6b238', '#b30101', '#d3d3d3'],
            hoverBackgroundColor: ['#d6b238', '#b30101', '#d3d3d3']
        }]
    };

    var lineData = {
        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
        datasets: [{
            label: '',
            data: [15, 3, 2, 0, 0],
            borderColor: '#7f7a6f',
            backgroundColor: 'rgba(255, 87, 51, 0.2)', 
            tension: 0.4
        }]
    };

    var barData = {
        labels: ['GENERAL', 'OAS', 'PROMOTION'],
        datasets: [
            {
                label: 'Stores',
                data: [2, 0, 0],
                backgroundColor: '#3f3e43',
                borderColor: '#36A2EB',
                borderWidth: 1,
                barThickness: 30
            },
            {
                label: 'Activities',
                data: [9, 3, 3],
                backgroundColor: '#86aeda',
                borderColor: '#FFCE56',
                borderWidth: 1,
                barThickness: 30
            },
            {
                label: 'Users',
                data: [0, 0, 0],
                backgroundColor: '#91ee81',
                borderColor: '#FF6384',
                borderWidth: 1,
                barThickness: 30
            }
        ]
    };

    var barData1 = {
        labels: ['ALL'], 
        datasets: [{
            data: [12],
            backgroundColor: '#0eb693',
            borderColor: '#0eb693',
            borderWidth: 1,
            barThickness: 80

        }]
    };

    var pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    var lineChartCanvas = document.getElementById('lineChart').getContext('2d');
    var barChartCanvas = document.getElementById('barChart').getContext('2d');
    var barChartCanvas2 = document.getElementById('barChart2').getContext('2d');
    var barChartCanvas1 = document.getElementById('barChart1').getContext('2d');

    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        usePointStyle: true, 
                        padding: 20 
                    }
                }
            }
        }
    });

    var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: lineData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 5, 
                    max: 20 
                }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom'
                }
            }
        }
    });

    function createBarChart(ctx, data, labelPosition) {
        return new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y', 
                plugins: {
                    legend: {
                        position: 'right',
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        beginAtZero: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        stepSize: 5,
                        max: 20
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 20, 
                            usePointStyle: true, 
                            padding: 20 
                        }
                    }
                }
            }
        });
    }

    var barChart = createBarChart(barChartCanvas, barData, 'top');

    var barChart2 = new Chart(barChartCanvas2, {
        type: 'bar',
        data: barData1,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 5, 
                    max: 20
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var barChart1 = new Chart(barChartCanvas1, {
        type: 'bar',
        data: barData1,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 5,
                    max: 20
                }
            },
            plugins: {
                legend: {
                    display: false 
                }
            }
        }
    });
});