export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Category = {
  __typename?: "Category"
  id: Scalars["String"]
  name: Scalars["String"]
  createdAt: Scalars["DateTime"]
  updatedAt: Scalars["DateTime"]
  products?: Maybe<Array<Product>>
}

export type CreateCategoryInput = {
  name: Scalars["String"]
}

export type CreateProductInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
  discount?: Maybe<Scalars["Float"]>
  sku?: Maybe<Scalars["String"]>
  stock?: Maybe<Scalars["Int"]>
  thumbnail?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Scalars["String"]>>
  images?: Maybe<Array<Scalars["String"]>>
  disabled?: Maybe<Scalars["Boolean"]>
}

export type CreateUserInput = {
  name: Scalars["String"]
  email: Scalars["String"]
  phone: Scalars["String"]
  password: Scalars["String"]
  roles: Array<Roles>
}

export type LoginInput = {
  username: Scalars["String"]
  password: Scalars["String"]
}

export type LoginResponse = {
  __typename?: "LoginResponse"
  message: Scalars["String"]
  token: Scalars["String"]
  user: LoginUser
}

export type LoginUser = {
  __typename?: "LoginUser"
  name: Scalars["String"]
  email: Scalars["String"]
  phone: Scalars["String"]
  roles: Array<Roles>
}

export type Mutation = {
  __typename?: "Mutation"
  createProduct: Product
  updateProduct: Product
  removeProduct: Product
  createCategory: Category
  updateCategory: Category
  login: LoginResponse
  createUser?: Maybe<User>
  updateUser: User
  removeUser: User
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationRemoveProductArgs = {
  id: Scalars["Int"]
}

export type MutationCreateCategoryArgs = {
  category: CreateCategoryInput
}

export type MutationUpdateCategoryArgs = {
  category: UpdateCategoryInput
}

export type MutationLoginArgs = {
  login: LoginInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationRemoveUserArgs = {
  id: Scalars["Int"]
}

export type PaginatedCategories = {
  __typename?: "PaginatedCategories"
  page: Scalars["Int"]
  limit: Scalars["Int"]
  last_page: Scalars["Int"]
  totalDocs: Scalars["Int"]
  offset: Scalars["Int"]
  docs: Array<Category>
}

export type PaginatedProduct = {
  __typename?: "PaginatedProduct"
  page: Scalars["Int"]
  limit: Scalars["Int"]
  last_page: Scalars["Int"]
  totalDocs: Scalars["Int"]
  offset: Scalars["Int"]
  docs: Array<Product>
}

export type Pagination = {
  page?: Maybe<Scalars["Int"]>
  search?: Maybe<Scalars["String"]>
  limit?: Maybe<Scalars["Int"]>
}

export type Product = {
  __typename?: "Product"
  id: Scalars["String"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
  discount?: Maybe<Scalars["Float"]>
  sku?: Maybe<Scalars["String"]>
  stock?: Maybe<Scalars["Int"]>
  thumbnail?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Category>>
  images?: Maybe<Array<Scalars["String"]>>
  disabled?: Maybe<Scalars["Boolean"]>
  createdAt: Scalars["DateTime"]
  updatedAt: Scalars["DateTime"]
}

export type Query = {
  __typename?: "Query"
  getAllProducts: PaginatedProduct
  getProduct: Product
  getAllCategories: PaginatedCategories
  getAuthenticatedUser: User
  users: Array<User>
  user: User
}

export type QueryGetAllProductsArgs = {
  Pagination: Pagination
}

export type QueryGetProductArgs = {
  id: Scalars["String"]
}

export type QueryGetAllCategoriesArgs = {
  pagination: Pagination
}

export type QueryUserArgs = {
  id: Scalars["Int"]
}

export enum Roles {
  SuperAdmin = "super_admin",
  Admin = "admin",
  User = "user"
}

export type UpdateCategoryInput = {
  id: Scalars["String"]
}

export type UpdateProductInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  price?: Maybe<Scalars["Float"]>
  discount?: Maybe<Scalars["Float"]>
  sku?: Maybe<Scalars["String"]>
  stock?: Maybe<Scalars["Int"]>
  thumbnail?: Maybe<Scalars["String"]>
  categories?: Maybe<Array<Scalars["String"]>>
  images?: Maybe<Array<Scalars["String"]>>
  disabled?: Maybe<Scalars["Boolean"]>
  id: Scalars["String"]
}

export type UpdateUserInput = {
  name?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  roles?: Maybe<Array<Roles>>
  id: Scalars["Int"]
}

export type User = {
  __typename?: "User"
  id: Scalars["String"]
  banned?: Maybe<Scalars["Boolean"]>
  name: Scalars["String"]
  email: Scalars["String"]
  phone: Scalars["String"]
  roles: Array<Roles>
}
