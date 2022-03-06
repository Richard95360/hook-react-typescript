import {useState} from 'react'
import Button from '@mui/material/Button';

 function UseStateComponent() {
    const [arr, setarr] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);
  return (
      <>
    <div>
        <Button variant='contained' color='success' onClick={() => setarr([...arr,arr.length +1])}>
            Add to array
        </Button>
        {JSON.stringify(arr)}
    </div> |
    <div>
        <Button variant='contained' color='success' onClick={() => setName('Richard')}>
            set name
        </Button>
        {JSON.stringify(name)}
    </div>
      </>
  )
}

export default UseStateComponent