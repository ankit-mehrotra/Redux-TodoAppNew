import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

export const Footer = () => {
    return (
        <div>
           <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink> 
           <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink> 
           <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink> 
        </div>
    )
}
