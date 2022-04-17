import React from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts =[
        {id:1,name:"dbk ddk",img:"https://images.unsplash.com/photo-1588390801685-1432b35a975b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91ciUyMGd1aWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
        {id:2,name:"dbk ddk",img:"https://images.unsplash.com/photo-1588390801685-1432b35a975b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91ciUyMGd1aWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
        {id:3,name:"dbk ddk",img:"https://images.unsplash.com/photo-1588390801685-1432b35a975b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91ciUyMGd1aWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
    ]
    return (
        <div>
            <h1 className='text-primary'>our experts all</h1>
            {
                experts.map(expert =>
                     <Expert
                     key={expert.id}
                     expert={expert}
                     ></Expert>)
            }
        </div>
    );
};

export default Experts;