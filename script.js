// Get references to the elements
var nummerInput = document.getElementById('nummer');
var maakButton = document.getElementById('maak');
var outputDiv = document.getElementById('output');
var selectBoxesDiv = document.getElementById('selectBoxes');

// Event listener for the "nummer" input
nummerInput.addEventListener('input', function () {
    // Get the selected number
    var selectedNumber = parseInt(nummerInput.value);

    // Update the number of select boxes
    updateSelectBoxes(selectedNumber);
});

// Event listener for the "Maak" button
maakButton.addEventListener('click', function () {
    // Get the selected values
    var selectedNummer = nummerInput.value;
    var selectedValues = getSelectedValues();

    // Display the selected values in the output div
    outputDiv.innerHTML = 'Aantal lagen: ' + selectedNummer + '<br>' + selectedValues.join('<br>');
});

// Function to update the number of select boxes based on the selected number
function updateSelectBoxes(selectedNumber) {
    // Remove existing select boxes
    selectBoxesDiv.innerHTML = '';

    // Add new select boxes based on the selected number
    for (var i = 1; i <= selectedNumber; i++) {
        var materiaalSelect = createSelect('materiaal' + i, ['clear', 'hout', 'metaal']);
        var vormenSelect = createSelect('vormen' + i, ['clear', 'cirkel', 'vierkant', 'driehoek']);

        // Add labels for each set of choices
        var materiaalLabel = document.createElement('label');
        materiaalLabel.textContent = 'Kies materiaal ' + i + ': ';
        selectBoxesDiv.appendChild(materiaalLabel);

        selectBoxesDiv.appendChild(materiaalSelect);

        var vormenLabel = document.createElement('label');
        vormenLabel.textContent = 'Kies vorm ' + i + ': ';
        selectBoxesDiv.appendChild(vormenLabel);

        selectBoxesDiv.appendChild(vormenSelect);
        selectBoxesDiv.appendChild(document.createElement('br'));
    }
}

// Function to create a select element with options
function createSelect(id, options) {
    var select = document.createElement('select');
    select.id = id;

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i];
        option.textContent = options[i];
        select.appendChild(option);
    }

    return select;
}

// Function to get the selected values from all select boxes
function getSelectedValues() {
    var selectedValues = [];
    var selectBoxes = document.querySelectorAll('select');

    selectBoxes.forEach(function (select) {
        selectedValues.push(select.id + ': ' + select.value);
    });

    return selectedValues;
}
