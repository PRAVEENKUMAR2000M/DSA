const url = "https://jsonplaceholder.typicode.com/posts";

let obj;
const mainDiv = document.getElementById("main");

// Create and append input field
const inputField = document.createElement("input");
// inputField.setAttribute("type", "text");
// inputField.setAttribute("placeholder", "Search by title...");
mainDiv.appendChild(inputField);

const populate = (data) => {
    mainDiv.innerHTML = '';  // Clear the mainDiv before repopulating
    mainDiv.appendChild(inputField);  // Re-add the input field after clearing mainDiv

    console.log(data);

    // Create table element
    const table = document.createElement("table");
    table.classList.add("styled-table"); // Add class to the table

    // Create table headers based on keys of the first object
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Create table rows based on the data
    data.forEach(item => {
        const row = document.createElement("tr");

        headers.forEach(header => {
            const td = document.createElement("td");
            td.textContent = item[header];
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    // Append the table to the mainDiv
    mainDiv.appendChild(table);
};

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        obj = data;
        populate(obj);

        // Add event listener to the input field
        inputField.addEventListener("input", (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredData = obj.filter(item => item.title.toLowerCase().includes(searchTerm));
            populate(filteredData);
        });

        return data;
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
