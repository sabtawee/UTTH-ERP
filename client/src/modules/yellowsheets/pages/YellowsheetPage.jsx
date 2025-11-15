
import { useTranslation } from 'react-i18next';

export default function YellowsheetPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white">
          {/* Icon */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t('systemdev.under_development')}
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-gray-600 mb-5">
            {t('systemdev.system_under_development')}
          </h2>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed mb-6 max-w-lg mx-auto">
            {t('systemdev.feature_under_development')} {t('systemdev.stay_tuned')}
          </p>

          {/* Progress Animation */}
          <div className="mb-6">
            <div className="flex justify-center space-x-2">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-sm text-gray-400 mt-3">{t('systemdev.coming_soon')}</p>
          </div>
          {/* Contact Info - Compact */}
        </div>
      </div>
    </div>
  )
}
