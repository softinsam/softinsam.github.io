async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  const numBars = bars.length;

  for (let i = 0; i < numBars - 1; i++) {
    for (let j = 0; j < numBars - i - 1; j++) {
      bars[j].style.backgroundColor = 'yellow';
      bars[j + 1].style.backgroundColor = 'yellow';
      await sleep(100);

      const height1 = parseInt(bars[j].style.height);
      const height2 = parseInt(bars[j + 1].style.height);

      if (height1 > height2) {
        await swapBars(bars, j, j + 1);
      }

      bars[j].style.backgroundColor = '#2196F3';
      bars[j + 1].style.backgroundColor = '#2196F3';
    }

    bars[numBars - i - 1].style.backgroundColor = 'green';
  }
  bars[0].style.backgroundColor = 'green';
}

async function swapBars(bars, idx1, idx2) {
  await sleep(300); 

  const temp = bars[idx1].style.height;
  bars[idx1].style.height = bars[idx2].style.height;
  bars[idx2].style.height = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startSorting() {
  bubbleSort();
}

function generateBars() {
  const barsContainer = document.getElementById('bars');
  const numBars = 10;

  for (let i = 0; i < numBars; i++) {
    const height = Math.floor(Math.random() * 200) + 20;
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = height + 'px';
    barsContainer.appendChild(bar);
  }
}

function initialize() {
  generateBars();
}

initialize();
