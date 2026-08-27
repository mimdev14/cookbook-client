

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
   

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

    </div>
  );
}