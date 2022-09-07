import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { RecipeService } from '@/services/DatabaseService'

import PageHeading from '@/components/ui/PageHeading'
import RecipeList from '@/components/recipe/List'
import RecipeElem from '@/components/recipe/RecipeElem'

import Alert from '@/components/ui/Alert'




// TODO
// Tenemos que llamar a la bbdd para obtener el elemento y toda su informacion

function ScreenRecipeElem() {
  const { id } = useParams()

  const { data, isLoading, error, status } = useQuery(
    ['recipe', { id }],
    RecipeService.getOne
  )

  const queryClient = useQueryClient()

  // const deleteMutation = useMutation((id) => RecipeService.remove(id), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('recipes')
  //   },
  // })

  // const deleteAction = async (id) => {
  //   deleteMutation.mutateAsync(id)
  // }


  return (
    <>
      {/* <PageHeading title="data.name" /> */}
      <div className="mt-12">
        {error && <Alert type="error" message={error.message} />}
        {isLoading && (
          <Alert
            type="info"
            message="Cargando..."
            innerClass="animate animate-pulse"
          />
        )}
        {status === 'success' && (
          <RecipeElem data={data}
          // deleteAction={deleteAction}
          />
        )}
      </div>
    </>
  )
}

export default ScreenRecipeElem
