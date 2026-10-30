# T06-1: Interactive TV Energy Consumption Dashboard (D3.js)

This repository contains an interactive data visualization dashboard built with **D3.js (v7)**. The project explores a dataset of TV energy consumption in Australia (Jan 2025), focusing on the relationships between screen technology, size, star rating, and energy usage.

## 🚀 Features & Visualizations

### 1. Interactive Histogram (Filtering & Transitions)
*   Displays the frequency of labeled energy consumption (kWh/year).
*   **Interactivity:** Includes custom filter buttons (All, LED, LCD, OLED) that allow users to filter the dataset by screen technology.
*   **Animation:** Uses `d3.transition` to smoothly animate and update the histogram bars (height and y-position) when a filter is applied.

### 2. Interactive Scatterplot (Tooltips & Color Coding)
*   Plots **Star Rating** (x-axis) vs. **Screen Size** (y-axis).
*   **Color Scale:** Uses a categorical color scale (`d3.schemeCategory10`) to distinguish different screen technologies (LED, LCD, OLED).
*   **Interactivity (Tooltips):** Features a custom, hidden tooltip that appears dynamically when hovering over a data point (`mouseenter` and `mouseleave` events). The tooltip tracks the mouse position and displays the exact screen size of the hovered TV.
*   **Legend:** Includes a clear color legend to identify the screen technologies.

## 📂 Project Structure

To maintain clean and modular code, the project follows the inner-chart margin convention and separates concerns into multiple JavaScript files:

*   `index.html`: The main structural layout holding the chart containers and filter buttons.
*   `css/`: Contains styling for the dashboard layout (`base.css`) and specific SVG elements (`visualisations.css`).
*   `data/`: Contains the cleaned dataset (`Ex6_TVdata.csv`).
*   `js/shared-constants.js`: Stores global variables, dimensions, shared scales (`xScale`, `yScale`), and the `d3.bin()` generator.
*   `js/histogram.js`: Contains the logic to draw the initial histogram and its axes.
*   `js/scatterplot.js`: Contains the logic to draw the scatterplot, color scales, and legend.
*   `js/interactions.js`: Handles all DOM events, including filter button clicks, histogram data updates/transitions, and tooltip mouse events.
*   `js/load-data.js`: The entry point that loads the CSV data, converts string values to numbers, and triggers the rendering functions.
