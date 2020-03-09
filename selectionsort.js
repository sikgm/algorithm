let input = [];

const createInput = () => {
    for(let i = 0;i < 15;i++) input.push(Math.floor(Math.random() * Math.floor(40)));
}

const selectionsort = input => {
    for(let i = 0;i < input.length;i++){
        let min = 999999999999999;
        let minIndex = 0;
        for(let j = i;j < input.length;j++){
            if(input[j] < min){
                min = input[j];
                minIndex = j;
            }
        }
        const tmp = input[i];
        input[i] = min;
        input[minIndex] = tmp;
    }
}

const main = () => {
    createInput();
    console.log(input);
    selectionsort(input);
    console.log(input);
}
main();