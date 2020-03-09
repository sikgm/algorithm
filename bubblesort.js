let input = [];

const createInput = () => {
    for(let i = 0;i < 15;i++) input.push(Math.floor(Math.random() * Math.floor(40)));
};

const bubblesort = (input) => {
    let sortedIndex = 0;
    while(sortedIndex <= input.length){
        let i = input.length;
        while(0 < i && sortedIndex <= input.length){
            if(input[i - 1] > input[i]){
                const tmp = input[i - 1];
                input[i - 1] = input[i];
                input[i] = tmp;
            }
            i--;
        }
        sortedIndex++;
    }
};
const main = () =>{
    createInput();
    console.log(input);
    bubblesort(input);
    console.log(input);
};
main();