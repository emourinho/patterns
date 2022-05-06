interface IPerson {
  name: string,
  age: number
}

interface IAddress {
  street: string,
  zipCode: string
}

const person: IPerson = {
  name: "Teste",
  age: 34
}

const address: IAddress = {
  street: "Rua Róseo",
  zipCode: "06624075"
}

// com operador &
const personAddress1: IPerson & IAddress = {
  name: "Teste",
  age: 34,
  street: "Rua Róseo",
  zipCode: "06624075"
}

// com merge
const merge = <F, S>(first: F, second: S) => {
  return { ...first, ...second }
}

const personAddress12 = merge(person, address)

// com assign
const personAddress13 = Object.assign(person, address)