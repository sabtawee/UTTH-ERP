import { Spin } from 'antd';

// Loading Component for use in various pages
export const PageLoading = ({ message = "Loading...", size = "large" }) => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <Spin size={size} className="custom-spin" />
      <div className="mt-4">
        <p className="text-gray-500 text-sm animate-pulse">
          {message}
        </p>
      </div>
    </div>
  </div>
);

// Loading Overlay for use on pages that already have data
export const LoadingOverlay = ({ loading, children, message = "Loading..." }) => (
  <div className="relative">
    {children}
    {loading && (
      <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 rounded-lg">
        <div className="text-center">
          <Spin size="large" className="custom-spin" />
          <div className="mt-4">
            <p className="text-gray-600 text-sm">
              {message}
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);

// Loading Button for buttons that are currently working
export const LoadingButton = ({ loading, children, ...props }) => (
  <button
    {...props}
    disabled={loading || props.disabled}
    className={`${props.className} relative`}
  >
    {loading && (
      <Spin size="small" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
    )}
    <span className={loading ? "ml-6" : ""}>
      {children}
    </span>
  </button>
);

export default { PageLoading, LoadingOverlay, LoadingButton };
