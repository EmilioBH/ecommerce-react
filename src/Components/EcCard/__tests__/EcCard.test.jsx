import { render, screen } from '@testing-library/react'
import React from 'react'
import EcCard from '../EcCard'

describe('EcCard', () => {
  const mockData = {
    category: { name: 'Categoría de Prueba' },
    images: ['url-de-imagen'],
    title: 'Producto de Prueba',
    price: '100',
  }

  it('should render the product information', () => {
    render(<EcCard data={mockData} />)

    expect(screen.getByText(mockData.category.name)).toBeInTheDocument()
    expect(screen.getByText(mockData.title)).toBeInTheDocument()
    expect(screen.getByText(`$ ${mockData.price}`)).toBeInTheDocument()
    expect(screen.getByAltText(mockData.title)).toHaveAttribute(
      'src',
      mockData.images[0]
    )
  })
})
