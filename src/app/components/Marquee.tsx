
import MarqueeText from 'react-marquee-text';

interface IMarquee {
  id: string;
  slug: string;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: 'up' | 'down';
    pct: number;
  };
}

const formatBanglaNumber = (num: number) =>
  new Intl.NumberFormat('bn-BD', {
    maximumFractionDigits: 2,
  }).format(num);

const Marquee = async () => {
  const res = await fetch(
    'https://api.api-store.workers.dev/api/bazardor/products'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data: IMarquee[] = await res.json();

  return (
    <div>
      <div className="divider"></div>

      <div className="w-full overflow-hidden">
        <MarqueeText
          className="py-1"
          direction="right"
          duration={20}
        >
          {data.map((n) => (
            <div
              key={n.id}
              className="flex items-center gap-2 px-5 whitespace-nowrap"
            >
              <span>{n.image}</span>

              <span className="font-medium">{n.nameBn}</span>

              <span>
                {formatBanglaNumber(n.today)} টাকা/কেজি
              </span>

              <span
                className={
                  n.change.dir === 'up'
                    ? 'font-semibold text-red-600'
                    : 'font-semibold text-green-600'
                }
              >
                {n.change.dir === 'up' ? '▲' : '▼'}{' '}
                {formatBanglaNumber(Math.abs(n.change.pct))}%
              </span>
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
