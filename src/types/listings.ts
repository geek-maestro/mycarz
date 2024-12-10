import { FormikHandlers } from "formik";
import { carProps } from "./dashboard";

export type listingProps = {
    id: number;
    image: string;
    price: number;
    type: string;
    gearshift: string;
    passengers: number;
    rentalType: string;
    description: string;
    images: string[];
}

export type FilterOption = {
    name: string;
    id: number;
    key: keyof listingProps | "price"; // Matches listingProps keys or price
    options: string[];
  };
  
  // Type for selectedFilters
  export type SelectedFilters = {
    [key in keyof carProps | "price"]?: string;
  };

  export type formValueProps = {
    pickupdate: Date;
    returnDate: Date;
    pickuptime: Date;
    returntime: Date;
    resetForm: FormikHandlers['handleReset']
    company?: string;
    firstName?: string;
    lastName: string;
    email: string;
    cardNumber: string;
    cardholderName: string;
    expiryDate: string;
    cvv:string
  }