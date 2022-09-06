import React from 'react'
import { Link } from 'react-router-dom'
import {
  CollectionIcon,
  UserCircleIcon,
  BookOpenIcon,
  MinusSmIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
import PageHeading from '@/components/ui/PageHeading'
import { StopIcon } from '@heroicons/react/solid'

function PageCardLink({ title, url, icon }) {
  return (
    <Link
      className="flex flex-col w-48 p-4 place-items-center bg-neutral rounded-box hover:text-primary"
      to={url}
    >
      {React.createElement(icon, {
        className: 'h-20 w-20',
        'aria-hidden': 'true',
      })}

      <h3 className="text-lg font-bold">{title} </h3>
    </Link>
  )
}

function Home() {
  const data = [
    {
      title: 'Generar Receta',
      url: '/recipe',
      icon: ArrowCircleRightIcon,
    }
  ]

  const pageCards = data.map((item, index) => (
    <PageCardLink
      key={index}
      title={item.title}
      url={item.url}
      icon={item.icon}
    />
  ))
  return (
    <>
      <PageHeading title="Ideas de Recetas" />
      <h2 className="mt-8 text-lg font-semibold text-primary">
        Encuentra una idea de muchas recetas para cocinar haciendo click en el generador de recetas aleatorio:
      </h2>
      <div className="grid grid-cols-1 mt-8 ml-3 mr-3 justify-items-center md:grid-cols-1">
        {pageCards}
      </div>
    </>
  )
}

export default Home
