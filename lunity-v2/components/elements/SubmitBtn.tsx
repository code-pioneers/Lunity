"use client";
import React from 'react'
import { useFormStatus } from 'react-dom'
import { useTranslation } from 'next-export-i18n';
import { BsSendFill } from 'react-icons/bs';

 const SubmitBtn = () => {
  const { pending } = useFormStatus();
  const { t } = useTranslation();

  return (
    <button 
        type="submit" 
        className="btn-default btn__submit"  
        disabled={pending}> 
        {pending ? (
          <div className='btn__submit-spin '></div>
        ) : (
          <> 
            {React.createElement(BsSendFill)}
            <span> {t('contact.submitButton')}</span>
          </>     
      ) }
    </button>
  )
}

export default SubmitBtn