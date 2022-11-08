type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};
   
type FeatureOptions = OptionsFlags<FeatureFlags>;
let flag : FeatureOptions = {
    darkMode : false,
    newUserProfile : true,
}
console.log("Flag ",flag);