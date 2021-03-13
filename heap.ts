class Heap<T> {
    public value: Array<T>;

    constructor(arr?: Array<T>) {
        this.value = [];

        for (const value of arr) {
            this.push(value);
        }
    }


    public pop() {
        const top = this.value[0];
        this.value[0] = this.value.pop();

        let parent = 0;
        while (parent * 2 + 1 < this.size()) {
            const left_child = parent * 2 + 1;
            const right_child = parent * 2 + 2;

            let child;
            if (this.value[left_child] > this.value[right_child]) {
                child = right_child;
            } else {
                child = left_child;
            }

            if (this.value[child] < this.value[parent]) {
                this.swap(parent, child);
            } else {
                break;
            }

            parent = child;
        }

        return top;
    }

    public push(value: T) {
        this.value.push(value);

        let child = this.size() - 1;
        let parent = Math.ceil(child / 2) - 1;
        // 今回は昇順
        while (this.value[parent] > this.value[child]) {
            this.swap(parent, child);
            child = parent;
            parent = Math.ceil(parent / 2) - 1;
        }

    }

    private size(): number {
        return this.value.length;
    }

    private swap (origin: number, target: number) {
        const tmp = this.value[origin];
        this.value[origin] = this.value[target];
        this.value[target] = tmp;
    }
}

function main() {
    let h = new Heap<number>([2, 3, 45, 5, 1, 7, 8, 8, 6, 7]);
    console.log(h.pop());
    console.log(h.pop());
    console.log(h.pop());
    console.log(h.pop());
    console.log(h.pop());
    console.log(h.pop());
    console.log(h.pop());
}

main();