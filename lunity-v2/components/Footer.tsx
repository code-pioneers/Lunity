"use client";
import React from 'react';
import { footer } from '@/data/Footer';
import { useTranslation } from 'next-export-i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer ">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <p className="footer__copyright">{t('footer')}</p>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer