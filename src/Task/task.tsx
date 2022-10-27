import React from 'react';

interface typeProps extends React.PropsWithChildren {
  name: string;
  remove: React.MouseEventHandler;
  completed: React.MouseEventHandler;
  addClass: string;

}


const Task:React.FC<typeProps> = props => {
  return (
    <div>
      <div className={props.addClass}>
        <p>{props.name}</p>
        <input className='chek' type="checkbox" onClick={props.completed}/>
        <button onClick={props.remove}></button>
      </div>
    </div>
  );
};

export default Task;