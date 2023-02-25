// code your solution here
function saturdayFun(event = 'roller-skate') {
   return `This Saturday, I want to ${event}!`;
}

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("You are *a hard worker*!")
//   });

//   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective("||")
//     let emphatic = result("a dedicated programmer")
//     expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//   });
// })
// })

// Implement a function called `wrapAdjective`:

// - It should return a function. This "inner" function should:
//   - take a single parameter that should default to `"special"`. Name it
//     however you wish.
//   - return a `String` of the form "You are ...!" where `...` should be the
//     adjective this function received wrapped in visual flair.
// - It should take as parameter a `String` that will be used to create visual flair.
// - You may call the parameter whatever you like, but its default value should
//   be `"*"`.
// - Call example: `const encouragingPromptFunction = wrapAdjective("!!!")`

// Thus a total call should be:

// ```js
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
// ```

function wrapAdjective(unique = '*', adj) {
    let newSentence = function (adj = 'special') {
    return  `You are ${unique}${adj}${unique}!`
}
return newSentence;
}
console.log(`*`, "a hard worker")
console.log (`||`, "a dedicated programmer")
console.log()