type Stringify<T> = {
  [P in keyof T]: string
}

// keyof não funciona
interface IStringify<T> = {
  [P in keyof T]: string
}

type Company = {
  name: number,
  age: number,
}

type CompanyStringify = Stringify<Company>


type Optional<T> = { 
  [K in keyof T]?: T[K] 
};

const company: Optional<CompanyStringify> = {
  name: "MKOM",
};
