/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUnicorn = /* GraphQL */ `
  query GetUnicorn($id: ID!) {
    getUnicorn(id: $id) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listUnicorns = /* GraphQL */ `
  query ListUnicorns(
    $filter: ModelunicornFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnicorns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
