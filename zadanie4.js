const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const averages = grades => grades.reduce( ( a, b ) => a + b, 0 ) / grades.length;