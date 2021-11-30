class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    this.data[Math.floor(Math.random() * this.data.length)] = [hash, value];
  }

  get(key) {
    const hash = this._hash(key);
    const item = this.data.find((i) => i && i[0] === hash);
    return item ? item[1] : null;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');

// implement get and set for this table class
