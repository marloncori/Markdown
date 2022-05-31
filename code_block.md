
```C++
 auto multiply(unsigned int x, unsigned int y) -> unsigned int {
    if(x == NULL || y == NULL){     
        throw std::system_error(errno,
            std::system_category, " Function parameters cannot be null!");
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
            path, name,
        }
    }
    
    (...)
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

let name = 'marloncori'

try {
  testFunc(name)
} catch(error){
   console.log(error)
}
```

```ts
  class Sample {
      variable: string | number = undefined

      constructor(value: string | number){
          this.variable = value
          console.log(" Sample has been instantiated!")
      }
      
      info(): any {
          return `This is your variable: ${this.variable}`
      }
  }
  const test1 = new Sample(7)
   console.log("\n\t" + test1.info() + "\n")

  const test2 = new Sample('Mobile Robotics')
    console.log("\n\t" + test2.info() + "\n")
```
