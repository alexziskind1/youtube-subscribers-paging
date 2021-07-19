function execute() {
    let btnNext = document.querySelector('ytcp-icon-button#navigate-after:not([disabled])');
    if (btnNext) {
        btnNext.click();
        return true;
    } else {
        return false;
    }
}

let totalRunningTime = 0;
let isEnd = false;
let counter = 0;

function runPager() {
    console.log(counter);
    let ret = execute();
    isEnd = !ret;
    counter++;
    if (!isEnd)
        setTimeout(runPager, Math.random() * 1000 + 2000);
}
  
runPager();
