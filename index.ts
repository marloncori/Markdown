export{}

const path = Deno.args[0]
console.log(` This is the provided path: \n\t --> ${path}`)

const contents: string = await Deno.readTextFile(path)
console.log(` This is the contents: \n\t${contents}`)

//or const contents: string = Deno.readTextFileSync(path)

const dirPath = Deno.args[1]
console.log(` This is the second provided path: \n\t --> ${dirPath}`)

const newPath = Deno.cwd() + `/${dirPath}`