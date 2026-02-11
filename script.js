// Select the increase button
let inc = document.querySelector('#inc');

// Select the decrease button
let dec = document.querySelector('#dec');

// Select the h2 element (counter display)
let h2 = document.querySelector('h2');

// Initialize counter variable
let a = 0;

// Add click event to increase button
inc.addEventListener('click', function () {
    a++;                // Increase value by 1
    h2.innerHTML = a;   // Update the counter display
});

// Add click event to decrease button
dec.addEventListener('click', function () {
    a--;                // Decrease value by 1
    h2.innerHTML = a;   // Update the counter display
});
