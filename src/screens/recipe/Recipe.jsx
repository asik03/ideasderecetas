import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import { RecipeService } from '@/services/DatabaseService'

import PageHeading from '@/components/ui/PageHeading'
import RecipeList from '@/components/recipe/List'
import Alert from '@/components/ui/Alert'




// TODO
// Tenemos que llamar a la bbdd para obtener el elemento y toda su informacion

function ScreenRecipeElem() {
  const { data, isLoading, error, status } = useQuery(
    'recipes',
    // TODO: get only the recipe
    RecipeService.getAll
  )

  const queryClient = useQueryClient()

  const deleteMutation = useMutation((id) => RecipeService.remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes')
    },
  })

  const deleteAction = async (id) => {
    deleteMutation.mutateAsync(id)
  }

  return (
    <>
      <PageHeading title="Recetas Encontradas" />
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
          <RecipeList data={data} deleteAction={deleteAction} />
        )}
      </div>
    </>
  )
}

export default ScreenRecipeElem
