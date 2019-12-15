export const userWithStats = (user) => {
  const {id, name, avatarURL, questions, answers} = user;
  return ({
    id,
    name,
    avatarURL,
    questionCount: questions.length,
    answerCount: Object.keys(answers).length,
    score: questions.length + Object.keys(answers).length
  })
};

export const getLeaders = (users) => {
  return Object.values(users)
    .map(user => userWithStats(user))
    .sort((a,b) => b.score - a.score)
};
