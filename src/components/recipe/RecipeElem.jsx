import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  UserCircleIcon,
  PencilAltIcon,
  TrashIcon,
  PlusIcon,
} from '@heroicons/react/outline'

import EmptyState from '@/components/ui/EmptyState'
import DeleteModal from '@/components/ui/DeleteModal'

function RecipeList({
  data,
  // deleteAction
}) {
  const [selected, setSelected] = useState()
  const [openModal, setOpenModal] = useState(false)
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={UserCircleIcon}
        title="No recipes"
        message="Start by adding a new recipe"
        btnLabel="Add Recipe"
        link="/recipe/create"
      />
    )
  }

  const showDeleteModal = (id) => {
    setSelected(id)
    setOpenModal(true)
  }

  const deleteModalAction = () => {
    deleteAction(selected)
    setOpenModal(false)
  }

  const cancelModalAction = () => {
    setOpenModal(false)
  }

  return (
    <div className="overflow-x-auto">
      <DeleteModal
        open={openModal}
        deleteAction={deleteModalAction}
        cancelAction={cancelModalAction}
      />
      {/* <div className="mb-4">
        <Link to="/recipe/create" className="btn btn-secondary btn-sm">
          <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
          New Recipe
        </Link>
      </div> */}
      <table className="table w-full max-w-screen-lg">
        <thead>
          <tr>
            <th>Name: {data.name}</th>
            <th scope="col">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((recipe, index) => (
            <tr key={index}>
              <td>
                <Link
                  to={`/recipe/elem/${recipe.id}`}
                  className="text-primary hover:text-primary-focus"
                  title={`Open ${recipe.name}`}
                >
                  {recipe.name}
                </Link>
              </td>
              <td>
                <Link // TODO
                  to={`/recipe/edit/${recipe.id}`}
                  className="text-primary hover:text-primary-focus"
                  title={`Edit ${recipe.name}`}
                >
                <PencilAltIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                />
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  title={`Delete ${recipe.name}`}
                  className="text-secondary-content"
                  onClick={() => showDeleteModal(recipe.id)}
                >
                  <TrashIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  )
}

export default RecipeList
