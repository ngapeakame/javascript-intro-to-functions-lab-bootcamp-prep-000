function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string===string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string===string.toUpperCase()) {
    return 'YES INDEED!'
  } else if (string==="I love you, Grandma.")
  {
=======
  var lowercase=I
  var uppercase=string.toUpperCase
  if ((lowercase)===lowercase) {
    return 'YES INDEED!'
  }
  else if ((uppercase)===uppercase) {
    return "I can't hear you!"
  }
  else if ((string)==="I love you, Grandma.") {
>>>>>>> 9da01492a5cfc8839fd31b3ace0b008f36b58c57
    return "I love you, too."
  }
}