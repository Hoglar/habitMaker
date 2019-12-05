'use strict';
// Vi lager en funksjon som gir tilbake en random short text.

// Guess we only need an array?

const shortQuotes = [
    {
        text: "You can totally do this",
        author: "unknown"
    },
    {
        text: "Impossible is for the unwilling",
        author: "John Keats"
    },
    {
        text: "No pressure, no diamonds",
        author: "Thomas Carlyle"
    },
    {
        text: "Stay foolish to stay sane",
        author: "Maxime Lagacé"
    },
    {
        text: "When nothing goes right, go left",
        author: "unknown"
    },
    {
        text: "Try Again. Fail again. Fail better",
        author: "Samuel Beckett"
    },
    {
        text: "Don’t tell people your plans. Show them your results",
        author: "unknown"
    },
    {
        text: "I can and I will",
        author: "unknown"
    },
    {
        text: "Take the risk or lose the chance",
        author: "unknown"
    },
    {
        text: "Prove them wrong",
        author: "unknown"
    },
    {
        text: "And so the adventure begins",
        author: "unknown"
    },
    {
        text: "Leave no stone unturned",
        author: "Euripides"
    },
    {
        text: "Stay hungry. Stay foolish",
        author: "Steve Jobs"
    },
    {
        text: "Broken crayons still color",
        author: "unknown"
    },
    {
        text: "If you want it, work for it",
        author: "unknown"
    },
    {
        text: "You can if you think you can",
        author: "George Reeves"
    },
    {
        text: "Whatever you are, be a good one",
        author: "Abraham Lincoln"
    },
    {
        text: "Grow through what you go through",
        author: "unknown"
    },
    {
        text: "Do it with passion or not at all",
        author: "unknown"
    },
    {
        text: "She believed she could, so she did",
        author: "unknown"
    },
    {
        text: "The past does not equal the future",
        author: "Tony Robbins"
    },
    {
        text: "Good things happen to those who hustle",
        author: "Anaïs Nin"
    },
    {
        text: "At the end of hardship comes happiness",
        author: "unknown"
    },
    {
        text: "If it matters to you, you’ll find a way",
        author: "Charlie Gilkey"
    },
    {
        text: "Forget about style; worry about results",
        author: "Bobby Orr"
    },
    {
        text: "Whatever you do, do with all your might",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "Dream without fear. Love without limits",
        author: "unknown"
    },
    {
        text: "Every noble work is at first impossible",
        author: "Thomas Carlyle"
    },
    {
        text: "If you’re going through hell, keep going",
        author: "Winston Churchill"
    },
    {
        text: "You can do anything you set your mind to",
        author: "unknown"
    },
    {
        text: "We are twice armed if we fight with faith",
        author: "Plato"
    },
    {
        text: "The wisest mind has something yet to learn",
        author: "George Santanaya"
    },
    {
        text: "Open your mind. Get up off the couch. Move",
        author: "Anthony Bourdain"
    },
    {
        text: "Be faithful to that which exists within yourself",
        author: "André Gide"
    },
    {
        text: "Persistence guarantees that results are inevitable",
        author: "Paramahansa Yogananda"
    },
    {
        text: "In life you need either inspiration or desperation",
        author: "Tony Robbins"
    },
    {
        text: "I would rather die on my feet than live on my knees",
        author: "Euripides"
    },
    {
        text: "The true success is the person who invented himself",
        author: "Al Goldstein"
    },
    {
        text: "Let him that would move the world first move himself",
        author: "Socrates"
    },
    {
        text: "Go forth on your path, as it exists only through your walking",
        author: "Augustine of Hippo"
    },
    {
        text: "We can do anything we want to if we stick to it long enough",
        author: "Helen Keller"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop",
        author: "Confucius"
    },
    {
        text: "Fall seven times, stand up eight",
        author: "Japanese proverb"
    },
    {
        text: "Actually, you can",
        author: ""
    },
    {
        text: "Yes! Yes! You can do it!",
        author: ""
    },
    {
        text: "Focus on the good",
        author: ""
    },
    {
        text: "You are doing great",
        author: ""
    },
    {
        text: "We rise by lifting others",
        author: ""
    },
    {
        text: "Be happy. Be bright. Be you",
        author: ""
    },
    {
        text: "You are amazing. Remember that",
        author: ""
    },
    {
        text: "Focus on the journey, not the destination",
        author: "Greg Anderson"
    },
    {
        text: "Believe you can and you’re halfway there",
        author: "Theodore Roosevelt"
    },
    {
        text: "Once you choose hope, anything’s possible",
        author: "Christopher Reeve"
    },
    {
        text: "You make mistakes. Mistakes don’t make you",
        author: ""
    },
    {
        text: "Breathe. It’s just a bad day, not a bad life",
        author: ""
    },
    {
        text: "Start every day off with a smile and get it over with",
        author: "W. C. Fields"
    },
    {
        text: "It’s okay to not be okay as long as you are not giving up",
        author: ""
    },
    {
        text: "If you feel like giving up, look back at how far you’ve come",
        author: ""
    },
    {
        text: "Every day may not be good but there is something good in every day",
        author: ""
    },
    {
        text: "Don’t go through life, grow through life",
        author: "Eric Butterworth"
    },
    {
        text: "A problem is a chance for you to do your best",
        author: "Duke Ellington"
    },
    {
        text: "Go!",
        author: ""
    },
    {
        text: "Love",
        author: ""
    },
    {
        text: "Begin",
        author: ""
    },
    {
        text: "Let go",
        author: ""
    },
    {
        text: "Breathe",
        author: ""
    },
    {
        text: "Slow down",
        author: ""
    },
    {
        text: "Let it be",
        author: ""
    },
    {
        text: "Go for it",
        author: ""
    },
    {
        text: "I love you",
        author: ""
    },
    {
        text: "Keep going",
        author: ""
    },
    {
        text: "Choose joy",
        author: ""
    },
    {
        text: "Enjoy today",
        author: ""
    },
    {
        text: "C’est la vie",
        author: ""
    },
    {
        text: "Choose happy",
        author: ""
    },
    {
        text: "Keep it cool",
        author: ""
    },
    {
        text: "Take it easy",
        author: ""
    },
    {
        text: "Be in the now",
        author: ""
    },
    {
        text: "Live the moment",
        author: ""
    },
    {
        text: "Choose to shine",
        author: ""
    },
    {
        text: "It is what it is",
        author: ""
    },
    {
        text: "Don’t rush things",
        author: ""
    },
    {
        text: "Never stop dreaming",
        author: ""
    },
    {
        text: "Keep moving forward",
        author: ""
    },
    {
        text: "Dust settles. I don’t",
        author: ""
    },
    {
        text: "Nothing lasts forever",
        author: ""
    },
    {
        text: "Feel the fear and do it anyway",
        author: ""
    },
    {
        text: "Life is too short to learn German",
        author: "Oscar Wilde"
    },
    {
        text: "Do crabs think we walk sideways?",
        author: "Bill Murray"
    },
    {
        text: "Don’t be humble, you’re not that great",
        author: "Indira Gandhi"
    },
    {
        text: "I intend to live forever. So far, so good",
        author: "Steven Wright"
    },
    {
        text: "My life feels like a test I didn’t study for",
        author: ""
    },
    {
        text: "This suspense is terrible. I hope it will last",
        author: "Oscar Wilde"
    },
    {
        text: "I drive way too fast to worry about cholesterol",
        author: "Steven Wright"
    },
    {
        text: "A day without sunshine is like, you know, night",
        author: "Steve Martin"
    },
    {
        text: "In heaven, all the interesting people are missing",
        author: "Friedrich Nietzsche"
    },
    {
        text: "The last woman I was in was the Statue of Liberty",
        author: "Woddy Allen"
    },
    {
        text: "Women want love to be a novel. Men, a short story",
        author: "Daphne du Maurier"
    },
    {
        text: "Guests, like fish, begin to smell after three days",
        author: "Benjamin Franklin"
    },
    {
        text: "Go to Heaven for the climate, Hell for the company",
        author: "Mark Twain"
    },
    {
        text: "Every novel is a mystery novel if you never finish it",
        author: ""
    },
    {
        text: "Why is the slowest traffic of the day called ‘rush hour’?",
        author: ""
    },
    {
        text: "It’s easy to quit smoking. I’ve done it hundreds of times",
        author: "Mark Twain"
    },
    {
        text: "The risk I took was calculated, but man, I am bad at math",
        author: ""
    },
    {
        text: "I couldn’t repair your brakes, so I made your horn louder",
        author: "Steven Wright"
    },
    {
        text: "Do not read the next sentence. You little rebel, I like you",
        author: ""
    },
    {
        text: "Just when I discovered the meaning of life, they changed it",
        author: "George Carlin"
    },
    {
        text: "Always borrow money from a pessimist. He won’t expect it back",
        author: "Oscar Wilde"
    },
    {
        text: "I love deadlines. I love the whooshing noise they make as they go by",
        author: "Douglas Adams"
    },
    {
        text: "I never feel more alone than when I’m trying to put sunscreen on my back",
        author: "Jimmy Kimmel"
    },
    {
        text: "Those are my principles, and if you don’t like them… well, I have others",
        author: "Groucho Marx"
    },
    {
        text: "The key to eating healthy is not eating any food that has a TV commercial",
        author: "Mike Birbiglia"
    },
    {
        text: "I’ve got to keep breathing. It’ll be my worst business mistake if I don’t",
        author: "Steve Martin"
    },
    {
        text: "There are three types of people in this world: those who can count, and those who can’t",
        author: ""
    },
    {
        text: "The closest a person ever comes to perfection is when he fills out a job application form",
        author: ""
    },
    {
        text: "No rain. No flowers",
        author: ""
    },
    {
        text: "Shine like the stars",
        author: ""
    },




    // Part 2 Short uplifting
]

export default shortQuotes;
