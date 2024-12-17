export const generateRandomId = () => {
  const timestamp = new Date().getTime(); // Текущее время в миллисекундах
  const randomValue = Math.floor(Math.random() * 1000); // Случайное число от 0 до 999
  return `${timestamp}${randomValue}`;
};
