import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import { RecipeService } from '@/services/DatabaseService'

import PageHeading from '@/components/ui/PageHeading'
import RecipeList from '@/components/recipe/List'
import Alert from '@/components/ui/Alert'

function ScreenRecipeList() {
  const { data, isLoading, error, status } = useQuery(
    'recipes',
    RecipeService.getAll
  )

  const queryClient = useQueryClient()

  const deleteMutation = useMutation((id) => RecipeService.remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('authors')
    },
  })

  const deleteAction = async (id) => {
    deleteMutation.mutateAsync(id)
  }

  return (
    <>
      <PageHeading title="Recetas Encontradas" />
      <div className="mt-6">
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

export default ScreenRecipeList
