/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUnicorn = /* GraphQL */ `
  mutation CreateUnicorn(
    $input: CreateUnicornInput!
    $condition: ModelunicornConditionInput
  ) {
    createUnicorn(input: $input, condition: $condition) {
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
export const updateUnicorn = /* GraphQL */ `
  mutation UpdateUnicorn(
    $input: UpdateUnicornInput!
    $condition: ModelunicornConditionInput
  ) {
    updateUnicorn(input: $input, condition: $condition) {
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
export const deleteUnicorn = /* GraphQL */ `
  mutation DeleteUnicorn(
    $input: DeleteUnicornInput!
    $condition: ModelunicornConditionInput
  ) {
    deleteUnicorn(input: $input, condition: $condition) {
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
