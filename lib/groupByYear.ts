export const groupByYear = <
  T extends {
    date: string;
  }
>(
  arr: Array<T>
) =>
  arr.reduce((acc, current) => {
    const year = new Date(current.date).getFullYear().toString();
    if (acc[year] != undefined) {
      acc[year].push(current);
    } else {
      acc[year] = [current];
    }

    return acc;
  }, {} as Record<string, Array<T>>);
