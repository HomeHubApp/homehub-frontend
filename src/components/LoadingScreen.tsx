type LoadingScreenProps = {
  label?: string;
};

export default function LoadingScreen({
  label = "Loading your workspace...",
}: LoadingScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-yellow-100 px-6">
      <div className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-amber-100 bg-white/90 p-8 text-center shadow-xl shadow-amber-100/60 backdrop-blur">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">HomeHub</h1>
        <p className="mt-2 text-sm font-medium text-gray-500">{label}</p>
      </div>
    </div>
  );
}
