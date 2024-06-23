document.addEventListener("DOMContentLoaded", () => {
    let scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || {};

    let specialistsData = [
        { id: 1, name: "Иванова Н.С." },
        { id: 2, name: "Ароничкова Л.И." },
        { id: 3, name: "Буланова Л.И." },
        { id: 4, name: "Харитонова П.И." },
        { id: 5, name: "Веничит П.И." },
        { id: 6, name: "Степанова Л.А." },
        { id: 7, name: "Рускова П.И." },
        { id: 8, name: "Перепелкина П.И." },
        { id: 9, name: "Петрова М.И." },
        { id: 10, name: "Алентьева В.И." },
        { id: 11, name: "Сидорова П.П." }
    ];

    function getSpecialistNameById(id) {
        let specialist = specialistsData.find(s => s.id === parseInt(id));
        return specialist ? specialist.name : `Specialist ${id}`;
    }

    function getEarliestStartTime() {
        let earliest = "23:59";
        Object.values(scheduleData).forEach(specialist => {
            if (specialist.start < earliest) {
                earliest = specialist.start;
            }
        });
        return earliest;
    }

    function getLatestEndTime() {
        let latest = "00:00";
        Object.values(scheduleData).forEach(specialist => {
            if (specialist.end > latest) {
                latest = specialist.end;
            }
        });
        return latest;
    }

    function generateHourlyLabels(start, end) {
        let labels = [];
        let current = new Date(`1970-01-01T${start}:00`);
        let endDate = new Date(`1970-01-01T${end}:00`);

        while (current <= endDate) {
            labels.push(current.toTimeString().slice(0, 5));
            current.setHours(current.getHours() + 1);
        }
        return labels;
    }

    function getDataForHourlyLoad(labels) {
        let hourlyLoad = Array(labels.length).fill(0);
        let startHour = parseInt(labels[0].split(':')[0], 10);
        
        Object.values(scheduleData).forEach(specialist => {
            specialist.appointments.forEach(appointment => {
                let hour = parseInt(appointment.time.split(':')[0], 10);
                let index = hour - startHour;
                if (index >= 0 && index < hourlyLoad.length) {
                    hourlyLoad[index]++;
                }
            });
        });
        return hourlyLoad;
    }

    function getDataForMonthlyLoad() {
        let monthlyLoad = {};
        let currentYear = new Date().getFullYear();
        Object.values(scheduleData).forEach(specialist => {
            specialist.appointments.forEach(appointment => {
                let [year, month] = appointment.date.split('-');
                if (parseInt(year, 10) === currentYear) {
                    monthlyLoad[month] = (monthlyLoad[month] || 0) + 1;
                }
            });
        });

        let sortedMonths = Object.keys(monthlyLoad).sort((a, b) => parseInt(a) - parseInt(b));
        let sortedMonthlyLoad = {};
        sortedMonths.forEach(month => {
            sortedMonthlyLoad[month] = monthlyLoad[month];
        });

        return sortedMonthlyLoad;
    }

    function getDataForSpecialistsLoad() {
        let specialistsLoad = {};
        Object.keys(scheduleData).forEach(specialistId => {
            let specialist = scheduleData[specialistId];
            specialistsLoad[specialistId] = {
                name: getSpecialistNameById(specialistId),
                count: specialist.appointments.length
            };
        });
        return specialistsLoad;
    }

    function drawBarChart(ctx, data, labels, options) {
        let maxData = Math.max(...data);
        let chartHeight = ctx.canvas.height - options.padding * 2 - options.titleHeight;
        let chartWidth = ctx.canvas.width - options.padding * 2;
        let barWidth = chartWidth / data.length;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = '#000';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, ctx.canvas.width / 2, options.padding);

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;

        labels.forEach((label, index) => {
            let x = options.padding + index * barWidth + barWidth / 2;
            ctx.beginPath();
            ctx.moveTo(x, options.padding + options.titleHeight);
            ctx.lineTo(x, ctx.canvas.height - options.padding);
            ctx.stroke();
            ctx.fillStyle = '#000';
            ctx.fillText(label, x, ctx.canvas.height - options.padding + 15);
        });

        data.forEach((value, index) => {
            let barHeight = (value / maxData) * chartHeight;
            let x = options.padding + index * barWidth;
            let y = ctx.canvas.height - options.padding - barHeight;

            ctx.fillStyle = options.colors[index % options.colors.length];
            ctx.fillRect(x, y, barWidth - options.barSpacing, barHeight);
            ctx.strokeRect(x, y, barWidth - options.barSpacing, barHeight);

            ctx.fillStyle = '#000';
            ctx.fillText(value, x + barWidth / 4 - 5, y - 5);
        });
    }

    function drawHorizontalBarChart(ctx, data, labels, options) {
        let maxData = Math.max(...data);
        let chartHeight = ctx.canvas.height - options.padding * 2 - options.titleHeight;
        let nameWidth = 150;
        let chartWidth = ctx.canvas.width - options.padding * 2 - nameWidth;
        let barHeight = chartHeight / data.length;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = '#000';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, ctx.canvas.width / 2, options.padding);

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;

        labels.forEach((label, index) => {
            let y = options.padding + options.titleHeight + index * barHeight + barHeight / 2;
            ctx.beginPath();
            ctx.moveTo(options.padding + nameWidth, y);
            ctx.lineTo(ctx.canvas.width - options.padding, y);
            ctx.stroke();
            ctx.fillStyle = '#000';
            ctx.textAlign = "right";
            ctx.fillText(label, options.padding + nameWidth - 10, y + 5); 
        });

        data.forEach((value, index) => {
            let barWidth = (value / maxData) * chartWidth;
            let y = options.padding + options.titleHeight + index * barHeight;
            let x = options.padding + nameWidth;

            ctx.fillStyle = options.colors[index % options.colors.length];
            ctx.fillRect(x, y, barWidth, barHeight - options.barSpacing);
            ctx.strokeRect(x, y, barWidth, barHeight - options.barSpacing); 

            ctx.fillStyle = '#000';
            ctx.fillText(value, x + barWidth + 5, y + barHeight / 2 + 5);
        });
    }

    function drawLineChart(ctx, data, labels, options) {
        let maxData = Math.max(...data);
        let chartHeight = ctx.canvas.height - options.padding * 2 - options.titleHeight;
        let chartWidth = ctx.canvas.width - options.padding * 2;
        let pointSpacing = chartWidth / (data.length - 1);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = '#000';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, ctx.canvas.width / 2, options.padding);

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;

        labels.forEach((label, index) => {
            let x = options.padding + index * pointSpacing;
            ctx.beginPath();
            ctx.moveTo(x, options.padding + options.titleHeight);
            ctx.lineTo(x, ctx.canvas.height - options.padding);
            ctx.stroke();
            ctx.fillStyle = '#000';
            ctx.fillText(label, x, ctx.canvas.height - options.padding + 15);
        });

        ctx.beginPath();
        ctx.moveTo(options.padding, ctx.canvas.height - options.padding - (data[0] / maxData) * chartHeight);
        data.forEach((value, index) => {
            let x = options.padding + index * pointSpacing;
            let y = ctx.canvas.height - options.padding - (value / maxData) * chartHeight;
            ctx.lineTo(x, y);
        });
        ctx.strokeStyle = options.lineColor;
        ctx.stroke();

        data.forEach((value, index) => {
            let x = options.padding + index * pointSpacing;
            let y = ctx.canvas.height - options.padding - (value / maxData) * chartHeight;
            ctx.fillStyle = options.pointColor;
            ctx.beginPath();
            ctx.arc(x, y, options.pointRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#000';
            ctx.fillText(value, x - 10, y - 10);
        });
    }

    let earliestStart = getEarliestStartTime();
    let latestEnd = getLatestEndTime();
    let hourlyLoadLabels = generateHourlyLabels(earliestStart, latestEnd);

    let hourlyLoadData = getDataForHourlyLoad(hourlyLoadLabels);

    let sortedMonthlyLoad = getDataForMonthlyLoad();
    let monthlyLoadData = Object.values(sortedMonthlyLoad);
    let monthlyLoadLabels = Object.keys(sortedMonthlyLoad).map(month => {
        let monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        return monthNames[parseInt(month, 10) - 1];
    });

    let specialistsLoad = getDataForSpecialistsLoad();
    let specialistsLoadData = Object.values(specialistsLoad).map(s => s.count);
    let specialistsLoadLabels = Object.values(specialistsLoad).map(s => s.name);

    let barChartCtx = document.getElementById('chart1').getContext('2d');
    drawBarChart(barChartCtx, hourlyLoadData, hourlyLoadLabels, {
        title: 'Загруженность времени',
        titleHeight: 30,
        padding: 40,
        barSpacing: 10,
        colors: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
    });

    let horizontalBarChartCtx = document.getElementById('chart2').getContext('2d');
    drawHorizontalBarChart(horizontalBarChartCtx, specialistsLoadData, specialistsLoadLabels, {
        title: 'Загруженность специалистов',
        titleHeight: 30,
        padding: 40,
        barSpacing: 10,
        colors: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
    });

    let lineChartCtx = document.getElementById('chart3').getContext('2d');
    drawLineChart(lineChartCtx, monthlyLoadData, monthlyLoadLabels, {
        title: 'Загруженность по месяцам',
        titleHeight: 30,
        padding: 40,
        lineColor: 'rgba(75, 192, 192, 1)',
        pointColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5
    });

    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});








