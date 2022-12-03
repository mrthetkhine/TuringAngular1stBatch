import * as R from 'ramda';
const person = {
  name: 'Randy',
  
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman'
  }
}
//console.log(person.socialMedia.github);
console.log('Prop ',R.prop('name')(person));
console.log("Set ",R.assoc('a', 3, {a: 1, b: 2}));

 
const nameLens = R.lens(R.prop('name'), R.assoc('name'));
const twitterLens = R.lens(
  R.path(['socialMedia', 'twitter']),
  R.assocPath(['socialMedia', 'twitter'])
)
console.log("Twitter lens get ", R.view(twitterLens,person));

let printUpperCaseTwitterName = R.pipe(
                                R.view(twitterLens),
                                R.toUpper);
console.log(`UpperCase twitter name `,printUpperCaseTwitterName(person));