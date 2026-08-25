function LoadingSpinner() {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-950"
        aria-label="Loading"
      />
    </div>
  );
}

export default LoadingSpinner;