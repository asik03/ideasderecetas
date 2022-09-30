import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StorageService from '@/services/StorageService'
// TODO
function RecipeImageCard({ recipeImage }) {
  const [imageLink, setImageLink] = useState()

  useEffect(async () => {
    const url = await StorageService.getImageURL(recipeImage.cover)
    setImageLink(url)
  }, [recipeImage])

  return (
    <div>
      <Link  to={`/recipe/elem/${recipe.id}`}>
        <img src={imageLink} alt={recipeImage.name} />
      </Link>
    </div>
  )
}

export default RecipeImageCard
