export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-gray flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-600 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Loading HG Medicura AI
        </h2>
        <p className="text-gray-600">
          Preparing your Person Health Assistant
        </p>
      </div>
    </div>
  )
}
