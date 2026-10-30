// js/interactions.js

// Build the screen-technology buttons and connect them to histogram filtering.
const populateFilters = (data) => {
    // Step 7.3 Set up buttons and event listeners
    d3.select("#filters_screen")
        .selectAll(".filter")
        .data(filters_screen)
        .join("button")
        .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
        .text(d => d.label)
        .on("click", (e, d) => {
            console.log("Clicked filter:", e);
            console.log("Clicked filter data:", d);

            if (!d.isActive) {
                // 1. Make sure the button clicked is not already active
                filters_screen.forEach(filter => {
                    filter.isActive = d.id === filter.id ? true : false;
                });

                // 2. Update the visual style of the filter buttons
                d3.selectAll("#filters_screen .filter")
                    .classed("active", filter => filter.id === d.id ? true : false);

                // 3. Call the update function with the selected filter ID
                updateHistogram(d.id, data);
            }
        });
};

const updateHistogram = (filterId, data) => {
    // Step 7.4 Update the histogram
    
    // 1. Filter the data based on the selected screen technology
    const updatedData = filterId === "all"
        ? data
        : data.filter(tv => tv.screenTech === filterId);

    // 2. Generate new bins for the filtered data
    const updatedBins = binGenerator(updatedData);

    // 3. Update the existing rectangles with a transition
    d3.selectAll("#histogram rect")
        .data(updatedBins)
        .transition() 
        .duration(500) 
        .ease(d3.easeCubicInOut) 
        .attr("y", d => yScale(d.length))
        .attr("height", d => innerHeight - yScale(d.length));
};

// T06-2 Step 3: Creating a tooltip and adding function call to load-data.js
const createTooltip = () => {
    // Step 3.2 Append (a hidden) tooltip to innerChart
    // Step 3.3 Append tooltip background rectangle
    // Step 3.4 Apped tooltip text
};

// T06-2 Step 3.5 Add functions to react to mouse events
const handleMouseEvents = () => {
    // Step 3.6 Select all circles in scatter plot
    // Step 3.7 Attach event listeners to mouseenter and mouseleave events
};