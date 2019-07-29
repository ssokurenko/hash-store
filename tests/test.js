import HashStore from '../src/index';
const mockData = [
  {
    id: 0,
    title: `Don't worry`
  },
  {
    id: 1,
    title: 'Be happy'
  }
];

test('Runs instaciation crashing', () => {
  const hashStore = new HashStore;
});

test('Runs setItem without crashing', () => {
  const hashStore = new HashStore();
  hashStore.setItem('test', mockData);
});

test('Runs getItem without crashing', () => {
  const hashStore = new HashStore();
  hashStore.getItem('test');
});

test('Runs removeItem without crashing', () => {
  const hashStore = new HashStore();
  hashStore.removeItem('test');
});

test('Runs clear without crashing', () => {
  const hashStore = new HashStore();
  hashStore.clear();
});
