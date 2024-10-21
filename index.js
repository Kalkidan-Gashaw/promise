//#1.
function delay(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('The promise will be executed after ' + ms + ' milliseconds');
        }, ms);
    });

    return promise; 
}

delay(1000).then(value => {
    console.log(value);
});
//w#2.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const Num = Math.floor(Math.random() * 100) + 1;
            resolve(Num);
        }, 2000);
    });
}


fetchData().then((Number) => {
    console.log('Random number:', Number);
});
//#3.
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data processed:', processData);
            resolve(processData * 2);
        }, 1000);
    });
}


processData(5).then((result) => {
    console.log('Data multiplied by 2:', result);
});
//#5.
fetchData()
    .then((fetchedData) => {
        console.log('Data fetched:', fetchedData);
        return processData(fetchedData);
    })
    .then((processedData) => {
        console.log('Data processed and multiplied by 2:', processedData);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

  