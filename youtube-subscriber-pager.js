let savedSubs = [];
let totalRunningTime = 0;
let isEnd = false;
let counter = 0;

function executeNext() {
    let btnNext = document.querySelector('ytcp-icon-button#navigate-after:not([disabled])');
    if (btnNext) {
        btnNext.click();
        return true;
    } else {
        return false;
    }
}

function getAllSubsOnPage() {
    document.querySelectorAll('.subscriber-info-name').forEach(e=> {
        console.log(e.textContent);
        savedSubs.push(e.textContent);
    });
    localStorage['az-subs'] = savedSubs;
}

function runPager() {
    console.log(counter);
    getAllSubsOnPage();
    let ret = executeNext();
    isEnd = !ret;
    counter++;
    if (!isEnd) {
        setTimeout(runPager, Math.random() * 1000 + 2000);
    } else {
        console.log('end');
    }
}
  
runPager();
