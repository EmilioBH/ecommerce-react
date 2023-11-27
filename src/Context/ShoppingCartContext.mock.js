// Mock del contexto
const mockContext = {
  counter: 0,
  setCounter: jest.fn(),
}

jest.mock('../../Context', () => ({
  ShoppingCartContext: {
    Consumer: (props) => props.children(mockContext),
    Provider: ({ children }) => <div>{children}</div>,
  },
}))
