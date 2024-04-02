import React from 'react'
import './CSS/Project.css';
function Project() {
    return (
        <div  className="project-body">
           <h1 className='project-header'>These are some of my personal projects</h1>
           <div className='project-div'>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Tic-Tac-Toe/'>Tic Tac Toe</a>
                    <hr className='project-hr'/>
                    <iframe title='tic tac toe game' className='projects' src="https://viveroa2291.github.io/Tic-Tac-Toe/"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Cancun/'>Cancun Mexican Grill</a>
                    <hr className='project-hr'/>
                    <iframe title='Cancun Mexican Grill Restaraunt' className='projects' src="https://viveroa2291.github.io/Cancun/"/>
                </span>
                <span className='project-span'>
                    <a className='project-h2' href='https://viveroa2291.github.io/Developer-Site/'>Developer Site</a>
                    <hr className='project-hr'/>
                    <iframe title='My Developer Website' className='projects' src="https://viveroa2291.github.io/Developer-Site/"/>
                </span>
           </div>
        </div>
    )
}
export default Project;