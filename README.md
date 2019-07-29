# HashStore

A micro library for saving data in the hashStore.

# Installation

## Using NPM

Install the package and save as a dependency:

```npm install -s hash-store```

## Using the script

```<script src="../build/hash-store.min.js"></script>```
```
<script>
    const HashStore = window.HashStore.default;
    const hashStore = new HashStore();
</script>
```

# Usage

The syntax for adding data item to the storage:
```hashStorage.setItem('myCat', {data: 'string, number, array or an object'});```

The syntax for reading the hashStorage item:

```const cat = hashStorage.getItem('myCat');```

The syntax for removing the hashStorage item:

```hashStorage.removeItem('myCat');```

The syntax for removing all the hashStorage items:

```hashStorage.clear();```

## Development

### Install dev dependencies
```npm install```

### Test
```npm test```

### Build
```npm run build```

### Publish to NPM
```npm run publish:npm```
