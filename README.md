# HashStore

A micro library for saving data in the hashStore.

## Install using NPM

Install the package and save as a dependency:

```npm install -s hash-store```

## Adding the script referece directly to your html

Using CDN:

```<script src="https://unpkg.com/hash-store"></script>```

Or hosted on your premises:

```<script src="../build/hash-store.min.js"></script>```

Please be sure to update the path according to your folder structure.

## Instantiation

Instinciate the hashStore object at the begining of your .js code:

```
    const HashStore = window.HashStore.default;
    const hashStore = new HashStore();
```

## Usage

### hashStore.setItem

The syntax for adding data item to the storage:
```hashStore.setItem('myData', {data: 'string, number, array or an object'});```

Where `myData` is the key, and the second argument is actual data.

### hashStore.getItem

The syntax for reading the hashStore item:

```const cat = hashStore.getItem('myData');```

### hashStore.removeItem

The syntax for removing the hashStore item:

```hashStore.removeItem('myData');```

### hashStore.clear

The syntax for removing all the hashStore items:

```hashStore.clear();```

## Development

### Install dev dependencies
```npm install```

### Test
```npm test```

### Build
```npm run build```

### Publish to NPM
```npm run publish:npm```
