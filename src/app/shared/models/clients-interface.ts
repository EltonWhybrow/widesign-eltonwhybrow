export interface IClients {
  id: number;
  name: string;
  description: string;
  project: string;
  tools: [];
}

export interface IClientsInfo {
  private: boolean;
  heading: string;
  subHeading: number;
  imageName: string;
  description: string;
  urlText: string;
  url: string;
  urlText2?: string;
  url2?: string;
  urlText3?: string;
  url3?: string;
}
