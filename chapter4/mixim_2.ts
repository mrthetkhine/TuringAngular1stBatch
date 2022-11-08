class Sprite {
  name = "";
  x = 0;
  y = 0;
 
  constructor(name: string) {
    this.name = name;
  }
}
type Constructor = new (...args: any[]) => {};
function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
      // Mixins may not declare private/protected properties
      // however, you can use ES2020 private fields
      _scale = 1;
   
      setScale(scale: number) {
        this._scale = scale;
      }
   
      get scale(): number {
        return this._scale;
      }
    };
}
const EightBitSprite = Scale(Sprite);
 
const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
console.log(flappySprite.x);