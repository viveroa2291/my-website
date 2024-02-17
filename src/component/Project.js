import React from 'react'
import './CSS/Project.css';
function Project() {
    return (
        <div  className="project-body">
           <h1 className='project-header'>These are some of my personal projects</h1>
           <div className='project-div'>
                <span className='project-span'>
                    <h2 className='project-h2'>Tic Tac Toe</h2>
                    <hr className='project-hr'/>
                    <iframe title='tic tac toe game' className='projects' src="https://viveroa2291.github.io/Tic-Tac-Toe/"></iframe>
                </span>
                <span className='project-span'>
                    <h2 className='project-h2'>Cancun Mexican Grill</h2>
                    <hr className='project-hr'/>
                    <iframe title='Cancun Mexican Grill Restaraunt' className='projects' src="https://viveroa2291.github.io/Cancun/"></iframe>
                </span>
                <span className='project-span'>
                    <h2 className='project-h2'>Developer Site</h2>
                    <hr className='project-hr'/>
                    <iframe title='My Developer Website' className='projects' src="https://viveroa2291.github.io/Developer-Site/"></iframe>
                </span>
           </div>
        </div>
    )
}
export default Project;