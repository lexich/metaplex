import { subscriptionType } from 'nexus';

export * from './scalar';
export * from './artwork';
export * from './metadata';
export * from './metaplex';
export * from './auction';
export * from './vault';
export * from './query';
export * from './inputs';

export const truths = subscriptionType({
  definition(t) {
    t.boolean('truths', {
      subscribe() {
        return (async function* () {
          while (true) {
            await new Promise(res => setTimeout(res, 1000));
            yield Math.random() > 0.5;
          }
        })();
      },
      resolve(eventData: any) {
        return eventData;
      },
    });
  },
});
