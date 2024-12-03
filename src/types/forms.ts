export type bookingDataProps = {
    location: string;
    name: string;
    email: string;
    pickupdate: string;
    pickuptime: string;
    dropofftime:string;
    dropoffdate: string;
    contact: string;
    carId: string
}

export type emailDataProps = {
    username: string | null | undefined;
    carBrand: string;
    pickupdate: string;
    pickuptime: string;
    dropofftime:string;
    dropoffdate: string;
    location: string;
    bookingid:string;
    useremail: string | null | undefined;

}

export type bookingResProps = {
    createBooking: {
        id: string;
    }
}

export interface locationResProps {
  storedLocations: {
    address: string;
    id: string;
    // Add other properties if needed
  }[];
}