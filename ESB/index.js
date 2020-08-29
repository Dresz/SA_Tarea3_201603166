var express = require('express')
var app = express()
const axios = require('axios')

app.post('/pedido', function (req, res) {
    pedido = req.body.combo
    console.log('Orden recibida: '+pedido)
    setTimeout(function2, 1000);
    res.send('recibido, empezaremos a preparar la orden')
  })

  app.listen(8082, function () {
    console.log('app listening on port 8082!')
  })