import Footer from "@/components/Footer";

const registrationRows = [
  ["Author (Regular)", "TBD", "TBD"],
  ["Student Author", "TBD", "TBD"],
  ["Listener", "TBD", "TBD"],
  ["Accompanying Person", "TBD", "TBD"],
];

const registrationNotes = [
  "One registration covers one paper only.",
  "Student status verification will be required.",
  "Payment instructions will be added later.",
];

export default function RegistrationPage() {
  return (
    <>
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <header className="mb-20 max-w-3xl">
          <div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Registration Portal
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter leading-none mb-8">
            Join the <span className="text-primary">Intellectual</span>{" "}
            Discourse.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
            Placeholder registration content. Fill in the fees, deadlines, and
            portal details when ready.
          </p>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-primary text-3xl">◫</span>
                  <h2 className="font-headline text-2xl font-bold tracking-tight">
                    Registration Fees
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-on-surface-variant border-b border-outline-variant/20">
                        <th className="py-4 font-semibold text-sm uppercase tracking-wider">
                          Participant Type
                        </th>
                        <th className="py-4 font-semibold text-sm uppercase tracking-wider">
                          Early Bird
                        </th>
                        <th className="py-4 font-semibold text-sm uppercase tracking-wider">
                          Regular
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface">
                      {registrationRows.map(([type, early, regular], index) => (
                        <tr
                          key={type}
                          className={
                            index % 2 === 0
                              ? "bg-surface-container-low"
                              : "bg-background/50"
                          }
                        >
                          <td className="py-6 pr-4">
                            <div className="font-bold text-lg">{type}</div>
                            <div className="text-sm text-on-surface-variant">
                              Details coming soon
                            </div>
                          </td>
                          <td className="py-6 font-headline font-bold text-primary text-xl">
                            {early}
                          </td>
                          <td className="py-6 font-headline font-bold text-xl">
                            {regular}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm">
                  <h3 className="font-headline font-bold text-xl mb-4">
                    Early Bird Deadline
                  </h3>
                  <p className="text-on-surface-variant body-md leading-relaxed mb-4">
                    Deadline placeholder.
                  </p>
                  <div className="text-primary font-bold text-2xl font-headline tracking-tight">
                    TBD
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-secondary shadow-sm">
                  <h3 className="font-headline font-bold text-xl mb-4">
                    Regular Deadline
                  </h3>
                  <p className="text-on-surface-variant body-md leading-relaxed mb-4">
                    Deadline placeholder.
                  </p>
                  <div className="text-on-surface font-bold text-2xl font-headline tracking-tight">
                    TBD
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-surface-container-highest p-8 rounded-xl">
                <h3 className="font-headline font-bold text-xl mb-6">
                  Payment Information
                </h3>
                <div className="space-y-6">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Add your payment methods here.
                  </p>
                </div>
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-2xl mb-4">
                    Ready to register?
                  </h3>
                  <p className="text-primary-fixed/80 text-sm mb-8 leading-relaxed">
                    Registration CTA placeholder.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary px-6 py-3 rounded font-bold text-sm">
                    Go to Registration Portal
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl">
                <h3 className="font-headline font-bold text-lg mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-4 text-sm text-on-surface-variant">
                  {registrationNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
