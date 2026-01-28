export const calculateCompatibility = (id1: string | number, id2: string | number): number => {
  const n1 = Number(id1);
  const n2 = Number(id2);

  const random = Math.abs(Math.sin(n1 + n2));

  return Math.min(100, Math.floor(random * 101));
};
