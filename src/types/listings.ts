import { FormikHandlers } from "formik";

export type listingProps = {
    id: number;
    image: string;
    price: number;
    type: string;
    gearshift: string;
    passengers: number;
    rentalType: string;
    description: string;
    images: [string];
}

export type FilterOption = {
    name: string;
    id: number;
    key: keyof listingProps | "price"; // Matches listingProps keys or price
    options: string[];
  };
  
  // Type for selectedFilters
  export type SelectedFilters = {
    [key in keyof listingProps | "price"]?: string;
  };

  export type formValueProps = {
    pickupdate: Date;
    returnDate: Date;
    pickuptime: Date;
    returntime: Date;
    resetForm: FormikHandlers['handleReset']
  }