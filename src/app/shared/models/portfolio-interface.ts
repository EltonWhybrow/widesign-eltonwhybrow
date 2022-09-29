export interface IAssets {
  name: string;
  url: string;
  imgJpg: string;
  imgWebp: string;
}

export interface IPortfolio {
  id: number;
  heading: string;
  body: string;
  footer: string;
  url: string;
  imageName: string;
  assets?: IAssets[];
}
