import React from 'react';

interface typeProps extends React.PropsWithChildren  {
  name: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  add: React.MouseEventHandler;
}

const AddTaskForm:React.FC<typeProps> = props => {

  return (
    <div>
      <form action="#" className='form'>
        <input type="text" value={props.name} onChange={props.onNameChange}/>
        <button className='button' onClick={props.add}>Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;