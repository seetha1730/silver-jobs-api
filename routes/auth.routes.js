const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

// Handle form submission
app.post('/signup', (req, res) => {
    const signupOption = req.body.signupOption;

    if (signupOption === 'worker') {
        // Handle worker signup
        res.send('You chose "I WANT TO WORK". Worker signup logic goes here.');
    } else if (signupOption === 'employer') {
        // Handle employer signup
        res.send('You chose "I\'M LOOKING FOR STAFF". Employer signup logic goes here.');
    } else {
        // Handle invalid option
        res.status(400).send('Invalid signup option');
    }
});

// Serve login page
app.get('/login', (req, res) => {
    res.send('Login page'); // Replace this with your actual login page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
