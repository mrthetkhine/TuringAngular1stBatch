class Listener<T> {
    public update: (message: T) => void;
    public constructor(fn: (message: T) => void) {
        this.update = fn;
    }
}
class Producer<T> {
    private _listeners: Listener<T>[] = [];
    public add(listener: Listener<T>) {
        this._listeners.push(listener);
    }
    public remove(listener: Listener<T>) {
        this._listeners = this._listeners.filter(
            l => l !== listener
        );
    }
    public notify(message: T) {
        this._listeners.forEach(
            l => l.update(message)
        );
    }
}
const view1 = new Listener(
    (msg: string) => console.log(`View 1: Change ${msg}`)
);
const view2 = new Listener(
    (msg: string) => console.log(`View 2: Change ${msg}`)
);
const model = new Producer<string>();
model.add(view1);
model.add(view2);
model.notify("Hello World!");