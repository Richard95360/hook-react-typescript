
import {useRef, useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import IconButton  from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function UseRefComponent() {

    const [name, setName] = useState<string>('Ricardo');
    const [count, setCount] =useState(0)

    const previousName = useRef<string | null>(null);

    useEffect(() => {
     previousName.current = name;
    

    }, [name])
    
   
    
  return (
      <>

         <input value={name}  onChange={e => setName(e.target.value)} />
          <div>{previousName.current}</div>
          <p>{count}</p>
          <Button variant='outlined' color='error' onClick={() => setCount(prev => prev +1)}> clique: </Button>
          <IconButton aria-label="delete">
          <DeleteIcon fontSize="inherit" onClick={() => setCount(_count => _count  =- 0) } />
          </IconButton>
      </>
  )
}

export default UseRefComponent;