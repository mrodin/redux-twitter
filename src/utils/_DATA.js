let users = {
  bark_twain: {
    id: "bark_twain",
    name: "Bark Twain",
    avatarURL: "https://raw.githubusercontent.com/mrodin/redux-twitter/master/src/assets/img/bark_twain.jpg",
    tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
  },
  doc_mcdoggins: {
    id: "doc_mcdoggins",
    name: "Doc McDoggins",
    avatarURL: "https://raw.githubusercontent.com/mrodin/redux-twitter/master/src/assets/img/doc_mcdoggins.jpg",
    tweets: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
  },
  salvador_dogi: {
    id: "salvador_dogi",
    name: "Salvador Dogi",
    avatarURL: "https://raw.githubusercontent.com/mrodin/redux-twitter/master/src/assets/img/salvador_dogi.jpg",
    tweets: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
  }
}

let tweets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text: "i found a really good stick. but i chewed it too hard. and it broke in half. which was disappointing until i realized. now i have two sticks. today has been. an emotional roller coaster",
    author: "bark_twain",
    timestamp: 1518122597860,
    likes: ['doc_mcdoggins'],
    replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
    replyingTo: null,
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    text: "the human seems distracted. so i put my paw on their knee. and now they know. that whatever it is. we’re in it together",
    author: "doc_mcdoggins",
    timestamp: 1518043995650,
    likes: ['bark_twain', 'salvador_dogi'],
    replies: ['njv20mq7jsxa6bgsqc97'],
    replyingTo: null,
  },
  "f4xzgapq7mu783k9t02ghx": {
    id: "f4xzgapq7mu783k9t02ghx",
    text: "i have a toy that looks like a cupcake. and sometimes. i squeak it very loud. for a very long time. i don’t mean to be annoying. i was in the zone",
    author: "doc_mcdoggins",
    timestamp: 1517043995650,
    likes: ['salvador_dogi'],
    replies: [],
    replyingTo: null,
  },
  "hbsc73kzqi75rg7v1e0i6a": {
    id: "hbsc73kzqi75rg7v1e0i6a",
    text: "THE GARAGE DOOR IS OPENING. THE HUMAN IS HOME. THE WEEKEND HAS BEGUN. PLEASE HELP. I CAN’T STOP SPINNING",
    author: "bark_twain",
    timestamp: 1516043995650,
    likes: ['doc_mcdoggins'],
    replies: ['leqp4lzfox7cqvsgdj0e7', 'sfljgka8pfddbcer8nuxv'],
    replyingTo: null,
  },
  "5w6k1n34dkp1x29cuzn2zn": {
    id: "5w6k1n34dkp1x29cuzn2zn",
    text: "my stuffed fren sebastian. is being washed as we speak. the time apart can be lonely. but i can be patient. for when he emerges from the dryer. he’ll be super toasty",
    author: "salvador_dogi",
    timestamp: 1515043995650,
    likes: ['bark_twain'],
    replies: [],
    replyingTo: null,
  },
  "czpa59mg577x1oo45cup0d": {
    id: "czpa59mg577x1oo45cup0d",
    text: "my reflection has never fooled me. that couldn’t be another dog. nobody else. is so good looking",
    author: "salvador_dogi",
    timestamp: 1515043995650,
    likes: ['doc_mcdoggins', 'bark_twain'],
    replies: ['3sklxkf9yyfowrf0o1ftbb'],
    replyingTo: null,
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    text: "gooooob morning. i spotted the human. secretly putting a piece of pancake in my bowl. so the next time i get a drink. boom. surprise pancake. i am eternally grateful",
    author: "bark_twain",
    timestamp: 1514043995650,
    likes: ['salvador_dogi'],
    replies: ['26p5pskqi88i58qmza2gid'],
    replyingTo: null,
  },
  "nnvkjqoevs8t02lzcc0ky": {
    id: "nnvkjqoevs8t02lzcc0ky",
    text: "the human was planning on going out tonight. but i sat in front of the door. and made eye contact once. so now we’re watching movies",
    author: "doc_mcdoggins",
    timestamp: 1513043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "omdbjl68fxact38hk7ypy6": {
    id: "omdbjl68fxact38hk7ypy6",
    text: "i was only outside for a minute. when a snowflake landed on my nose. i hurried inside. to show my stuffed fren sebastian. but by the time i found him. my wintery pal was gone",
    author: "salvador_dogi",
    timestamp: 1512043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    text: "i have performed my final security lap. around the household. i’m happy to report. snoozles are a goTalking less about the downsides of OSS and focusing on some of the huge potential upsides for once might just help get more people into it.",
    author: "doc_mcdoggins",
    timestamp: 1511043995650,
    likes: ['salvador_dogi'],
    replies: [],
    replyingTo: null,
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    text: "sometimes. i lie down during a walk. and refuse to get up. so the human has no choice. but to spend more time with meBy the way, if you have a blog post sitting around and want to get some eyes on it, we take guest submissions! That's how I started.",
    author: "bark_twain",
    timestamp: 1510043995650,
    likes: ['salvador_dogi', 'doc_mcdoggins'],
    replies: ['xi3ca2jcfvpa0i3t4m7ag', 'r0xu2v1qrxa6ygtvf2rkjw'],
    replyingTo: null,
  },
  "fap8sdxppna8oabnxljzcv": {
    id: "fap8sdxppna8oabnxljzcv",
    author: "doc_mcdoggins",
    text: "i sometimes rescue sticks from the kindling basket. this is not stealing because. dad burns em up an they need to be. saved. i am like spiderdog. or maybe. Puperman.",
    timestamp: 1518122677860,
    likes: ['bark_twain'],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "3km0v4hf1ps92ajf4z2ytg": {
    id: "3km0v4hf1ps92ajf4z2ytg",
    author: "salvador_dogi",
    text: "You can have mine, but I'm having troubles getting it through the gate. There must be some magic spell preventing me from entering with sticks",
    timestamp: 1518122667860,
    likes: [],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "njv20mq7jsxa6bgsqc97": {
    id: "njv20mq7jsxa6bgsqc97",
    author: "salvador_dogi",
    text: "today. mom was using bad words an at first i thought it was me (cause that happens) an i hung my head an slunked outta the room. but it was the dumbprinter an mom felt so bad that i thought it was me.she came after me an gave me a hug. so that works too.",
    timestamp: 1518044095650,
    likes: ['doc_mcdoggins'],
    replyingTo: "5c9qojr2d1738zlx09afby",
    replies: [],
  },
  "leqp4lzfox7cqvsgdj0e7": {
    id: "leqp4lzfox7cqvsgdj0e7",
    author: "doc_mcdoggins",
    text: "my humans are retired which means they wanted to spend alla their time with the dog! (and a little with my kitten frens and my brother the horse) but that doesnt mean i dont spin a few times i mean they leave the house to take out the trash an stuff.",
    timestamp: 1516043255650,
    likes: [],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "sfljgka8pfddbcer8nuxv": {
    id: "sfljgka8pfddbcer8nuxv",
    author: "salvador_dogi",
    text: "Hear garage door open. Must bring hooman shoes. To explore. The neighborhood.",
    timestamp: 1516045995650,
    likes: ['bark_twain', 'doc_mcdoggins'],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "3sklxkf9yyfowrf0o1ftbb": {
    id: "3sklxkf9yyfowrf0o1ftbb",
    author: "bark_twain",
    text: "my mom paints dog portraits and she says it isnt too hard because all poodles look like poodles and all boxers look like boxers, hahaha on her. not to other boxers or other poodles. an for sure. you are. not like any other doggo an you are gorgeous.",
    timestamp: 1515044095650,
    likes: ['salvador_dogi'],
    replyingTo: "czpa59mg577x1oo45cup0d",
    replies: [],
  },
  "26p5pskqi88i58qmza2gid": {
    id: "26p5pskqi88i58qmza2gid",
    author: "doc_mcdoggins",
    text: "not a goob morning today. bad news i'm afraid. i saw the dog doc this morning an she said that i am too chubby which i am not. she said no more pancakes surprise or otterwise. i am not going to eat any stupid carrot.",
    timestamp: 1514044994650,
    likes: ['bark_twain'],
    replyingTo: "2mb6re13q842wu8n106bhk",
    replies: [],
  },
  "xi3ca2jcfvpa0i3t4m7ag": {
    id: "xi3ca2jcfvpa0i3t4m7ag",
    author: "doc_mcdoggins",
    text: "i. used to do this. when i was. a fuzzball. i have since learned. it is more fun. to keep walking and go. on an. adventure. sometimes. i find really great rocks. on my adventures. with. the human. sometimes. i go to the store. that. is a really big. adventure",
    timestamp: 1510043995650,
    likes: [],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
  "r0xu2v1qrxa6ygtvf2rkjw": {
    id: "r0xu2v1qrxa6ygtvf2rkjw",
    author: "salvador_dogi",
    text: "Sometimes I pretend to hurt my leg on walks so mummy has to carry me home. As soon as I am home I am absolutely fine..I'm just lazy!",
    timestamp: 1510044395650,
    likes: ['doc_mcdoggins'],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
  "i7agqs93bahsysv5ielju": {
    id: "i7agqs93bahsysv5ielju",
    author: "bark_twain",
    text: "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
    timestamp: 1548504601180,
    likes: ['doc_mcdoggins'],
    replyingTo: null,
    replies: ['8zgyu2x0nzenfjns9617in', 'nuyot7b5yhi2qcrrcun99h', 'w9r45wf05amcr93dcxe7k', '694bmmwvyhie78z30wzcbd', 'a0w4croe1qui9xepz8xmwk'],
  },
  "8zgyu2x0nzenfjns9617in": {
    id: "8zgyu2x0nzenfjns9617in",
    author: "salvador_dogi",
    text: "Your fren here. noggin bumping transmits love an it goes back and forth and it's called. science.",
    timestamp: 1548505214826,
    likes: [],
    replyingTo: "i7agqs93bahsysv5ielju",
    replies: [],
  },
  "nuyot7b5yhi2qcrrcun99h": {
    id: "nuyot7b5yhi2qcrrcun99h",
    author: "doc_mcdoggins",
    text: "the human knows. they love you very much. as much as that skittle you love. under the fridge.",
    timestamp: 1548505214826,
    likes: ['bark_twain'],
    replyingTo: "i7agqs93bahsysv5ielju",
    replies: [],
  },
  "w9r45wf05amcr93dcxe7k": {
    id: "w9r45wf05amcr93dcxe7k",
    author: "bark_twain",
    text: "they know doggo. they know",
    timestamp: 1548505405109,
    likes: ['doc_mcdoggins'],
    replyingTo: "i7agqs93bahsysv5ielju",
    replies: [],
  },
  "694bmmwvyhie78z30wzcbd": {
    id: "694bmmwvyhie78z30wzcbd",
    author: "doc_mcdoggins",
    text: "I swear it’s more along the lines of “gimme gimme gimme food. Foooooooooooooood. Squirrel?”",
    timestamp: 1548505542832,
    likes: [],
    replyingTo: "i7agqs93bahsysv5ielju",
    replies: [],
  },
  "a0w4croe1qui9xepz8xmwk": {
    id: "a0w4croe1qui9xepz8xmwk",
    author: "salvador_dogi",
    text: "here’s a secret. the human presses their noggin against yours. because they love you.",
    timestamp: 1548505670387,
    likes: [],
    replyingTo: "i7agqs93bahsysv5ielju",
    replies: [],
  },
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getTweets () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...tweets}), 1000)
  })
}

export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: hasLiked === true
            ? tweets[id].likes.filter((uid) => uid !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatTweet ({ author, text, replyingTo = null }) {
  return {
    id: generateUID(),
    author,
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo,
  }
}

export function _saveTweet ({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      author,
      text,
      replyingTo
    })

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet,
      }

      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets.concat([formattedTweet.id])
        }
      }

      res(formattedTweet)
    }, 1000)
  })
}
