const http = require('http');
http.createServer((req, res) => {

        //esto es para mostrar el hola mundo en la pagina 
        //  res.write('Hola Mundo');


        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'Yoandi',
            apellidos: 'Jimnez Marichal',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida));


        res.end(); //esto es obligado
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');