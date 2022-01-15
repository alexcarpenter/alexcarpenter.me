import * as React from 'react';
import { AxisOptions, Chart as ReactChart } from 'react-charts';
import data, { Ruck } from '@/data/rucking';
import { useTheme } from 'next-themes';
import Card from '@/components/Card';
import Page from '@/components/Page';
import Section from '@/components/Section';

function Chart() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  const primaryAxis = React.useMemo(
    (): AxisOptions<Ruck> => ({
      getValue: (datum) => new Date(datum.date),
    }),
    [],
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<Ruck>[] => [
      {
        getValue: (datum) => datum.distance,
        elementType: 'area',
      },
    ],
    [],
  );

  if (!mounted) return null;

  return (
    <>
      <ReactChart
        options={{
          dark: resolvedTheme === 'dark',
          defaultColors: ['#ea580c'],
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </>
  );
}

export default function Rucking() {
  const currentData = Object.values(data)[0].data as Array<Ruck>;
  const totalRucks = currentData.length;
  const totalDistance = currentData.reduce((acc, { distance }) => {
    return acc + distance;
  }, 0);
  const totalDuration = currentData.reduce((acc, { duration }) => {
    return acc + duration;
  }, 0);

  return (
    <Page
      title="Rucking"
      description="Walking around with a 20lb ruck plate in a backpack for extended periods of time."
    >
      <Section heading="Stats">
        <div className="h-80">
          <Chart />
        </div>
        <ul className="mt-8 grid sm:grid-cols-3 gap-4 md:gap-8">
          <li className="flex flex-col">
            <Card variant="gray">
              <Card.Eyebrow>Total Rucks</Card.Eyebrow>
              <p className="pt-2 mt-auto text-4xl">{totalRucks}</p>
            </Card>
          </li>
          <li className="flex flex-col">
            <Card variant="gray">
              <Card.Eyebrow>Total Miles</Card.Eyebrow>
              <p className="pt-2 mt-auto text-4xl">{totalDistance}</p>
            </Card>
          </li>
          <li className="flex flex-col">
            <Card variant="gray">
              <Card.Eyebrow>Total Hours</Card.Eyebrow>
              <p className="pt-2 mt-auto text-4xl">
                {(totalDuration / 60).toFixed(1)}
              </p>
            </Card>
          </li>
        </ul>
      </Section>

      <Section heading="Gear">
        <ul className="grid sm:grid-cols-2 gap-4 md:gap-8">
          <li className="flex flex-col">
            <Card
              variant="gray"
              link="https://www.goruck.com/products/rucker-3-0"
            >
              <Card.Title>Goruck Rucker 3.0</Card.Title>
              <Card.Description>
                Bomb proof backpack with a purpose built ruck plate holder to
                ensure it rides high on the back.
              </Card.Description>
            </Card>
          </li>
          <li className="flex flex-col">
            <Card
              variant="gray"
              link="https://www.goruck.com/products/ruck-plates"
            >
              <Card.Title>Goruck 20lb Ruck Plate</Card.Title>
              <Card.Description>
                As someone who doesn't work out much, 20lbs has felt like a
                great starting point.
              </Card.Description>
            </Card>
          </li>
        </ul>
      </Section>

      {/* <a
        href="https://www.strava.com/athletes/alexcarpenter"
        className={cx(
          'mt-8',
          'inline-flex gap-2',
          'border px-4 py-2 rounded-md',
          'bg-gray-50',
          'dark:bg-gray-800',
          'borderColor',
        )}
      >
        <span>Follow on</span>
        <svg
          width="65"
          viewBox="0 0 200 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Strava"
        >
          <path
            d="M19.1616 40.541C15.356 40.541 11.8037 40.0112 8.51172 38.9653C5.21924 37.9126 2.3833 36.3379 0 34.2441L6.67041 26.2944C8.69775 27.8579 10.8364 28.9795 13.0742 29.6538C15.3159 30.3306 17.542 30.6689 19.748 30.6689C20.8892 30.6689 21.7041 30.5254 22.2041 30.2441C22.7061 29.958 22.9502 29.5659 22.9502 29.0698V28.9634C22.9502 28.4253 22.5815 27.9746 21.856 27.626C21.1304 27.2695 19.7632 26.8979 17.771 26.5083C15.6729 26.0781 13.6694 25.5771 11.7686 25.0098C9.86377 24.4453 8.19287 23.7124 6.75244 22.8213C5.30957 21.9346 4.16309 20.8096 3.30713 19.459C2.45312 18.105 2.02588 16.4492 2.02588 14.4941V14.3872C2.02588 12.6064 2.37207 10.9502 3.06885 9.42188C3.75684 7.89258 4.77295 6.55518 6.10791 5.41992C7.44336 4.28076 9.10107 3.39258 11.0776 2.74805C13.0454 2.10889 15.3159 1.78857 17.8818 1.78857C21.5068 1.78857 24.6826 2.21729 27.4058 3.07373C30.1289 3.92139 32.5728 5.2041 34.7466 6.91113L28.6631 15.3462C26.8833 14.062 25.0049 13.1289 23.0312 12.54C21.0513 11.9517 19.1997 11.6572 17.4517 11.6572C16.5288 11.6572 15.8442 11.7998 15.3999 12.0854C14.9473 12.3696 14.7319 12.7451 14.7319 13.2061V13.312C14.7319 13.8135 15.0664 14.2407 15.7451 14.5977C16.4243 14.9521 17.7393 15.3267 19.6934 15.7178C22.0786 16.1426 24.2476 16.6597 26.21 17.2612C28.1631 17.8721 29.8496 18.6431 31.2515 19.5884C32.6567 20.5303 33.7456 21.6553 34.5083 22.9761C35.272 24.293 35.6558 25.8965 35.6558 27.7788V27.8887C35.6558 29.8428 35.2656 31.6084 34.4795 33.1714C33.6987 34.7388 32.5933 36.062 31.1704 37.1499C29.7461 38.2324 28.0186 39.0679 25.9912 39.6562C23.9663 40.2466 21.6846 40.541 19.1616 40.541Z"
            fill="currentColor"
          />
          <path
            d="M45.9546 13.0459H34.959V2.48535H69.4468V13.0459H58.4478V39.8418H45.9546V13.0459Z"
            fill="currentColor"
          />
          <path
            d="M89.0869 20.2583C90.5825 20.2583 91.7588 19.937 92.6084 19.2979C93.4624 18.6562 93.8916 17.7632 93.8916 16.625V16.5171C93.8916 15.3101 93.4624 14.4092 92.6084 13.8271C91.7588 13.2388 90.5967 12.9473 89.1421 12.9473H83.6943V20.2583H89.0869V20.2583ZM71.2031 2.48535H89.4614C92.8057 2.48535 95.5542 2.86914 97.7056 3.63379C99.8618 4.39746 101.592 5.44043 102.91 6.75732C104.052 7.89258 104.905 9.17627 105.477 10.5947C106.043 12.0186 106.33 13.6968 106.33 15.6089V15.7227C106.33 18.46 105.671 20.7734 104.351 22.6572C103.038 24.5425 101.241 26.042 98.96 27.1401L107.658 39.8418H93.4092L86.3618 29.1685H86.2603H83.6943V39.8418H71.2031V2.48535Z"
            fill="currentColor"
          />
          <path
            d="M179.89 23.7705L188.032 39.8418H200L179.89 0.143066L159.782 39.8418H171.753L179.89 23.7705Z"
            fill="currentColor"
          />
          <path
            d="M123.918 23.7705L132.058 39.8418H144.029L123.918 0.143066L103.819 39.8418H115.784L123.918 23.7705Z"
            fill="currentColor"
          />
          <path
            d="M151.913 18.5557L143.767 2.48535H131.796L151.913 42.1841L172.014 2.48535H160.052L151.913 18.5557Z"
            fill="currentColor"
          />
        </svg>
      </a> */}
    </Page>
  );
}
