interface User {
  name: string
  login: string
  pass: string
}

// Readonly, Required, Partial
type UserReadonly = Readonly<User>
type UserRequired = Required<User>
type UserPartial = Partial<User>
type UserPick = Pick<User, "login" | "name">
type UserOmit = Omit<User, "pass">
type UserRecord = Record<"user1" | "user2", User>


const user : UserReadonly = {
  login: "emourinho",
  name: "Everton",
  pass: "123456",
}
