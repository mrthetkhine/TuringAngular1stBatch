type Bird = {
  birdType : string;
}
type OnlyBoolsAndBird = {
  [key: string]: boolean | Bird;
};
 
const conforms: OnlyBoolsAndBird = {
  del: true,
  rodney: false,
  another:{
    birdType: 'somebird'
  },
};