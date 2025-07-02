interface Person1 {
    name: string;
    age: number;
    email: string
}

type PresonKey = keyof Person1;

let keys: PresonKey = "name";