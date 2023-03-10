export const getNameInitials = (name) => {
  if (typeof name !== 'string') return null;
  const nameArr = name.split(' ').map((item) => item[0]);
  return nameArr.join('').slice(0, 2).toUpperCase();
};
