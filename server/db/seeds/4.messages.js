const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
const thirtyDays = new Date()
thirtyDays.setDate(tomorrow.getDate() + 30)
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {
      id: 1,
      recipient_username: 'banana_llama',
      sender_username: 'Livi Kavesi',
      message: `I wanted to send you a letter of encouragement, as I was thinking about you today. 
        Life is really hard for you right now, but I dont want you to lose hope.  My kind friend, 
        as you read my letter of encouragement may you feel strengthened and comforted.
        My years as a single father were so hard.  I remember each day being a struggle.  Some days 
        I just tried to make it to bedtime.  As we talked last week, I could hear in your voice 
        that same struggle.  But don't give up.  You are going to make it through this troubling 
        time you are in right now.  And there are so many wonderful days ahead for you! Please 
        believe that!am so proud of you! want you to know how proud I am of you!  
        You have continued to take care of yourself and your obligations even as you are struggling. 
        You have not given up or just laid down hoping someone else will rescue you.
        `,
      subject: 'Encoraging',
      active_time: today,
      read: false,
      archived: true,
      sent: true,
    },
    {
      id: 6,
      recipient_username: 'banana_llama',
      sender_username: 'Oscar Harron',
      message: `Dear Friend,

      I don't think you really see how special and awe-inspiring you are, and I am here to remind you of that.
      
      I am here to tell you that women like you are so rare and precious and that I feel truly blessed to have you in my life.
      
      You inspire me because you are not afraid to be yourself. And I know you weren't born that way. I know that life has beaten and bent you. I know it took you a long time to learned to truly love yourself.
      
      You had to build your confidence from scratch. But you managed. Somewhere down the line, you realized that it's not about being perfect—it’s about being you. It’s about accepting yourself.
      
      You taught me that you don't always have to be strong. You are allowed to have a meltdown from time to time. You are allowed to break into pieces. That’s OK as long as you keep picking yourself up.
      
      Not giving up on yourself is what it's all about, and it doesn't matter how long it takes. It's the end result that counts.
      
      You inspire me because no matter how many curve balls life threw at you, you always found the moments to smile.
      
      Even in your darkest hour, you keep a positive mind. You always enjoy the small fragments of light that come your way.
      
      You know that there are always some good days just around the corner, waiting for you, waiting for your loved ones, and it’s only a matter of time before you get there.`,
      subject: 'Inspire',
      active_time: today,
      read: false,
      archived: true,
      sent: true,
    },
    {
      id: 7,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `This is a test message 3`,
      subject: 'A Proposal',
      active_time: today,
      read: false,
      archived: false,
      sent: true,
    },
    {
      id: 8,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `this is a test message 4`,
      subject: 'A Proposal',
      active_time: today,
      read: false,
      archived: false,
      sent: true,
    },
    {
      id: 2,
      recipient_username: 'grape_gatsby',
      sender_username: 'banana_llama',
      message: `Hey, this is a short test letter`,
      subject: 'Testing',
      active_time: tomorrow,
      read: false,
      archived: false,
      sent: true,
    },
    {
      id: 3,
      recipient_username: 'grape_gatsby',
      sender_username: 'banana_llama',
      message: `Hello world`,
      subject: 'Hiya, this is a draft',
      active_time: null,
      read: false,
      archived: false,
      sent: false,
    },
    {
      id: 4,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `Heartfelt letter`,
      subject: 'Meaningful Header',
      active_time: tomorrow,
      read: true,
      archived: true,
      sent: true,
    },
    {
      id: 5,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `You will get this one day`,
      subject: 'Muhahaha',
      active_time: thirtyDays,
      read: false,
      archived: false,
      sent: true,
    },
  ])
}
