import { useState } from "react";
import {
  Handshake,
  Mail,
  MessageSquare,
  Mic,
  Phone,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  ADDRESS_LINES,
  CONTACT_CARDS,
  CONTACT_EMAILS,
  FACULTY_LEADERSHIP,
  REGISTRATION_URL,
  SITE,
  SOCIAL_LINKS,
  STUDENT_COORDINATORS,
  type TeamMember,
} from "../../data/site";
import { ClipButton } from "../ui/ClipButton";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const ICONS = {
  handshake: Handshake,
  mic: Mic,
  message: MessageSquare,
};

function CoordinatorCard({
  member,
  isFaculty = false,
  index,
}: {
  member: TeamMember;
  isFaculty?: boolean;
  index: number;
}) {
  return (
    <article className="clip-corner group relative flex flex-col overflow-hidden border border-ivory/15 bg-charcoal/70 transition-all duration-500 hover:border-gold/60 hover:bg-charcoal/90">
      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-navy sm:aspect-[4/5]">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute left-4 top-4">
          <span className="clip-tag bg-navy/90 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            {isFaculty ? "Faculty Lead" : `Coordinator ${String(index + 1).padStart(2, "0")}`}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <h3 className="font-display text-xl font-semibold uppercase tracking-[-0.03em] text-ivory sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold/90">
            {member.role}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-ivory/15 pt-5 text-xs">
          <a
            href={`tel:${member.phone}`}
            className="group/link inline-flex items-center gap-2.5 font-mono text-xs text-ivory/80 transition-colors hover:text-gold"
            aria-label={`Call ${member.name} at ${member.phone}`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-navy border border-ivory/10 text-gold group-hover/link:border-gold">
              <Phone size={13} aria-hidden="true" />
            </span>
            <span>{member.phone}</span>
          </a>

          <a
            href={`mailto:${member.email}`}
            className="group/link inline-flex items-center gap-2.5 font-mono text-xs text-ivory/80 transition-colors hover:text-gold break-all"
            aria-label={`Email ${member.name} at ${member.email}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-navy border border-ivory/10 text-gold group-hover/link:border-gold">
              <Mail size={13} aria-hidden="true" />
            </span>
            <span className="truncate">{member.email}</span>
          </a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}

export function Contact() {
  const [activeTab, setActiveTab] = useState<"faculty" | "students">("faculty");

  return (
    <section
      id="contact"
      className="section-dark relative z-10 scroll-mt-20 bg-navy"
    >
      <div className="container-page section-pad">
        {/* Header */}
        <div className="grid gap-12 border-t border-ivory/15 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              07 / Team &amp; Connect
            </p>
            <SectionTitle
              text="Leadership & Contact"
              className="max-w-[12ch] text-[clamp(2.8rem,7vw,6.4rem)]"
            />
            <p className="body-copy mt-6 max-w-xl text-pretty">
              Connect with the faculty leadership, student organizing committee,
              and coordinators powering Venture Verse 2026.
            </p>
          </div>

          <Reveal
            className="lg:col-span-4 lg:col-start-9 lg:pt-10"
            delay={0.1}
          >
            <div className="border border-ivory/15 bg-charcoal/70 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                  Official Desk
                </p>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/70">
                  <Sparkles size={11} className="text-gold" />
                  2026 Open
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-medium leading-[1.05] tracking-[-0.03em] text-ivory">
                Department of CSBS &amp; CSE
              </p>
              <p className="mt-2 font-body text-xs text-ivory/60">
                Oriental Group of Institutes, Bhopal
              </p>

              <dl className="mt-6 border-t border-ivory/15 text-xs">
                <div className="flex items-center justify-between gap-4 border-b border-ivory/15 py-2.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Registration
                  </dt>
                  <dd className="text-right font-body text-xs text-gold">
                    Live on Google Forms
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-ivory/15 py-2.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Dates
                  </dt>
                  <dd className="text-right font-body text-xs text-ivory/70">
                    {SITE.eventDateLabel}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Venue
                  </dt>
                  <dd className="text-right font-body text-xs text-ivory/70">
                    Oriental Campus, Bhopal
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <ClipButton
                  href={REGISTRATION_URL}
                  variant="solid"
                  className="w-full justify-center !h-11"
                >
                  Register now
                </ClipButton>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Coordinators & Leadership Tabs */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col gap-6 border-b border-ivory/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                Directory
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-[-0.03em] text-ivory sm:text-3xl">
                Organizing Committee
              </h3>
            </div>

            {/* Tab switchers */}
            <div
              role="tablist"
              aria-label="Coordinator categories"
              className="inline-flex self-start sm:self-auto border border-ivory/20 bg-charcoal/80 p-1"
            >
              <button
                type="button"
                role="tab"
                id="tab-faculty"
                aria-selected={activeTab === "faculty"}
                aria-controls="panel-faculty"
                onClick={() => setActiveTab("faculty")}
                className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === "faculty"
                    ? "bg-gold text-navy font-semibold shadow-md"
                    : "text-ivory/70 hover:text-ivory hover:bg-ivory/5"
                }`}
              >
                Faculty Leadership ({FACULTY_LEADERSHIP.length})
              </button>
              <button
                type="button"
                role="tab"
                id="tab-students"
                aria-selected={activeTab === "students"}
                aria-controls="panel-students"
                onClick={() => setActiveTab("students")}
                className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === "students"
                    ? "bg-gold text-navy font-semibold shadow-md"
                    : "text-ivory/70 hover:text-ivory hover:bg-ivory/5"
                }`}
              >
                Student Coordinators ({STUDENT_COORDINATORS.length})
              </button>
            </div>
          </div>

          {/* Faculty Tab Content */}
          <div
            id="panel-faculty"
            role="tabpanel"
            aria-labelledby="tab-faculty"
            hidden={activeTab !== "faculty"}
            className="mt-10"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FACULTY_LEADERSHIP.map((member, index) => (
                <CoordinatorCard
                  key={member.name}
                  member={member}
                  isFaculty
                  index={index}
                />
              ))}
              <div className="clip-corner flex flex-col justify-between border border-ivory/15 bg-charcoal/30 p-7">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                    Department Leadership
                  </span>
                  <h4 className="mt-3 font-display text-2xl font-semibold uppercase text-ivory">
                    Department of CSBS &amp; CSE
                  </h4>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ivory/70">
                    Pioneering industry-aligned education, computational
                    leadership, and entrepreneurship initiatives at Oriental
                    Group of Institutes.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-ivory/15">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/60">
                    Office of Academic Coordination
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Students Tab Content */}
          <div
            id="panel-students"
            role="tabpanel"
            aria-labelledby="tab-students"
            hidden={activeTab !== "students"}
            className="mt-10"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STUDENT_COORDINATORS.map((member, index) => (
                <CoordinatorCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-20">
          <div className="border-t border-ivory/15 pt-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
              Channels
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-[-0.03em] text-ivory sm:text-3xl">
              Collaboration &amp; Enquiries
            </h3>
          </div>

          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {CONTACT_CARDS.map((card, index) => {
              const Icon = ICONS[card.icon];

              return (
                <li key={card.title} className="h-full">
                  <Reveal delay={index * 0.07} className="h-full">
                    <article className="group relative flex h-full flex-col border border-ivory/15 bg-charcoal/45 p-6 transition-all duration-500 hover:border-gold/50 hover:bg-charcoal/75 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <Icon
                          size={22}
                          strokeWidth={1.4}
                          className="text-gold transition-colors duration-300 group-hover:text-ivory"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-[9px] tracking-[0.18em] text-ivory/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h4 className="mt-8 font-display text-xl font-medium tracking-[-0.025em] text-ivory sm:text-2xl">
                        {card.title}
                      </h4>
                      <p className="mt-3 font-body text-sm leading-relaxed text-ivory/65">
                        {card.description}
                      </p>

                      <div className="mt-auto pt-6">
                        {card.actionHref ? (
                          <a
                            href={card.actionHref}
                            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold hover:text-ivory transition-colors"
                          >
                            <span>{card.actionLabel || "Connect"}</span>
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                        ) : null}
                        <div className="mt-4 flex items-center gap-2.5 border-t border-ivory/15 pt-4">
                          <span
                            className="h-1.5 w-1.5 shrink-0 bg-gold"
                            aria-hidden="true"
                          />
                          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ivory/60">
                            {card.note}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Institution Address & Socials Grid */}
        <div className="mt-14 border border-ivory/15 bg-charcoal/60 p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-gold">
                <MapPin size={16} aria-hidden="true" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
                  Venue &amp; Host Institution
                </span>
              </div>
              <h4 className="mt-3 font-display text-2xl font-semibold uppercase text-ivory sm:text-3xl">
                Oriental Group of Institutes
              </h4>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory/70">
                {ADDRESS_LINES.join(" ")}
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs font-mono">
                {CONTACT_EMAILS.map((email) => (
                  <a
                    key={email.address}
                    href={`mailto:${email.address}`}
                    className="inline-flex items-center gap-2 text-ivory/70 hover:text-gold transition-colors"
                  >
                    <Mail size={12} className="text-gold" />
                    <span>{email.address}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-ivory/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:col-span-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                Community Channels
              </p>
              <p className="mt-2 font-display text-xl uppercase text-ivory">
                Stay updated in real time
              </p>
              <p className="mt-2 font-body text-xs text-ivory/60 max-w-md">
                Follow our official social profiles and join the Venture Verse
                community on WhatsApp for announcements and schedules.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clip-tag inline-flex items-center gap-2.5 border border-ivory/15 bg-navy/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-ivory/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/60">
              Registration Portal
            </p>
            <p className="mt-1 font-display text-xl font-medium tracking-[-0.02em] text-ivory/85">
              Secure your spot for Venture Verse 2026.
            </p>
          </div>
          <ClipButton
            href={REGISTRATION_URL}
            variant="solid"
            className="self-start sm:self-auto"
          >
            Register on Google Form
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
