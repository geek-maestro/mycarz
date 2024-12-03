import request, { gql } from "graphql-request";
import { CarListResult } from "../types/dashboard";
import { bookingResProps, locationResProps } from "../types/forms";
import { FormDetails } from "../pages/dashboard/components/CarBooking/Form";

export const getCarList = async () => {
  const query = gql`
    query MyQuery {
      cars(orderBy: price_ASC) {
        carBrand
        carType
        createdAt
        id
        name
        price
        seats
        image {
          fileName
          url
        }
      }
    }
  `;

  const result = await request<CarListResult>(
    "https://eu-west-2.cdn.hygraph.com/content/cm46zxgz3003d07wahgv7cn25/master",
    query
  );
  return result;
};

export const getLocations = async () => {
  const locquery = gql`
    query MyQuery {
      storedLocations {
        address
        id
      }
    }
  `;

  const result = await request<locationResProps>(
    "https://eu-west-2.cdn.hygraph.com/content/cm46zxgz3003d07wahgv7cn25/master",
    locquery
  );
  return result;
};

export const createBooking = async ( formDetails: FormDetails ) => {
  const mutationquery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          name: "`+formDetails.name+`"
          contact: "`+formDetails.contact+`"
          dropoffdate: "`+formDetails.dropoffdate+`"
          dropofftime: "`+formDetails.dropofftime+`"
          pickupdate: "`+formDetails.pickupdate+`"
          pickuptime: "`+formDetails.pickuptime+`"
          cars: { connect: { id: "`+formDetails.carId+`" } }
        }
      ) {
        id
      }
    }
  `;
  const result = await request<bookingResProps>(
    "https://eu-west-2.cdn.hygraph.com/content/cm46zxgz3003d07wahgv7cn25/master",
    mutationquery
  );
  return result;
};
