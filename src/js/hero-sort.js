export default function heroSort(items) {
  return items.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    } else if (a.health > b.health) {
      return -1;
    } else {
      return 0;
    }
  });
}
