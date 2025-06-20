document.addEventListener('DOMContentLoaded', function () {
    const chartSection = document.getElementById('chart-section');
    chartSection.innerHTML = ''; // Clear any existing content  

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const maxAmount = Math.max(...data.map(item => item.amount));
            const today = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

            data.forEach(item => {
                // Create container
                const barContainer = document.createElement('div');
                barContainer.classList.add('bar-container');

                // Tooltip
                const tooltip = document.createElement('div');
                tooltip.className = 'amount';
                tooltip.textContent = `$${item.amount}`;

                // Bar
                const bar = document.createElement('div');
                bar.classList.add('bar');

                // Set height based on proportion of max
                const heightPercent = (item.amount / maxAmount) * 100;
                bar.style.height = `${heightPercent}%`;

                // Highlight today's bar
                if (item.day === today) {
                    bar.classList.add('today');
                }

                // Day label
                const dayLabel = document.createElement('span');
                dayLabel.className = 'day';
                dayLabel.textContent = item.day;

                // Assemble
                barContainer.appendChild(tooltip);     // Show above bar
                barContainer.appendChild(bar);         // Then the bar itself
                barContainer.appendChild(dayLabel);    // Then the label below

                chartSection.appendChild(barContainer);
            });
        })
        .catch(err => {
            console.error('Error loading data.json:', err);
            chartSection.innerHTML = '<p style="color:red;">Failed to load chart data.</p>';
        });
});
