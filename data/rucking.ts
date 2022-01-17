export type Ruck = {
  date: string;
  distance: number; // Miles
  duration: number; // Minutes
  weight: 0 | 20;
};

type Series = {
  label: string;
  data: Array<Ruck>;
};

const data: Array<Series> = [
  {
    label: '2022',
    data: [
      {
        date: '2022-01-15',
        distance: 0.42,
        duration: 9.4,
        weight: 20,
      },
    ],
  },
];

export default data;
