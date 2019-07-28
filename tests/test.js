import HashStore from '../src/index';

test('Runs without crashing', () => {
  new HashStore();
});

test('Runs checkHealth without crashing', () => {
  const hashStore = new HashStore();
  hashStore.checkHealth();
});
