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