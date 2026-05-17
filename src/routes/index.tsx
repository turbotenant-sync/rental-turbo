import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  ClipboardList,
  Home,
  KeyRound,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RentalListingPage,
})

const listingSites = [
  'Zillow',
  'Trulia',
  'HotPads',
  'Realtor.com',
  'Apartments.com',
  'Rentals.com',
  'PadMapper',
  'Apartment List',
]

const workflow = [
  {
    title: 'Create the listing once',
    description:
      'Add pricing, photos, lease terms, pet rules, amenities, and screening preferences in one guided flow.',
    icon: ClipboardList,
  },
  {
    title: 'Advertise across renter sites',
    description:
      'Publish the same vacancy across the rental networks renters already check during their search.',
    icon: Megaphone,
  },
  {
    title: 'Manage leads without inbox chaos',
    description:
      'Keep inquiries, tour requests, and applicant next steps together so good renters hear back quickly.',
    icon: MessageSquareText,
  },
]

const benefits = [
  'Free rental advertising for landlords',
  'Online applications and tenant screening',
  'Lead tracking from first inquiry to signed lease',
  'Consistent listing details across every channel',
]

function RentalListingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fb] text-[#07243f]">
      <section className="relative border-b border-[#033a6d]/10 bg-[#eaf4fb]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.9)_0%,rgba(255,255,255,.35)_42%,rgba(88,181,213,.22)_100%)]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="flex items-center gap-3 font-display text-xl font-black text-[#033a6d]">
            <span className="grid size-10 place-items-center rounded bg-[#033a6d] text-white">
              <Home size={22} strokeWidth={2.3} />
            </span>
            TurboTenant
          </a>
          <a
            href="#start"
            className="inline-flex h-11 items-center gap-2 rounded bg-[#00a5c8] px-5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(0,83,124,.18)] transition hover:-translate-y-0.5 hover:bg-[#078eb0] focus:outline-none focus:ring-4 focus:ring-[#00a5c8]/25"
          >
            List property
            <ArrowRight size={16} />
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-24 lg:pt-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded border border-[#00a5c8]/25 bg-white/75 px-4 py-2 text-sm font-bold text-[#046283] shadow-sm backdrop-blur">
              <Sparkles size={15} />
              The easier way to advertise a rental
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[.96] tracking-normal text-[#033a6d] sm:text-6xl lg:text-7xl">
              One rental listing. Dozens of places renters search.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#33536d] sm:text-xl">
              TurboTenant helps landlords create a polished listing, publish it
              across major rental sites, and manage incoming leads from one
              organized workspace.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                id="start"
                href="mailto:leasing@example.com?subject=List%20my%20rental%20with%20TurboTenant"
                className="inline-flex h-14 items-center justify-center gap-2 rounded bg-[#033a6d] px-7 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(3,58,109,.24)] transition hover:-translate-y-0.5 hover:bg-[#022d55] focus:outline-none focus:ring-4 focus:ring-[#033a6d]/20"
              >
                Start my free listing
                <ArrowRight size={18} />
              </a>
              <a
                href="#distribution"
                className="inline-flex h-14 items-center justify-center rounded border border-[#033a6d]/15 bg-white/75 px-7 text-base font-extrabold text-[#033a6d] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#00a5c8]/20"
              >
                See where it posts
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-2 top-8 hidden -rotate-3 rounded bg-[#f3b43f] p-4 text-sm font-extrabold text-[#07243f] shadow-xl sm:block">
              26 qualified leads this week
            </div>
            <div className="rounded-2xl border border-[#033a6d]/10 bg-white p-4 shadow-[0_30px_80px_rgba(15,63,101,.18)]">
              <div className="overflow-hidden rounded-xl bg-[#033a6d]">
                <div className="relative aspect-[5/4] bg-[linear-gradient(150deg,rgba(3,58,109,.15),rgba(3,58,109,.78)),url('/placeholder.png')] bg-cover bg-center">
                  <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/94 p-5 shadow-2xl backdrop-blur">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="flex items-center gap-1 text-sm font-extrabold text-[#047b9d]">
                          <MapPin size={15} />
                          2 bed • 1.5 bath • Denver
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-black text-[#033a6d]">
                          Sunlit carriage house
                        </h2>
                      </div>
                      <div className="rounded bg-[#e7f7ed] px-3 py-1 text-sm font-extrabold text-[#1f7a45]">
                        Live
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <Metric label="Sites" value="42" />
                      <Metric label="Leads" value="18" />
                      <Metric label="Tours" value="7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-2 rounded-xl bg-[#00a5c8] p-5 text-white shadow-2xl sm:right-10">
              <div className="flex items-center gap-3">
                <LineChart size={30} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-white/75">
                    Lead activity
                  </p>
                  <p className="font-display text-3xl font-black">+31%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="distribution"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-28"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[.22em] text-[#047b9d]">
            Broad rental reach
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-[#033a6d] sm:text-5xl">
            Put each vacancy where renters are already looking.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#466176]">
            Independent landlords and small property teams can launch one
            complete listing, then keep renter interest organized instead of
            rebuilding the same post site by site.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {listingSites.map((site) => (
            <div
              key={site}
              className="flex items-center justify-between rounded-lg border border-[#033a6d]/10 bg-white px-5 py-4 shadow-sm"
            >
              <span className="font-extrabold">{site}</span>
              <BadgeCheck className="text-[#00a5c8]" size={20} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#033a6d] text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-24">
          {workflow.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="rounded-xl border border-white/10 bg-white/[.07] p-7"
              >
                <Icon className="mb-8 text-[#f3b43f]" size={34} />
                <h3 className="font-display text-2xl font-black">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-white/74">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-28">
        <div className="grid gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-4 rounded-xl border border-[#033a6d]/10 bg-white p-5 shadow-sm"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded bg-[#e7f7ed] text-[#1f7a45]">
                <Check size={20} />
              </span>
              <span className="text-lg font-extrabold">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[#dff2f8] p-8 sm:p-10">
          <div className="flex gap-4">
            <Building2 className="mt-1 text-[#047b9d]" size={34} />
            <div>
              <h2 className="font-display text-4xl font-black leading-tight text-[#033a6d]">
                Built for the real work behind leasing.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#385469]">
                A useful rental listing needs more than a headline. TurboTenant
                keeps pricing, policies, availability, photos, screening, and
                applicant communication tied to the same property record.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Stat icon={CircleDollarSign} label="Rent-ready pricing" />
            <Stat icon={ShieldCheck} label="Screening-ready leads" />
            <Stat icon={Mail} label="Centralized inquiries" />
            <Stat icon={KeyRound} label="Clear next steps" />
          </div>
        </div>
      </section>
    </main>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#f4f8fb] px-3 py-3">
      <p className="font-display text-2xl font-black text-[#033a6d]">{value}</p>
      <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#5b7387]">
        {label}
      </p>
    </div>
  )
}

function Stat({
  icon: Icon,
  label,
}: {
  icon: LucideIcon
  label: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/72 p-4 font-extrabold text-[#033a6d]">
      <Icon className="text-[#047b9d]" size={22} />
      {label}
    </div>
  )
}
