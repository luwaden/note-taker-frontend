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
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
  confirmPassword: string;
}
