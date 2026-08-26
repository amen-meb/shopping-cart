function LoadingSpinner() {
  return (
    <div
      className="flex min-h-[300px] items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-950" />
    </div>
  );
}

export default LoadingSpinner;