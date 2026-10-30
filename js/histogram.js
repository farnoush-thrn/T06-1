// js/histogram.js

const drawHistogram = (data) => {
    // Step 6.1 Set the dimensions and margins of the chart area
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`); // Responsive SVG

    // Create an inner chart group with margins
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Step 6.2 Set up bins
    // Generate the bins using the globally defined binGenerator
    const bins = binGenerator(data); // Save the bins into an array

    console.log(bins); // Log the bins to the console for debugging

    // Step 6.3 Get the lower and upper bounds of bins

    // Define scales (from shared constants)

    // Step 6.4 Draw the bars of the histogram

    // Step 6.5 Add axes

    // Add the x-axis to the bottom of the inner chart

    // Add the x-axis label

    // Step 6.6 Add left axis

    // Add the y-axis to the bottom of the chart relative to the inner chart
};