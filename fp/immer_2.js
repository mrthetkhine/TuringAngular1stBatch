const immer =require("immer");
const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

const nextState =immer.produce(baseState, draftState => {
    draftState.push({title: "Tweet about it"})
    draftState[1].done = true
});
baseState[1].title = 'Change';
console.log('nextState ',nextState);
console.log('baseState ',baseState);