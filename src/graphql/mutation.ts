import { gql } from "@apollo/client";


export const LOGIN_MUTATION = gql`
mutation($login: LoginInput!){
  login(login: $login) {
    message
    token
    user {
      email
      name
      phone
      roles
    }
  }
}
`

export const CREATE_PRODUCT_MUTATION = gql`
mutation($createProductInput: CreateProductInput!){
  createProduct(createProductInput: $createProductInput) {
    id
  }
}
`