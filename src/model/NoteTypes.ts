export interface Note {
  _id: string;
  content: string;
  title: string;
  updateAt: string;
  createdAt: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
