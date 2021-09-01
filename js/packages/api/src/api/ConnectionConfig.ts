import { Connection } from '@solana/web3.js';
import { loadAccounts } from '@oyster/common/dist/lib/contexts/meta/loadAccounts';
import { MetaState } from '@oyster/common/dist/lib/contexts/meta/types';
import { subscribeAccountsChange } from '@oyster/common/dist/lib/contexts/meta/subscribeAccountsChange';

export class ConnectionConfig {
  private state?: MetaState;
  readonly connection: Connection;
  constructor(public readonly name: string, endpoint: string) {
    this.connection = new Connection(endpoint, 'recent');
  }
  private defer: Promise<void> | undefined;
  load(skipSubscriptions = false) {
    const defer =
      this.defer ??
      (this.defer = loadAccounts(this.connection, true)
        .then(state => {
          console.log(`🏝️  ${this.name} meta loaded`);
          this.state = state;
          // XXX: there is a GAP before subscribe
          if (!skipSubscriptions) {
            this.subscribe();
          }
        })
        .catch(e => {
          // XXX: try to reconnect
          console.error(e);
          throw e;
        }));
    return defer.then(() => this.state!);
  }
  private subscribe(): false | void {
    subscribeAccountsChange(
      this.connection,
      true,
      () => this.state,
      (state: MetaState) => {
        this.state = state;
      },
    );
  }
}
