import { gql } from "@apollo/client";

// fetch all listings query
// TODO: to add pagination
export const GET_ALL_LISTINGS = gql`
  query Listings {
    listings {
      area
      bathrooms
      bedrooms
      createdAt
      description
      id
      images
      location
      price
      title
      user {
        username
      }
    }
  }
`;

// fetch a single listing query
export const GET_LISTING = gql`
  query Listing($listingId: String!) {
    listing(id: $listingId) {
      area
      bathrooms
      bedrooms
      createdAt
      description
      id
      images
      location
      price
      title
      user {
        username
      }
    }
  }
`;
