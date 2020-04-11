const TInput = {
  baseClass: 'border-2 border-blue-500 block w-full rounded'
}

const TButton = {
  baseClass: 'rounded-md border block inline-flex items-center justify-center rounded-full shadow-md text-primary-dark font-bold',
  primaryClass: 'text-white bg-primary-light border-primary-light hover:bg-primary hover:border-primary hover:text-white'
}

const TCard = {
  baseClass: 'bg-primary rounded shadow-md',
  bodyClass: 'p-5'
}

const TTextarea = {
  baseClass: 'border block w-full rounded bg-transparent border-primary',
  defaultStatusClass: 'bg-primary-light border-primary',
  errorStatusClass: 'border-red-300 bg-red-100',
  warningStatusClass: 'border-yellow-400 bg-yellow-100',
  successStatusClass: 'border-green-300 bg-green-100',
  disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75'
}

const TSelect = {
  baseClass: 'block appearance-none w-full border pr-8 rounded leading-tight',
  baseClassMultiple: 'block appearance-none w-full border rounded leading-tight',
  defaultStatusClass: 'bg-transparent border-primary'
}

const TDropdown = {
  baseClass: '',
  dropdownClass: 'w-40 bg-primary-light rounded border border-primary-light shadow-md z-10',
  disabledClass: ''
}

const TailwindTheme = {
  TInput,
  TButton,
  TCard,
  TTextarea,
  TSelect,
  TDropdown
}

export default TailwindTheme
