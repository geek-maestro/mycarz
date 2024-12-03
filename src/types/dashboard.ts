export interface CarListResult {
  cars: carProps[];
}

export interface carProps {
  carBrand: string;
  carType: string;
  id: string;
  image: ImageProps[];
  name: string;
  price: number;
  seats: number;
}

export interface ImageProps {
  fileName: string;
  url: string;
}
