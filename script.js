document.getElementById("bmiForm").addEventListener('submit', function(e){

    e.preventDefault();  // Prevent form submission and page reload

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightFeet && heightInches && weight) {  // Check all fields are filled

        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;  // Convert height to meters
        const bmi = weight / (heightInMeters * heightInMeters);  // BMI formula
        const resultElement = document.getElementById("result");

        let category = '';

        // Determine BMI category
        if(bmi < 18.5) {
            category = 'Underweight';
        } else if(bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
        } else if(bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Prepare result message
        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        // To Display the result
        resultElement.innerHTML = resultMessage;  // Fixed innerHTML assignment

    } else {
        alert("Please fill out all the fields correctly.");  // Alert if any field is missing
    }

});
