import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Globals from './globalstyles' 

import Tempo  from './waether'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<Globals />
  <Tempo />

  </StrictMode>,
)
