
console.log('Master #0'.magenta);

const limit = 4;

const workersResult = [];

function printWorkerResults() {
    if (workersResult.length === limit) {
        console.log('\nPrint data collected by Workers\n'.red);
        console.log(workersResult.map((v) => v.blue).join('\n'));
    }
}

function handleWorker({ data }) {
    workersResult.push(data);
    printWorkerResults();
}

Array.from({ length: limit }).forEach((_, id) => {

    const worker = new Worker('./src/worker.js', { name: id + 1 });
    worker.addEventListener('message', handleWorker);
    worker.addEventListener('error', (error) => {
        console.error(error.message);
    });

});
