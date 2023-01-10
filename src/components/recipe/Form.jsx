import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Alert from '@/components/ui/Alert'
import { Link } from 'react-router-dom'
import { ImageList } from '@mui/material'

const schema = yup.object().shape({
  name: yup
    .string()
    .label('Name')
    .required()
    .min(2),
  cook_time: yup
    .number()
    .label('CookTime')
    .required()
    .min(1),
  cover: yup
    .string()
    .label('CoverImg')
    .required()
    .min(2),
  name: yup
    .string()
    .label('Description')
    .required()
    .min(2),
  difficulty: yup
    .number()
    .label('Difficulty')
    .required()
    .min(1),
  imgs: yup.array()
    .of(
      yup.object().shape({
        img: yup.string(),
      })
    ),
    // .required(),
  ingredients: yup.array()
    .of(
      yup.object().shape({
        calories: yup.string(),
        name: yup.string(),
      })
    ),
    // .required(),
  price: yup
    .number()
    .label('Price')
    .required()
    .min(1),
  steps: yup.array()
    .of(
      yup.object().shape({
        step: yup.string(),
      })
    ),
    // .required(),
})

function RecipeForm({ values, submit }) {
  const [errorMsg, setErrorMsg] = useState('')



  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      test: [{ name: "Bill", lastName: "Luo" }]
    }
  })

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "test"
  });

  useEffect(() => {
    reset(values)
  }, [values])

  const onSubmit = (submittedData) => {
    try {
      submit(submittedData) // submit data to action handler
    } catch (err) {
      setErrorMsg(err.message)
    }
  }

  const buttonStyle = "block appearance-none bg-gray-100 to-white mt-9 border-solid border-2 p-3 uppercase rounded-badge"

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {errorMsg && <Alert type="error" message={errorMsg} />}

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register('name')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register('description')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Difficulty</span>
          </label>
          <input
            type="number"
            autoComplete="off"
            {...register('difficulty')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Cook Time</span>
          </label>
          <input
            type="number"
            autoComplete="off"
            {...register('cook_time')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            autoComplete="off"
            {...register('price')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Steps */}
        <div>
        <label className="label" htmlFor="name">
            <span className="label-text">Ingredients</span>
          </label>
          <ul className=' m-0 p-0'>
            {fields.map((item, index) => {
              return (
                <li key={item.id} className=" grid gap-5 grid-cols-3">

                  <input className={`input input-bordered ${errors.name && 'input-error'}`}
                    {...register(`test.${index}.ingredientName`, { required: true })}
                  />

                  <Controller className="block box-border w-max border-solid border-2 border-white  px-2 py-3 mb-2  text-sm"
                    render={({ field }) => <input
                    className={`input input-bordered ${errors.name && 'input-error'}`}
                      {...field} />}
                    name={`test.${index}.lastName`}
                    control={control}
                  />
                  <button className=" self-center block appearance-none bg-gray-100 to-white border-solid border-2 p-3 uppercase rounded-badge" type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <section className='grid  gap-5 grid-cols-3'>
          <button
            className={buttonStyle}
            type="button"
            onClick={() => {
              append({ name: "Tomato", lastName: "appendLuo" });
            }}
          >
            Add Ingredient
          </button>

          <button
            className={buttonStyle}
            type="button"
            onClick={() =>
              reset({
                test: [{ name: "Tomato", lastName: "Luo" }]
              })
            }
          >
            reset
          </button>
        </section>

        {/* Missing
        cover-- image upload
        imgs -- list of images
        (wip) ingredients -- list of ingredients object
        steps -- list of string
        */}

        <div className="flex justify-end space-x-4">
          <button type="submit" className="btn btn-primary btn-sm w-24">
            Save
          </button>
          <Link to="/recipe" className="btn btn-outline btn-sm w-24">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
