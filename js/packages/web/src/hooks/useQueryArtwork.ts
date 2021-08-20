import { gql } from 'urql';
import { populateArtistInfo } from '../utils/getArtistInfo';
import { createQuery, QueryResultField } from './createQuery';

export type ArtworkType = {
  pubkey: string; // PublicKey
  type: number; // ArtType
  title: string;
  uri: string;
  creators: ArtworkCreatorType[] | null;
  edition: string | null; // BN
  maxSupply: string | null; // BN
  mint: string | null; // PublicKey
  sellerFeeBasisPoints: number;
  supply: string | null; // BN
};

type ArtworkCreatorType = {
  address: string; // PublicKey
  share: number;
  verified: boolean;
};

interface ArtworkQuery {
  artwork: ArtworkType;
}

export const ArtworkFragment = gql`
  fragment ArtworkFragment on Artwork {
    pubkey
    uri
    title
    creators {
      address
      share
      verified
    }
    mint
    sellerFeeBasisPoints
    type
    supply
    maxSupply
    edition
  }
`;

const artworkQuery = gql<ArtworkQuery, { storeId: string; artId: string }>`
  query getArtworks($artId: String!) {
    artwork(artId: $artId) {
      ...ArtworkFragment
    }
  }
  ${ArtworkFragment}
`;

export const useQueryArtwork = createQuery(artworkQuery, ({ artwork }) => ({
  artwork: processArtwork(artwork),
}));

export const processArtwork = (art: ArtworkQuery['artwork']) => ({
  ...art,
  creators: art.creators?.map(populateArtistInfo).sort(sortCreators),
});

const sortCreators = <T extends { share: number; name?: string }>(
  a: T,
  b: T,
) => {
  return b.share - a.share || (a.name || '').localeCompare(b.name || '');
};

export type Artwork = QueryResultField<typeof useQueryArtwork, 'artwork'>;
