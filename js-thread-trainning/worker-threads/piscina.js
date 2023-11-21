const Piscina = require('piscina');
const assert = require('assert');
const { once } = require('events');

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({ filename: __filename, maxQueue: 'auto' });
  (async () => {
    for (let i = 0; i < 100000; i++) {
      if (piscina.queueSize === piscina.options.maxQueue) {
        await once(piscina, 'drain');
      }
      piscina.run(i).then((ans) => {
        if (typeof ans === 'number') {
          console.log(ans);
        }
      });
    }
  })();
}

module.exports = (num) => Math.sqrt(num);
