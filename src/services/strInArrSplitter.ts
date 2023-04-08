export const strInArrSplitter = (arr: string[], separator: string) => {
  if (arr.length === 1) {
    return arr.map((item) => item).join();
  }
  const toStr = arr.join();
  return toStr.replace(/,/gi, `${separator} `);
};
