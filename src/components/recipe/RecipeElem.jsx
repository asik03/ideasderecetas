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

function RecipeElem({
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

    <div className="overflow-hiddenantialiased font-medium mx-auto max-w-xs sm:max-w-xl lg:max-w-3xl">
      <div className="rounded-lg p-4 border-2">

        <div className=" mx-96">
        </div>
        <div className="flex flex-col w-full">
          {/* TITLE */}
          <div className="grid h-20 card bg-base-300 rounded-lg place-items-center">

              <h3 style={{textTransform: 'capitalize'}} className='text-lg font-medium leading-6 text-gray-900'>
                  {data.name}
                </h3>

          </div>

          <div className="divider"></div>

          {/* IMAGES */}
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">IMAGES</div>
            <div className="carousel rounded-box self-center m-8">
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Burger" />
              </div>
            </div>

          <div className="divider"></div>

          {/* TIME, DIFICULTY, PRICE */}
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">TIME</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">DIFICULTY</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">PRICE</div>
          </div>

          <div className="divider divide-x-2">INGREDIENTS</div>

          {/* INGREDIENTS (PERONSAS, GRID DE INGREDIENTES CON IMAGENES) */}
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">

            INGREDIENTS

          </div>

          <div className="divider divide-x-2">STEPS</div>

          {/* STEPS (ORDERED LIST OF THE STEPS) */}
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            STEPS
          </div>

          <div className="divider"></div>

          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">OTHER RECIPES</div>
          </div>
        </div>


      </div>


      {/* <div className="mb-4">
        <Link to="/recipe/create" className="btn btn-secondary btn-sm">
          <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
          New Recipe
        </Link>
      </div> */}

      {/* <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl py-12 sm:px-6 lg:px-8 sm:rounded-lg'>
          <div className="mx-auto max-w-4xl">
            <div className='overflow-hidden bg-white shadow rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h3 style={{textTransform: 'capitalize'}} className='text-lg font-medium leading-6 text-gray-900'>
                  {data.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default RecipeElem
