import Image from 'next/image';
import ExternalLink from '@/components/ExternalLink';
import Separator from '@/components/Separator';

interface DiscProps {
  name: string;
  brand: string;
  weight: number;
  plastic: string;
  flight: {
    speed: string;
    glide: string;
    turn: string;
    fade: string;
    stability: string;
  };
  link: string;
  thumbnail: string;
  description: string;
}

export default function Disc({
  name,
  brand,
  weight,
  plastic,
  flight,
  link,
  thumbnail,
  description,
}: DiscProps) {
  return (
    <article className="text-center md:text-left md:flex">
      <div className="w-32 h-32 flex-shrink-0 mx-auto md:mr-8 mb-3">
        <Image src={`/images/${thumbnail}`} alt="" width={256} height={256} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-0.5 text-gray-600 text-sm font-mono">
          Brand:{'\u00A0'}
          {brand} <Separator /> Weight:{'\u00A0'}
          {weight}g <Separator /> Plastic:
          {'\u00A0'}
          {plastic}
        </p>
        <div className="space-y-3 mt-3">
          <ul className="flex border divide-x divide-gray-200 bg-white rounded shadow-sm font-mono">
            <li className="flex-1 p-2">
              <span className="block text-xs text-gray-600 uppercase tracking-wide">
                Speed
              </span>
              <span>{flight.speed}</span>
            </li>
            <li className="flex-1 p-2">
              <span className="block text-xs text-gray-600 uppercase tracking-wide">
                Glide
              </span>
              <span>{flight.glide}</span>
            </li>
            <li className="flex-1 p-2">
              <span className="block text-xs text-gray-600 uppercase tracking-wide">
                Turn
              </span>
              <span>{flight.turn}</span>
            </li>
            <li className="flex-1 p-2">
              <span className="block text-xs text-gray-600 uppercase tracking-wide">
                Fade
              </span>
              <span>{flight.fade}</span>
            </li>
            <li className="flex-1 p-2">
              <span className="block text-xs text-gray-600 uppercase tracking-wide">
                Stability
              </span>
              <span>{flight.stability}</span>
            </li>
          </ul>
          {description && <p>{description}</p>}
          <ExternalLink href={`${link}?ref=alexcarpenter.me`}>
            Purchase
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
