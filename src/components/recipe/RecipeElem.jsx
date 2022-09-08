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

    <div className="overflow-hidden antialiased font-medium  mx-auto max-w-4xl">
      {/* <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 ">
          <h3 style={{textTransform: 'capitalize', textAlign: 'center'}} className='text-xl font-medium leading-6 text-gray-900'>
            {data.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {data.description}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Application for</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
            </div>
          </dl>
        </div>

      </div> */}


      <div className="flex flex-col w-full">

        {/* TITLE */}
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className='px-4 py-5 sm:px-6'>
            <h3 style={{textTransform: 'capitalize'}} className='text-lg font-medium leading-6 text-gray-900'>
                {data.name}
              </h3>
          </div>
        </div>

        <div className="divider"></div>


        {/* IMAGES */}
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">IMAGES</div>

        <div className="divider"></div>

        {/* TIME, DIFICULTY, PRICE */}
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">TIME</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">DIFICULTY</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">PRICE</div>
        </div>

        <div className="divider divide-x-2"></div>

        {/* INGREDIENTS (PERONSAS, GRID DE INGREDIENTES CON IMAGENES) */}
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">INGREDIENTS</div>

        <div className="divider divide-x-2"></div>

        {/* STEPS (ORDERED LIST OF THE STEPS) */}
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">STEPS</div>

        <div className="divider"></div>

        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">OTHER RECIPES</div>
        </div>



      </div>

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
      <div className='bg-gray-100'>
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
      </div>
    </div>
  )
}

export default RecipeList
