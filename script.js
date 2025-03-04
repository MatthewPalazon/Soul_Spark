
function generateRandomNumber(num){
    return Math.floor(Math.random()*num)
}


let symbol = [
    { object: "Key", message: "Unlock your potential and new opportunities today." },
    { object: "Mirror", message: "Reflect on your actions and thoughts today." },
    { object: "Candle", message: "Bring warmth, hope, and inspiration to your day." },
    { object: "Compass", message: "Follow your inner guidance to make decisions today." },
    { object: "Bridge", message: "Move past obstacles and into new experiences today." },
    { object: "Door", message: "Embrace new possibilities and changes today." },
    { object: "Ladder", message: "Keep working toward your goals, step by step today." },
    { object: "Coin", message: "Take a chance and trust the outcome today." },
    { object: "Book", message: "Make today a meaningful chapter in your story." },
    { object: "Clock", message: "Use your time wisely and with intention today." }
  ];

  let quotes = [
    { author: "Maya Angelou", message: "Do the best you can until you know better. Then when you know better, do better." },
    { author: "Albert Einstein", message: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { author: "Winston Churchill", message: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { author: "Lao Tzu", message: "A journey of a thousand miles begins with a single step." },
    { author: "Oprah Winfrey", message: "The biggest adventure you can take is to live the life of your dreams." },
    { author: "Nelson Mandela", message: "It always seems impossible until it's done." },
    { author: "Confucius", message: "It does not matter how slowly you go as long as you do not stop." },
    { author: "Steve Jobs", message: "Your time is limited, so don’t waste it living someone else’s life." },
    { author: "Rumi", message: "Do not be satisfied with the stories that come before you. Unfold your own myth." },
    { author: "Eleanor Roosevelt", message: "The future belongs to those who believe in the beauty of their dreams." }
  ];
  
  const tasks = [
    { action: "Practice Gratitude", message: "Write down three things you’re grateful for today." },
    { action: "Move Your Body", message: "Go for a short walk or do a quick stretch session." },
    { action: "Deep Focus", message: "Set a 25-minute timer and work on a task without distractions." },
    { action: "Mindful Breathing", message: "Take five deep breaths, focusing on each inhale and exhale." },
    { action: "Reach Out", message: "Send a message to a friend or loved one to check in on them." },
    { action: "Declutter", message: "Choose one small area and tidy it up for five minutes." },
    { action: "Learn Something New", message: "Read an article or watch a video on a topic that interests you." },
    { action: "Acts of Kindness", message: "Do something kind for someone, even if it’s small." },
    { action: "Reflect", message: "Write down one lesson you learned today." },
    { action: "Hydrate", message: "Drink a glass of water to refresh yourself." }
  ];

  
  function generateMindfulnessMessage() {
    let myMindfulnessMessage = [
        symbol[generateRandomNumber(symbol.length)],
        quotes[generateRandomNumber(quotes.length)],
        tasks[generateRandomNumber(tasks.length)]
    ];

    return myMindfulnessMessage;
}
function formatMindfulness(myMindfulnessMessage) {
    const formatted = myMindfulnessMessage.map(item => item.message).join('\n');
    console.log(formatted);
}

const mindfulnessMessage = generateMindfulnessMessage();
formatMindfulness(mindfulnessMessage);