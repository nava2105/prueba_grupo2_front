const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
