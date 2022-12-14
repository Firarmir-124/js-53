import React from 'react';

interface typeProps extends React.PropsWithChildren  {
  name: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  add: React.MouseEventHandler<HTMLFormElement>;
}

const AddTaskForm:React.FC<typeProps> = props => {

  return (
    <div>
      <form action="#" className='form' onSubmit={props.add}>
        <input type="text" value={props.name} onChange={props.onNameChange} placeholder='Введите задачу'/>
        <button type='submit' className='button'>Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;