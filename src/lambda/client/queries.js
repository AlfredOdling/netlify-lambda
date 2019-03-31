import gql from 'graphql-tag'

// LOCAL
export const getSomeField = gql`
  {
    someField @client
  }
`

export const ADD_FIELD = gql`
  mutation addField($field: String!) {
    addField(field: $field) @client {
      field
    }
  }
`

// SERVER
export const getPersons = gql`
query {
  persons {
    email
  }
}
`
