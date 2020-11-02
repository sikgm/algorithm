function make_array(length : number, max : number) : Array<number> {
    const array : Array<number> = [];

    for (let i : number = 0;i < length;i++) {
        array.push(Math.floor(Math.random() * Math.floor(max)));
    }
    return array;
}

function partition1 (array : Array<number>, left : number, right : number) : number {
    let start : number = left + 1;
    let end : number = right;
    const base : number = array[left]; // 基準値は範囲の最初の値とする
    while (true) {
        while (start < right && array[start] < base) start++;
        while (left < end && base <= array[end]) end--;

        if (end <= start) break;

        const tmp : number = array[start];
        array[start] = array[end];
        array[end] = tmp;
        
        start++;
        end--;
    }

    array[left] = array[end];
    array[end] = base;
    return end;
}

function quick_sort(array : Array<number>, left : number, right : number) : void {
    if (left < right) {
        const part : number = partition1(array, left, right);

        quick_sort(array, left, part - 1);
        quick_sort(array, part + 1, right);
    }
}

function main1 () : void {
    const length : number = 10;
    const array = make_array(length, 10);
    quick_sort(array, 0, length - 1);
    console.log(array);
}

main1();
