import React, { useEffect, useState } from 'react'
import StorageService from '@/services/StorageService'

import { Link } from 'react-router-dom'
import {
  UserCircleIcon,
  PencilAltIcon,
  TrashIcon,
  PlusIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/outline'

import EmptyState from '@/components/ui/EmptyState'
import DeleteModal from '@/components/ui/DeleteModal'
import { ClockIcon } from '@heroicons/react/outline'

import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function parse_cook_time(minutes){
  return `${minutes} minutos`
}

function parse_difficulty(difficulty){
  var output
  switch(difficulty) {
    case 1:
      output = "Muy fácil"
      break;
    case 2:
      output = "Facil"
      break;
    case 3:
      output = "Intermedio"
      break;
    case 4:
      output = "Difícil"
      break;
    case 5:
      output = "Muy difícil"
      break;
    default:
      output = "No difficulty found"
  }
  return `${output}`
}

/**
 * Select between different values depending on the price value ranges
 * @param {*} price Prices are in dollars $ and per eater, TODO: adjust depending on the country (now only in Spain is available)
 * @returns
 */
function parse_price(price){
  var output
  if (price > 10){
    output = "Muy caro"
  } else if (price > 6){
    output = "Caro"
  } else if (price > 4){
    output = "Algo barato"
  } else if (price > 2){
    output = "Barato"
  } else {
    output = "Muy barato"
  }
  return `${output}`
}

const IngredientItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export function ResponsiveIngredientsGrid(ingredients) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {ingredients.ingredients.map((ingredient, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <IngredientItem>{ingredient.name}</IngredientItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  //       {Array.from(Array(6)).map((_, index) => (
  //         <Grid item xs={2} sm={4} md={4} key={index}>
  //           <IngredientItem>xs=2</IngredientItem>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // );
}

function StepsBlock({steps}) {
  if (!steps || steps.length == 0) {
    return (
      <div>EMPTY STEPS</div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <tbody>
          {steps.map((step, index) => (
            <tr key={index}>
              <th>{index+1}</th>
              <td>{step}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



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

  function ImageCard({ image, itemId}) {
    const [imageLink, setImageLink] = useState()

    useEffect(async () => {
      const url = await StorageService.getImageURL(image)
      setImageLink(url)
      return () => {
        setState({}); // This worked for me
      };
    }, [image])

    return (
      <div className="carousel-item" id={itemId}>
        {/* <Link to={`/category/edit/${category.id}`}> */}
          <img src={imageLink} alt={image} className="object-cover h-64 w-128"/>
        {/* </Link> */}
      </div>
    )
  }



  const images = data.imgs.map((image, index) => (
    <ImageCard image={image} itemId={index} key={index} />
  ))

  const img_index = data.imgs.map((image, index) => (
    <a href={"#" + index} className="btn btn-xs" key={index}>
      {index+1}
    </a>
  ))


  return (

    <div className="overflow-hiddenantialiased font-medium mx-auto max-w-xs sm:max-w-xl lg:max-w-3xl">
      <div className="rounded-lg p-4 border-2">

        <div className=" mx-96">
        </div>
        <div className="flex flex-col w-full">
          {/* TITLE */}
          {/* <div className="grid h-20 card bg-base-300 rounded-lg place-items-center">
              <h3 style={{textTransform: 'capitalize'}} className='text-lg font-medium leading-6 text-gray-900'>
                  {data.name}
                </h3>
          </div> */}
          <div className='self-center mt-3'>
            <h2 style={{textTransform: 'capitalize'}} className='text-gray-900 self-center'>
              {data.name}
            </h2>
          </div>

          <div className="divider"></div>

          {/* IMAGES */}
          {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">IMAGES</div> */}
          {/* <div className="carousel rounded-box self-center m-8">
            <div className="carousel-item">
              <img src="https://placeimg.com/400/300/arch" alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src="https://placeimg.com/400/300/arch" alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src="https://placeimg.com/400/300/arch" alt="Burger" />
            </div>
          </div> */}

          {/* IMAGES */}
          {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">IMAGES</div> */}
          <div className="shadow rounded-lg">
            <div className="carousel rounded-box self-center m-8">
              {images}
            </div>

            {/* <div className="flex justify-center w-full py-2 gap-2">
              {img_index}
            </div> */}
          </div>


          <div className="divider"></div>

          {/* TIME, DIFICULTY, PRICE */}

          <div className="stats rounded-lg shadow items-center mx-auto max-w-6xl py-4 lg:px-4 sm:rounded-lg">
            <div className="stat p-4">
              <div className="text-xs sm:text-sm stat-value self-center">
                {parse_cook_time(data.cook_time)}
              </div>
              <div className="stat-figure text-secondary">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                <ClockIcon className="w-6 h-6 mr-2 -ml-1" aria-hidden="true" />
              </div>
            </div>

            <div className="stat">
              <div className="text-xs sm:text-sm stat-value self-center">
                {parse_difficulty(data.difficulty)}
              </div>
              <div className="stat-figure text-secondary">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg> */}
                {/* <ClockIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" /> */}
                <svg aria-hidden="true" className="w-6 h-6 mr-2 -ml-1 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M27.493 16.157C26.42 17.201 25.015 17.8 23.64 17.8l-.027.001h-.025c-.008 0-.767.036-1.582-.213a.933.933 0 1 0-.547 1.785c.449.137.883.213 1.247.253v4.907c-.307.257-1.338.629-3.013.877v-3.222a.933.933 0 0 0-1.866 0v3.417a30.07 30.07 0 0 1-3.6.019v-3.436a.933.933 0 0 0-1.866 0v3.267c-1.838-.242-2.976-.637-3.32-.911v-4.919a6.808 6.808 0 0 0 1.233-.252.933.933 0 0 0-.546-1.785 5.167 5.167 0 0 1-1.581.214h-.012l-.027-.001c-2.969 0-5.573-2.598-5.573-5.56 0-3.177 2.057-5.573 4.787-5.573 1.052 0 1.908.265 2.863.888a.935.935 0 0 0 1.444-.782c0-2.338 1.902-4.24 4.24-4.24s4.24 1.902 4.24 4.24a.932.932 0 0 0 1.444.781c.955-.623 1.815-.888 2.877-.888 2.729 0 4.787 2.396 4.787 5.573 0 1.447-.611 2.839-1.72 3.917zM9.04 28.183v-1.576c2.257.865 5.858.927 6.827.927.971 0 4.584-.062 6.84-.931v1.569c-.497.417-2.891 1.135-6.84 1.135-3.913 0-6.3-.706-6.827-1.124zm20.205-21.15C28.006 5.593 26.296 4.8 24.427 4.8a6.78 6.78 0 0 0-2.63.513c-.656-2.665-3.066-4.647-5.93-4.647s-5.273 1.981-5.929 4.645A6.564 6.564 0 0 0 7.321 4.8c-1.869 0-3.579.793-4.818 2.233C1.32 8.408.668 10.258.668 12.24c0 3.642 2.947 6.873 6.507 7.363v4.964c-.011.069-.016.141-.011.213.002.037.007.072.011.107v3.32c-.011.069-.016.14-.011.213.17 2.621 7.281 2.753 8.705 2.753 1.413 0 8.433-.131 8.699-2.698l.004-.036.002-.019v-.03l.002-.03v-8.757c3.56-.49 6.507-3.72 6.507-7.363 0-1.981-.652-3.831-1.835-5.207z"></path>
                </svg>
              </div>
            </div>

            <div className="stat">
              <div className="text-xs sm:text-sm stat-value self-center">
                {parse_price(data.price)}
              </div>
              <div className="stat-figure text-secondary">
                <CurrencyEuroIcon className="w-6 h-6 mr-2 -ml-1" aria-hidden="true" />
              </div>
            </div>

          </div>
{/*
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">TIME</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">DIFICULTY</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">PRICE</div>
          </div> */}

          <div className="divider divide-x-2">INGREDIENTS</div>

          {/* INGREDIENTS (PERONSAS, GRID DE INGREDIENTES CON IMAGENES) */}
          {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            INGREDIENTS
          </div> */}
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 sm:rounded-lg'>
            <div className="mx-auto max-w-4xl">
              <div className='overflow-hidden bg-white shadow rounded-lg'>
                <div className='px-3 py-3 sm:px-6'>
                  <h3 style={{textTransform: 'capitalize'}} className=' pb-3 text-lg font-medium text-center leading-6 text-gray-900'>
                    Ingredientes
                  </h3>
                  <ResponsiveIngredientsGrid
                  ingredients =
                  {data.ingredients}
                  // {
                  //   [
                  //     {
                  //       "name": "aceite",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "sal",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "arroz",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "pollo",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "conejo",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "judías verdes",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "garrofón",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "tomate natural rallado",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "higados de pollo",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "pimentón dulce",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "azafrán",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "romero",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "agua",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "colorante",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "sal",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     },
                  //     {
                  //       "name": "limón",
                  //       "category": 1,
                  //       "calories": 100,
                  //       "quantity": 500,
                  //       "quantity_type": "gr"
                  //     }
                  //   ]
                  // }
                  >

                  </ResponsiveIngredientsGrid>
                </div>
              </div>
            </div>
          </div>

          <div className="divider divide-x-2">STEPS</div>

          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 sm:rounded-lg'>
            <div className="mx-auto max-w-4xl">
              <div className='overflow-hidden bg-white shadow rounded-lg'>
                <div className='px-3 py-3 sm:px-6'>
                  <h3 style={{textTransform: 'capitalize'}} className=' pb-3 text-lg font-medium text-center leading-6 text-gray-900'>
                    Pasos
                  </h3>
                  <StepsBlock steps={data.steps}
                  // {["Hervir agua", "Cortar cebolla", "Calentar aceite", "Incorporar la cebolla al aceite"]}
                  >
                  </StepsBlock>
                </div>
              </div>
            </div>
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
