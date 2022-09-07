import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { RecipeService } from '@/services/DatabaseService'

import PageHeading from '@/components/ui/PageHeading'
import RecipeForm from '@/components/recipe/Form'
import Alert from '@/components/ui/Alert'

function ScreenRecipeForm() {
  const { id } = useParams()

  const { data, isLoading, error, status } = useQuery(
    ['recipe', { id }],
    RecipeService.getOne
  )

  const queryClient = useQueryClient()

  const saveData = (data) => {
    if (id) {
      return RecipeService.update(id, data)
    } else {
      RecipeService.create(data)
    }
  }

  const mutation = useMutation((data) => saveData(data), {
    onSuccess: () => {
      if (id) queryClient.invalidateQueries(['recipe', { id }])
    },
  })

  const { isSuccess } = mutation

  const onSubmit = async (submittedData) => {
    mutation.mutate(submittedData)
  }

  if (isSuccess) {
    return <Redirect to="/recipe" />
  }

  if (!id) {
    return (
      <>
        <PageHeading title="Create Recipe" />
        <div className="mt-12">
          {error && <Alert type="error" message={error.message} />}
          <RecipeForm submit={onSubmit} />
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeading title="Edit Recipe" />
      <div className="mt-12">
        {error && <Alert type="error" message={error.message} />}
        {isLoading && (
          <Alert
            type="info"
            message="Loading..."
            innerClass="animate animate-pulse"
          />
        )}
        {status === 'success' && <RecipeForm values={data} submit={onSubmit} />}
      </div>
    </>
  )
}

export default ScreenRecipeForm
