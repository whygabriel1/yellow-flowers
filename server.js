const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Siempre servimos el archivo de las flores amarillas
    let filePath = path.join(__dirname, 'index.html');
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error interno del servidor. No se encontro el archivo.');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🌻 Servidor de Flores Amarillas activo 🌻`);
    console.log(`=========================================`);
    console.log(`Accede a tu página en: http://localhost:${PORT}/`);
    console.log(`Presiona Ctrl+C para detener el servidor.`);
});
