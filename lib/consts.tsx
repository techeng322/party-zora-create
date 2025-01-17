import { FrameMetadataType } from '@coinbase/onchainkit';
export const TITLE = 'party zora create';
export const DESCRIPTION = 'bring your own party. create on zora';
export const COMMENT = 'Based in Colombia 🇨🇴';
export const FARCASTER_ID_REGISTRY = '0x00000000fc6c5f01fc30151999387bb99a9f489b';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3000';
export const GITHUB_REPO = 'https://github.com/With-Fam/party-zora-collect';
export const DEFAULT_FRAME = {
  buttons: [
    {
      label: 'see results',
    },
  ],
  image: {
    src: `${VERCEL_URL}/api/og`,
  },
  postUrl: `${VERCEL_URL}/api/frame`,
} as FrameMetadataType;
export const FRAME_INPUT_PLACEHOLDER = '0x... or .eth';
export const ZORA_FACTORY_PROXY = '0x777777C338d93e2C7adf08D102d45CA7CC4Ed021';
export const SOUND_FACTORY = '0x0000000000aec84F5BFc2af15EAfb943bf4e3522';

export const AIRSTACK_API_URL = 'https://api.airstack.xyz/graphql';
