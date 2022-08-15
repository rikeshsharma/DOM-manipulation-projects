// variables

let btn = document.querySelector('#new-quote');
let quote =  document.querySelector('.quote');
let person =  document.querySelector('.person');

const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        person:"Nelson Mandela"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.", 
        person:"Walt Disney"
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
        person:"Steve Jobs"
    },
    {
        quote : "If life were predictable it would cease to be life, and be without flavor.", 
        person:"Eleanor Roosevelt"
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", 
        person:"Oprah Winfrey"
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 
        person:"James Cameron"
    },
    {
        quote : "Life is what happens when you're busy making other plans.", 
        person:"John Lennon"
    },
    {
        quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        person:"Mother Teresa"
    },
    {
        quote : "Don't judge each day by the harvest you reap but by the seeds that you plant.", 
        person:"Robert Louis Stevenson"
    },
    {
        quote : "It is during our darkest moments that we must focus to see the light.", 
        person:"Aristotle"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        person:"Nelson Mandela"
    },
    {
        quote : "Many of life's failures are people who did not realize how close they were to success when they gave up.", 
        person:"Thomas A. Edison"
    },
    {
        quote : "We are what our thoughts have made us; so, take care of what you think. Words are secondary. Thoughts live; they travel far.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "Never say ‘no’, never say ‘I cannot’, for you are infinite. All the power is within you. You can do anything.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "The greatest sacrifice is when you sacrifice your own happiness for the sake of someone else.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "In a day when you don’t come across any problems, you can be sure that you are travelling on the wrong path.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "The greatest sin is to think yourself weak.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "Take risks in your life. If you win, you may lead; if you lose, you may guide.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "The highest education is that which does not merely give us information but makes our life in harmony with all existence.", 
        person:"Rabindranath Tagore"
    },
    {
        quote : "You can’t cross the sea merely by standing and staring at the water.", 
        person:"Rabindranath Tagore"
    },
    {
        quote : "If you cry because the sun has gone out of your life, your tears will prevent you from seeing the stars.", 
        person:"Rabindranath Tagore"
    },
    {
        quote : "Be so busy improving your self that you have no time to criticize others.", 
        person:"Chetan Bhagat"
    },
    {
        quote : "What we possess is temporary, but what we become is permanent.", 
        person:"Devdutt Pattanaik"
    },
    {
        quote : "Blaming your faults on your nature does not change the nature of your faults.", 
        person:"Indian proverb"
    },
    {
        quote : "Depth of friendship does not depend on length of acquaintance.", 
        person:"Rabindranath Tagore"
    },
    {
        quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.", 
        person:"Mahatma Gandhi"
    },
    {
        quote : "Suffering exists.", 
        person:"Siddhartha Gautama"
    },
    {
        quote : "When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bonds.", 
        person:"Patanjali"
    },
    {
        quote : "Take up one idea. Make that one idea your life, dream of it, think of it, live on that idea. Let the brain, the body, muscles, nerves, evry part of your body be full of that idea, and just leave every other idea alone. This is the way to success, and this the way great spiritual gaints are produced.", 
        person:"Swami Vivekananda"
    },
    {
        quote : "My God is love and sweetly suffers all.", 
        person:"Sri Aurobindo"
    },
    {
        quote : "You must understand the whole of life, not just one little part of it. That is why you must read, that is why you musy look at the skies, that is why you must sing, and dance, and write poems, and suffer, and undestand, for all that is life.", 
        person:"Jiddu Krishnamurti"
    },
    {
        quote : "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", 
        person:"Swami Sivananda"
    },
    {
        quote : "The harder the struggle, the more glorious the triumph. Self-realization demands very great struggle.", 
        person:"Swami Sivananda"
    },
    {
        quote : "Crave for a thing, you will get it. Renounce the craving, the object will follow you by itself.", 
        person:"Swami Sivananda"
    },
    {
        quote : "Let come what comes, let go what goes. See what remains.", 
        person:"Ramana Maharshi"
    },
    {
        quote : "Who am I? Not the body, because it is decaying; not the mind, because the brain will decay with the body; not the personality, nor the emotions, for these also will vanish with death.", 
        person:"Ramana Maharshi"
    },
    {
        quote : "When there are thoughts, it is distraction: when there are no thoughts, it is meditation.", 
        person:"Ramana Maharshi"
    },
    {
        quote : "Self-reform automatically brings about social reform.", 
        person:"Ramana Maharshi"
    },
    {
        quote : "The body dies, but the spirit that transcends it cannot be touched by death.", 
        person:"Ramana Maharshi"
    },
    {
        quote : "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", 
        person:"Thomas A. Edison"
    },
    {
        quote : "It always seems impossible until it's done", 
        person:"Nelson Mandela"
    },
    {
        quote : "It does not matter how slowly you go as long as you do not stop.", 
        person:"Confucius"
    },
    {
        quote : "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.", 
        person:"Samuel Beckett"
    },
     {
        quote : "Well done is better than well said.", 
        person:"Benjamin Franklin"
    },
     {
        quote : "Don't cry because it's over. Smile because it happened.", 
        person:"Dr. Seuss"
    }
]; 
btn.addEventListener('click',()=>{
    let randIndex = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[randIndex].quote;
    person.innerText = quotes[randIndex].person; 
});
