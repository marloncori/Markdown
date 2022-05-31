
```C++
 auto multiply(unsigned int x, unsigned int y) -> unsigned int {
    if(x == NULL || y == NULL){     
        throw std::runtime_error(" Function parameters cannot be null!");
    }
    return x * y;
}
```
---
```rust
#[derive(Debug)]
struct File {
    path: string,
    name: string,
}

impl File {
    fn new(path: string, name: string) -> Self {
        File {
            string, name,
        }
    }
}
```

```js
const testFunc = (myArg) => {
    if(typeof myArg === 'string'){
        console.log(` The argument is of type string, i.e. --> \'${myArg}\'`)
    }
    else {
        console.log(myArg)
    }
}
```

```ts
  class Sample {
      variable: string | number = undefined

      constructor(value: string | number){
          this.variable = value
          console.log(" Sample has been instantiated!")
      }
      
      print(): any {
          return `this is your variable: ${this.variable}`
      }
  }
```