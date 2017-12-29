export default (winner, loser) => {
  const K = 32;

  const r1 = 10 ** (winner.rating / 400);
  const r2 = 10 ** (loser.rating / 400);

  const e1 = r1 / (r1 + r2);
  const e2 = r2 / (r1 + r2);

  winner.rating = Math.round(winner.rating + K * (1 - e1));
  loser.rating = Math.round(loser.rating + K * (0 - e2));

  return [winner, loser];
};

