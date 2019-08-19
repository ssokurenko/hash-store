# HashStore

A micro library for saving data in the hashStore.

It serializes an object into a string and keeps it at the URL hash fragment.

# Usage examples

- [https://type.fit](https://type.fit/#%7B%22text%22:%22This%20web%20app%20uses%20the%20HashStore%20library%20to%20store%20the%20app%20data%20at%20the%20url%20hash.%5CnTake%20a%20look%20at%20the%20address%20line.%22%7D)

## Using NPM and ES6

Install the package and save it as a dependency:

```npm install -s hash-store```

Import it to your js file:

```import * as HashStore from 'hash-store';```

And instanciate the service:

```const hashStore = new HashStore.default();```

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
