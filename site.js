const express = require('express');
const app = express();

// Serves static site
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})