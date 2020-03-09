let input = [];

const createInput = () => {
    for(let i = 0;i < 100;i++) input.push(Math.floor(Math.random() * Math.floor(40)));
};

const swap = (arr,from,to) =>{
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
};

const partition = (input,from,to) => {
    let smallerIndex = from;
    const basis = input[to];

    for(let i = from;i <= to;i++){
        if(input[i] <= basis){
            swap(input,i,smallerIndex);
            smallerIndex++;
        }
    }
    
    return smallerIndex - 1;
};

const quicksort = (input,from,to) => {
    if(to <= from){
        return;
    }
    const basis = partition(input,from,to);
    quicksort(input,from,basis - 1);
    quicksort(input,basis + 1,to);
};

const main = () => {
    createInput();
    console.log(input);
    quicksort(input,0,input.length - 1);
    console.log(input);
};

main();