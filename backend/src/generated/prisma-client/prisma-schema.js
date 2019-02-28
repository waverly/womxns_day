module.exports = {
        typeDefs: /* GraphQL */ `type AggregateWoman {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createWoman(data: WomanCreateInput!): Woman!
  updateWoman(data: WomanUpdateInput!, where: WomanWhereUniqueInput!): Woman
  updateManyWomen(data: WomanUpdateManyMutationInput!, where: WomanWhereInput): BatchPayload!
  upsertWoman(where: WomanWhereUniqueInput!, create: WomanCreateInput!, update: WomanUpdateInput!): Woman!
  deleteWoman(where: WomanWhereUniqueInput!): Woman
  deleteManyWomen(where: WomanWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  woman(where: WomanWhereUniqueInput!): Woman
  women(where: WomanWhereInput, orderBy: WomanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Woman]!
  womenConnection(where: WomanWhereInput, orderBy: WomanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WomanConnection!
  node(id: ID!): Node
}

type Subscription {
  woman(where: WomanSubscriptionWhereInput): WomanSubscriptionPayload
}

type Woman {
  id: ID!
  name: String!
  slug: String!
  createdAt: DateTime!
}

type WomanConnection {
  pageInfo: PageInfo!
  edges: [WomanEdge]!
  aggregate: AggregateWoman!
}

input WomanCreateInput {
  name: String!
  slug: String!
}

type WomanEdge {
  node: Woman!
  cursor: String!
}

enum WomanOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WomanPreviousValues {
  id: ID!
  name: String!
  slug: String!
  createdAt: DateTime!
}

type WomanSubscriptionPayload {
  mutation: MutationType!
  node: Woman
  updatedFields: [String!]
  previousValues: WomanPreviousValues
}

input WomanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WomanWhereInput
  AND: [WomanSubscriptionWhereInput!]
  OR: [WomanSubscriptionWhereInput!]
  NOT: [WomanSubscriptionWhereInput!]
}

input WomanUpdateInput {
  name: String
  slug: String
}

input WomanUpdateManyMutationInput {
  name: String
  slug: String
}

input WomanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [WomanWhereInput!]
  OR: [WomanWhereInput!]
  NOT: [WomanWhereInput!]
}

input WomanWhereUniqueInput {
  id: ID
}
`
      }
    