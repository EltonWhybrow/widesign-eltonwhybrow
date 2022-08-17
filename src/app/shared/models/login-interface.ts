export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginStatus {
  success: string;
  messsage: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}


