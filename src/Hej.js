import React from 'react'
import { graphql, compose } from 'react-apollo'
import { getSomeField, getPersons } from './lambda/client/queries'

const Hej = props => {
   const { getSomeField, getPersons } = props
   const { error, loading, someField } = getSomeField
   console.log('sdfsdfsd', getPersons)

   return (
      <div>
         someField: {someField}
      </div>
   )
}

export default compose(
   graphql(getSomeField, {
      name: "getSomeField"
   }),
   graphql(getPersons, {
      name: "getPersons"
   }),
)(Hej)