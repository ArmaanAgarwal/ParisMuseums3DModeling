"use client";

function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <pre className="bg-red-950/50 p-4 rounded-lg overflow-auto text-sm mb-4">
          {error.message}
        </pre>
        <button
          onClick={reset}
          className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium transition hover:bg-white/20"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
