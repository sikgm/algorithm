let input = [];

const createInput = () => {
    for(let i = 0;i < 20;i++) input.push(Math.floor(Math.random() * Math.floor(40)));
};

const insertsort = () => {
    for(let sortedIndex = 0;sortedIndex < input.length;sortedIndex++){
        let baseValue = input[sortedIndex];
        for(let i = 0;i < sortedIndex;i++){
            if(baseValue < input[i]){
                for(let j = 0;j < sortedIndex && baseValue < input[(sortedIndex - j) - 1] ;j++){
                    input[sortedIndex - j] = input[(sortedIndex - j) - 1];
                }
                input[i] = baseValue;
                break;
            }
        }
    }
}

const main = () =>{
    createInput();
    console.log(input)
    insertsort();
    console.log(input)
}

main();