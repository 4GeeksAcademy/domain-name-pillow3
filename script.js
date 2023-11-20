// 4GeeksAcademy
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.es'];

// My Code
function domain(){
    for(let p = 0; p < pronoun.length; p++){
        for(let a = 0; a < adj.length; a++){
            for(let n = 0; n < noun.length; n++){
                console.log(pronoun[p]+adj[a]+noun[n]+'.com')
            }
        }
    }
}

domain()


// thegreatjogger.com -- 1
// thegreatracoon.com -- 2
// ourgreatjogger.com -- 3
// ourgreatracoon.com -- 4
// thebigjogger.com -- 5
// thebigracoon.com -- 6
// ourbigjogger.com -- 7
// ourbigracoon.com -- 8