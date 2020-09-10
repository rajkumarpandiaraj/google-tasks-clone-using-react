import React from 'react';
import logo from '../assets/logo.png';
import '../assets/all.min.css';
import '../assets/modal.css';

function Navmodal(props) {
    const {handleModalOpen, isModalOpened} = props
    return (
        <div className='modal' onClick={handleModalOpen} style={isModalOpened ? {animationName : 'modalOpen'} : {animationName : 'modalClose'} }>
            <div className='modal-container'>
                <div className='logo-brand'>
                    <img src={logo} alt='logo'/>
                    <p className='modal-brand-name'>GoogleTasks</p>
                </div>
                <hr className='line-break'/>
                <div className='board'>
                    <div className='main-board'>
                        <i className='far fa-clipboard icon'></i>
                        <span>Main board</span>
                    </div>
                    
                    <div className='add-board'>
                        <div className='plus'>
                        <i className='fas fa-plus icon'></i>
                        </div>
                        <span>Add board</span>
                    </div>
                </div>
                <hr className='line-break'/>
                <div className='premium'>
                    <div className='star'>
                        <i className='fas fa-star icon'></i>
                    </div>
                    <p>Try Premium for free</p>
                </div>
                <hr className='line-break-last'/>
                <div className='task-board'>
                    <h4>TasksBoard</h4>
                    <ul className='list'>
                        <li className='item'>TasksBoard Premium pricing</li>
                        <li className='item'>Terms of service</li>
                        <li className='item'>Billing terms</li>
                        <li className='item'>Privacy policy</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navmodal
