//For this assignment I utilized the app Insomnia to output my code.


const express = require('express')
const app = express()
const port = 3000
//use post method to output quotes on web page in a random order, one at a time.
var arr = ['Run like your not in a coma!',
'I dont fear the man who practices 10000 kicks 1 time, but I do fear the man who practices 1 kick 10000 times',
'You must never give into despair. Allow yourself to slip down that raod and you surrender to your lowest instintcs. In the darkest times, hope is something you give yourself. That is the meaning of inner strength.',
'I dont run to add days to my life, I run to add life to my days',
'Geth do not intetionally infiltrate.',
'We all make choices, but in  the end our choices make us.',
'The world is against me. It wouldnt be fair otherwise.',
'I find your lack of faith disturbing.',
'I just cant sit back and wallow in my own sorrow but I know one fact: Ill be one tough act to follow',
'I paint my own reality. The only thing I know is that I paint because I need to, and I paint whatever passes through my head without any other consideration.']


app.post('/', function (req, res) {
    
    
           
    var randomNumber = Math.floor(Math.random() * arr.length);
          
            res.send(arr[randomNumber]);
          
            
        
    
    
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))