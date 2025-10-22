const cluster  = require('cluster');
const os = require('os');
const express = require('express');

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);

    for(let i = 0; i < totalCPUs; i++){
        cluster.fork();
    }
}else{
    const app = express();
    app.get('/', (req, res) => {
        res.send(`hello from process ${process.pid}`);
    });
    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}