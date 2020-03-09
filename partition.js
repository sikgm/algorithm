let input = [];

const createInput = () => {
    for(let i = 0;i < 10;i++) input.push(Math.floor(Math.random() * Math.floor(40)));
};
createInput();

const swap = (arr,from,to) =>{
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
};

const partition = () => {
    let smallerIndex = 0;
    const basis = input[input.length - 1];

    console.log(input);

    for(let i = 0;i < input.length;i++){
        if(input[i] <= basis){
            swap(input,i,smallerIndex);
            smallerIndex++;
        }
    }
    console.log(input);
};
partition();