import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'

import Home from '@/screens/Home'
import NotFound from '@/screens/NotFound'
import ScreenRecipeList from '@/screens/recipe/List'
import ScreenRecipeForm from '@/screens/recipe/Form'
import ScreenRecipeElem from '@/screens/recipe/Recipe'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/recipe">
              <ScreenRecipeList />
            </Route>
            <Route path="/recipe/elem/:id">
              <ScreenRecipeElem />
            </Route>
            {/* <Route path="/recipe/edit/:id">
              <ScreenAuthorForm />
            </Route> */}
            <Route path="/recipe/create">
              <ScreenRecipeForm />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
