class Circle
{
    #privateData:string = '';
    private _radius:number ;
    constructor(radius:number)
    {
        this._radius = radius;
    }
    set radius(newRadius:number)
    {
        console.log("Setter ",newRadius);
        if(newRadius > 0)
        {
            this._radius = newRadius;
        }
    }
    get area()
    {
        console.log("getter");
        return Math.PI * this._radius * this._radius;
    }
}
let circle = new Circle(3);
//circle._radius = 0;
//circle.#privateData = "Hello";
circle.radius = 100;
console.log("Circle ",circle.area);