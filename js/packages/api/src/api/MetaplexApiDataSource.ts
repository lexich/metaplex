import { clusterApiUrl } from '@solana/web3.js';
import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { ConnectionConfig } from './ConnectionConfig';
import { MetaplexApi } from './MetaplexApi';

// XXX: re-use list from `contexts/connection` ?
const ENDPOINTS = [
  {
    name: 'mainnet-beta',
    endpoint: 'https://api.metaplex.solana.com/',
  },
  {
    name: 'testnet',
    endpoint: clusterApiUrl('testnet'),
  },
  {
    name: 'devnet',
    endpoint: clusterApiUrl('devnet'),
  },
];

export class MetaplexApiDataSource<
  TContext extends { network: string | undefined; api: MetaplexApi } = {
    network: string | undefined;
    api: MetaplexApi;
  },
> extends DataSource<TContext> {
  readonly ENTRIES = ENDPOINTS.map(
    ({ name, endpoint }) => new ConnectionConfig(name, endpoint),
  ).map(config => new MetaplexApi(config));

  // preload all data endpoints
  preload() {
    return Promise.all(this.ENTRIES.map(entry => entry.state));
  }

  // implementation for DataSource of apollo-datasource
  async initialize(config: DataSourceConfig<TContext>) {
    const entry =
      this.ENTRIES.find(
        entry => entry.config.name === config.context.network,
      ) ?? this.ENTRIES[0];
    config.context.api = entry;
  }
}
