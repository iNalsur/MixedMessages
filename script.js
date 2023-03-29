const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber)

const quoteLogger = (number) => {
    if (number === 0) {
        return "No matter how much you shake your pipi, one drop in your underpants. - Jason Statham"
    } else if (number === 1) {
        return "We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein"
    } else if (number === 2) {
        return "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi"
    } else if (number === 3) {
        return "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain"
    } else if (number === 4) {
        return "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. — Eleanor Roosevelt"
    } else if (number === 5) {
        return "When you change your thoughts, remember to also change your world. — Norman Vincent Peale"
    } else if (number === 6) {
        return "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. — Walter Anderson"
    } else if (number === 7) {
        return "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. — Diane McLaren"
    } else if (number === 8) {
        return "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill"
    } else if (number === 9) {
        return "It is better to fail in originality than to succeed in imitation. — Herman Melville"
    } else if (number === 10) {
        return "The road to success and the road to failure are almost exactly the same. — Colin R. Davis"
    }
}

console.log(quoteLogger(randomNumber));