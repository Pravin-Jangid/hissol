import CommonHero from "../Components/CommoneHero";

const clientLogos = [
  "adhunik.png",
  "aeonix.png",
  "aishwaryahealthcare.png",
  "amalgam.png",
  "aragen.png",
  "asianfabric.png",
  "briscad.png",
  "chromewell.png",
  "corporateserve.png",
  "dcmshriram.png",
  "dilipbuildcon.png",
  "dormer.png",
  "excellingentconsulting.png",
  "foracegrp.png",
  "frontier.png",
  "garwarefibres.png",
  "ginni.png",
  "greenko.svg",
  "gvkbio.png",
  "gyandiary.png",
  "hindusthan-speciality.png",
  "indigrid.png",
  "indosol.png",
  "inflow.png",
  "ingrammicro.png",
  "insulator.png",
  "irma.png",
  "liberty.png",
  "morarjee.png",
  "nitinlife.png",
  "oncloud.png",
  "organicindia.png",
  "pil.png",
  "ppl.png",
  "precisionsunami.png",
  "press.png",
  "rf.png",
  "ril.png",
  "safex.png",
  "sapphireinphotech.png",
  "saroja.png",
  "saroma.png",
  "sdfcl.png",
  "shyamdhani.png",
  "sse.png",
  "sugarindcor.png",
  "supremeagro.png",
  "surakshasecuritysystems.png",
  "synergy.png",
  "synokem.png",
  "techtreno.png",
  "uttarakhandpower.png",
];

export default function OurClientsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <CommonHero
        title="Our Clients"
        description="Trusted by leading organizations worldwide"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                h-28
                bg-white
                border border-gray-100
                rounded-2xl
                transition
                hover:shadow-lg
                hover:scale-[1.04]
              "
            >
              <img
                src={`/Assets/Logo/Clients/${logo}`}
                alt="Client Logo"
                className="
                  max-h-20
                  max-w-[160px]
                  object-contain
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
