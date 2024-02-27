import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdjS8XyXqz7BjMdZQJiWcX1c2UaymtmhdCCYoEXAUTbkB/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Badger eBTC Audit Top 10 Wardens',
  description: 'A frame congratulating the Top 10 Wardens from the Badger eBTC Audit by Code4rena',
  openGraph: {
    title: 'Badger eBTC Audit Top 10 Wardens',
    description: 'A frame congratulating the Top 10 Wardens from the Badger eBTC Audit by Code4rena',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdjS8XyXqz7BjMdZQJiWcX1c2UaymtmhdCCYoEXAUTbkB/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Badger eBTC Audit Top 10 Wardens</h1>
    </>
  );
}
