export default function formatDate(date: string) {
  const dateArray = date.toString().split("/");
  return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]);
}
