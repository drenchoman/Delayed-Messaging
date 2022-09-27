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
      sender_username: 'grape_gatsby',
      message: `This is a test message 2 `,
      subject: 'A Proposal',
      active_time: today,
      read: false,
      archived: true,
      sent: true,
    },
    {
      id: 6,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `Hey, I think you,re really cool, maybe we should hand out or something?`,
      subject: 'A Proposal',
      active_time: today,
      read: false,
      archived: true,
      sent: true,
    },
    {
      id: 7,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `How are you doing? You been well?`,
      subject: 'Hello Brother!',
      active_time: today,
      read: false,
      archived: false,
      sent: true,
    },
    {
      id: 8,
      recipient_username: 'banana_llama',
      sender_username: 'grape_gatsby',
      message: `It doesn't matter when you get this. Know they you smell`,
      subject: 'You smell',
      active_time: today,
      read: false,
      archived: false,
      sent: true,
    },
    {
      id: 2,
      recipient_username: 'grape_gatsby',
      sender_username: 'banana_llama',
      message: `You're so special to me. I want the world to see`,
      subject: 'You are special',
      active_time: tomorrow,
      read: true,
      archived: true,
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
