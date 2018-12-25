const start = Date.now();

console.log(`%cWorker #${self.name}`, 'color: green');

setTimeout(() => {
    const end = Date.now();
    const diff = (end - start);

    postMessage(`Random data form Worker #${self.name} [${diff}ms]`);
}, Math.pow(Math.E, Math.E * Math.E * Math.random()));
