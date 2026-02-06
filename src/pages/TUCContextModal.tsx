import { useEffect, useState } from "react";

const STORAGE_KEY = "tuc_context_seen";

export default function TUCContextModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      const timer = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
        <p className="mb-3 text-sm text-gray-500">Before you scroll</p>

        <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-900">
          We don’t have an idea problem. <br />
          We have a coordination problem.
        </h1>

        <p className="mb-6 text-gray-600">
          TUC exists to turn ideas, effort, and care into coordinated action —
          so progress builds instead of resetting.
        </p>

        <div className="mb-8 space-y-2 text-sm text-gray-700">
          <p>• Ideas don’t disappear</p>
          <p>• Contributions don’t fragment</p>
          <p>• Progress compounds</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={closeModal}
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Enter the system
          </button>

          <button
            onClick={closeModal}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Skip for now
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">#itsotuc</p>
      </div>
    </div>
  );
}
