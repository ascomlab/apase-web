const items = [
  "Previous conference editions",
  "Proceedings archive",
  "Milestone highlights",
  "Photo gallery",
];

export default function HistoryPage() {
  return (
    <main className="pt-28 px-4 sm:px-6 lg:px-12 pb-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-[0_24px_48px_-24px_rgba(40,52,57,0.18)] p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1A365D]">
          History
        </p>
        <h1 className="mt-4 font-headline text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          History page coming soon
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          This page will showcase prior APASE and IAAI conference milestones.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
