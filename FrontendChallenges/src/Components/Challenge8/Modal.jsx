import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null

    useEffect(()=>{
        const orignalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) =>{
            if(e.key === 'Escape') onClose()
        };

        document.addEventListener('keydown', handleKeyDown)

        return()=>{
            document.body.style.overflow = orignalStyle
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [onclose])

    const handleBackdropClick = (e)=>{
        if(e.target === e.currentTarget) onClose()
    };

    const ModalContainer =(
        <div className='modal-backdrop' onClick={handleBackdropClick}>
            <div className='model-content'>
                <button className='modal-close-btn'>&times;</button>
                {children}
            </div>
        </div>
    )
  return ReactDOM.createPortal(ModalContainer, document.body)
}

export default Modal