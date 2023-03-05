import { gql } from "@apollo/client";




export const GET_ALL_PRODUCTS = gql`
query($pagination: Pagination!){
  getAllProducts(Pagination: $pagination) {
    docs {
      name
      price
      sku
      stock
      thumbnail
      disabled
      categories {
        name
      }
    }
    last_page
    limit
    offset
    page
    totalDocs
  }
}
`