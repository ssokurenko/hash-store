const HashStore = window.HashStore.default;
const hashStore = new HashStore();

const data = [
  {
    id: 0,
    title: 'Work at home'
  },
  {
    id: 1,
    title: 'Buy groceries'
  },
  {
    id: 3,
    title: 'Setup dev environment'
  }
];

console.log(hashStore.getItem('tasks'));

hashStore.setItem('tasks', data);

console.log(hashStore.getItem('tasks'));
