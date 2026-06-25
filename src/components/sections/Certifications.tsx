import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, BadgeCheck } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  icon?: string;
  color: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    credentialId: "AWS-ASA-12345",
    link: "https://aws.amazon.com/verification",
    color: "#FF9900",
  },
  {
    id: "2",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "Oct 2023",
    credentialId: "META-FE-67890",
    link: "https://coursera.org/verify",
    color: "#0668E1",
  },
  {
    id: "3",
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "Aug 2023",
    credentialId: "GCP-DL-11223",
    link: "https://google.com/cloud/verify",
    color: "#4285F4",
  },
  {
    id: "4",
    title: "Postman API First Transformation",
    issuer: "Postman",
    date: "Jun 2023",
    credentialId: "POSTMAN-API-44556",
    link: "https://postman.com/verify",
    color: "#FF6C37",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-(--bg) py-32 px-6 lg:px-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-20 w-[400px] h-[400px] rounded-full bg-(--primary) opacity-[0.03] blur-[120px]" />
      <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] rounded-full bg-accent opacity-[0.03] blur-[100px]" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            // professional recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold leading-[1.05] text-(--ink-light) mb-6"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            Verified <span className="text-gradient-lime">Excellence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg font-light leading-relaxed max-w-xl"
          >
            A collection of certifications and credentials that validate my expertise in building
            scalable, modern, and high-performance applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-(--bg-2) border border-(--border) rounded-3xl p-8 clay-md overflow-hidden transition-all hover:border-(--primary)/30"
            >
              {/* Card Background Glow */}
              <div
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-[0.08] blur-3xl transition-all group-hover:opacity-[0.15]"
                style={{ backgroundColor: cert.color }}
              />

              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center bg-(--bg) border border-(--border) clay-sm group-hover:scale-110 transition-transform duration-500"
                  style={{ color: cert.color }}
                >
                  <Award size={28} />
                </div>
                <div className="flex items-center gap-1.5 bg-(--primary)/10 text-(--primary) px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all group-hover:bg-(--primary) group-hover:text-(--ink)">
                  <BadgeCheck size={12} />
                  VERIFIED
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-(--ink-light) leading-tight mb-2 group-hover:text-(--primary) transition-colors">
                  {cert.title}
                </h3>
                <div className="text-muted font-ui text-sm flex items-center gap-2">
                  <span className="text-primary-muted font-medium">{cert.issuer}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Issued
                  </span>
                  <div className="flex items-center gap-1.5 text-(--ink-light) text-xs">
                    <Calendar size={12} className="text-primary-muted" />
                    {cert.date}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Credential ID
                  </span>
                  <div className="text-(--ink-light) text-xs font-mono truncate">
                    {cert.credentialId}
                  </div>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center justify-center gap-2 w-full bg-(--ink-light)/5 border border-(--border) hover:bg-(--primary) hover:text-(--ink) hover:border-(--primary) text-(--ink-light) rounded-xl py-3 text-sm font-ui font-medium transition-all duration-300"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
