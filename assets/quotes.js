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
        text: "No rain. No flowers",
        author: ""
    },
    {
        text: "Shine like the stars",
        author: ""
    },
    {
        text: "Be a voice. Not an echo",
        author: ""
    },
    {
        text: "Every wall is a door",
        author: ""
    },
    {
        text: "Silence is an answer too",
        author: ""
    },
    {
        text: "If youth knew; if age could",
        author: "Sigmund Freud"
    },
    {
        text: "Time is the soul of this world",
        author: "Pythagoras"
    },
    {
        text: "Stars can’t shine without darkness",
        author: ""
    },
    {
        text: "He not busy being born is busy dying",
        author: "Bob Dylan"
    },
    {
        text: "It takes a long time to become young",
        author: "Pablo Picasso"
    },
    {
        text: "Be who you needed when you were young",
        author: ""
    },
    {
        text: "Innocence is courage and clarity both",
        author: "Osho"
    },
    {
        text: "Find what you love and let it kill you",
        author: "Charles Bukowsk"
    },
    {
        text: "Sadness flies away on the wings of time",
        author: "Jean de La Fontaine"
    },
    {
        text: "I am not young enough to know everything",
        author: "Oscar Wilde"
    },
    {
        text: "Life is like the ocean, it goes up and down",
        author: "Vanessa Paradis"
    },
    {
        text: "The eyes are useless when the mind is blind",
        author: ""
    },
    {
        text: "If you’re not confused, you’re not paying attention",
        author: ""
    },
    {
        text: "You’ve gotta know what death is to know life",
        author: "Jack Kevorkian"
    },
    {
        text: "Don’t let yesterday take up too much of today",
        author: "Will Rogers"
    },
    {
        text: "Forgiveness is giving up hope for a better past",
        author: ""
    },
    {
        text: "Be kind to unkind people, they need it the most",
        author: ""
    },
    {
        text: "Solitary trees, if they grow at all, grow strong",
        author: "Winston Churchill"
    },
    {
        text: "Character like a photograph, develops in darkness",
        author: ""
    },
    {
        text: "God provides the wind, but man must raise the sails",
        author: "Augustine of Hippo"
    },
    {
        text: "Enlightenment is when a wave realizes it is the ocean",
        author: ""
    },
    {
        text: "This is your life, and it’s ending one minute at a time",
        author: ""
    },
    {
        text: "Your faith can move mountains and your doubt can create them",
        author: ""
    },
    {
        text: "You have to be odd to be number one",
        author: "Dr. Seuss"
    },
    {
        text: "Please all, and you will please none",
        author: "Aesop"
    },
    {
        text: "The fool wonders, the wise man asks",
        author: "Benjamin Disraeli"
    },
    {
        text: "A smooth sea never made a skillful sailor",
        author: ""
    },
    {
        text: "Pain is inevitable. Suffering is optional",
        author: ""
    },
    {
        text: "A man can’t ride your back unless it’s bent",
        author: "Martin Luther King Jr"
    },
    {
        text: "Don’t raise your voice. Improve your argument",
        author: ""
    },
    {
        text: "Some people are so poor, all they have is money",
        author: "Jack Kerouac"
    },
    {
        text: "All generalizations are false, including this one",
        author: "Mark Twain"
    },
    {
        text: "It’s not what you look at that matters, it’s what you see",
        author: "Henry David Thoreau"
    },
    {
        text: "There is no saint without a past, no sinner without a future",
        author: "Augustine of Hippo"
    },
    {
        text: "So it goes",
        author: "Kurt Vonnegut"
    },
    {
        text: "Life is not fair; get used to it",
        author: "Bill Gates"
    },
    {
        text: "Anything worth doing is worth doing slowly",
        author: "Mae West"
    },
    {
        text: "Don’t wait. Life goes faster than you think",
        author: ""
    },
    {
        text: "Be soft. Do not let the world make you hard",
        author: ""
    },
    {
        text: "Life is too important to be taken seriously",
        author: "Oscar Wilde"
    },
    {
        text: "Life is either a daring adventure or nothing",
        author: "Helen Keller"
    },
    {
        text: "The sole meaning of life is to serve humanity",
        author: "Leo Tolstoy"
    },
    {
        text: "Love the life you live. Lead the life you love",
        author: "Bob Marley"
    },
    {
        text: "Life got to be about more than just solving problems",
        author: "Elon Musk"
    },
    {
        text: "Life isn’t as serious as the mind makes it out to be",
        author: "Eckhart Tolle"
    },
    {
        text: "Life shrinks or expands in proportion to one’s courage",
        author: "Anaïs Nin"
    },
    {
        text: "You only live once, but if you do it right, once is enough",
        author: "Mae West"
    },
    {
        text: "Different doesn’t mean wrong",
        author: ""
    },
    {
        text: "Make yourself a priority",
        author: ""
    },
    {
        text: "I’m currently under construction. Thank you for your patience",
        author: ""
    },
    {
        text: "A happy wife is a happy life",
        author: ""
    },
    {
        text: "Never expect anything. You’ll never be disappointed",
        author: ""
    },
    {
        text: "Enough’ is a feast",
        author: ""
    },
    {
        text: "Joy is the simplest form of gratitude",
        author: "Karl Barth"
    },
    {
        text: "A grateful heart is a magnet for miracles",
        author: ""
    },
    {
        text: "Fair and softly goes far",
        author: "Miguel de Cervantes"
    },
    {
        text: "Do less. Be more",
        author: "Neil Strauss"
    },
    {
        text: "Dreams don’t work unless you do",
        author: ""
    },
    {
        text: "Everything you can imagine is real",
        author: "Pablo Picasso"
    },
    {
        text: "If you give up on your dreams, what’s left?",
        author: "Jim Carrey"
    },
    {
        text: "Good things take time",
        author: ""
    },
    {
        text: "Time eases all things",
        author: "Socrates"
    },
    {
        text: "Don’t wait. The time will never be just right",
        author: "Mark Twain"
    },
    {
        text: "Own less. Do more",
        author: ""
    },
    {
        text: "More life, less rush",
        author: ""
    },
    {
        text: "Slow and steady wins the race",
        author: ""
    },









    // Part 2 Short uplifting
]

export default shortQuotes;
