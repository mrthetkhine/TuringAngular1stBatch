type Human = {
    name: string
}
  
type Doctor = Human & {
    speciality: string
}
/*  
type Doctor =  {
    newProerty: string
}
*/
  
const drSomeOne :Doctor = {
      name : "SomeOne",
      speciality : "General Health",
} 