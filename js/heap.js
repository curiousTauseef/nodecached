// Generated by CoffeeScript 1.3.1
(function() {
  var heap;

  heap = {
    elements: [],
    n: 0,
    'Insert a value to the heap, keeping the heap property': 'Insert a value to the heap, keeping the heap property',
    insert: function(key, timestamp) {
      var child, i, _results;
      this.elements[++this.n] = {
        'key': key,
        'timestamp': timestamp
      };
      i = this.n;
      _results = [];
      while (i > 1 && this.elements[i >> 1].timestamp > this.elements[i].timestamp) {
        child = i >> 1;
        this.swap(child, i);
        _results.push(i = child);
      }
      return _results;
    },
    isEmpty: function() {
      return this.n === 0;
    },
    'Rearranges the heap after an extraction to keep the heap property': 'Rearranges the heap after an extraction to keep the heap property',
    siftDown: function() {
      var c, i, _results;
      i = 1;
      _results = [];
      while (i * 2 <= this.n) {
        c = i * 2;
        if (c + 1 < this.n && this.elements[c + 1].timestamp < this.elements[c].timestamp) {
          c++;
        }
        if (this.elements[i].timestamp < this.elements[c].timestamp) {
          break;
        }
        this.swap(c, i);
        _results.push(i = c);
      }
      return _results;
    },
    'Extracts the top of the heap': 'Extracts the top of the heap',
    extract: function() {
      var e, last;
      if (this.isEmpty()) {
        return null;
      }
      e = this.elements[1];
      last = this.elements.pop();
      this.n--;
      if (this.elements[1]) {
        this.elements[1] = last;
        this.siftDown();
      }
      return e.key;
    },
    clear: function() {
      this.elements = [];
      return this.n = 0;
    },
    swap: function(a, b) {
      var tmp;
      tmp = this.elements[a];
      this.elements[a] = this.elements[b];
      return this.elements[b] = tmp;
    }
  };

  module.exports = heap;

}).call(this);