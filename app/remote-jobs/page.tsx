import Link from "next/link";
import { verticals } from "@/lib/verticals";
import {
  fetchAllRemoteJobs,
  remoteStatusLabel,
  type TeamtailorJob,
} from "@/lib/teamtailor";

const vertical = verticals.find((v) => v.href === "/remote-jobs")!;

export const metadata = {
  title: "Remote Jobs — Abroader",
  description: vertical.description,
};

function JobCard({ job }: { job: TeamtailorJob }) {
  return (
    <article
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        borderTop: `4px solid ${vertical.accent}`,
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {job.pictureUrl ? (
        <div
          style={{
            width: "100%",
            aspectRatio: "2 / 1",
            backgroundColor: vertical.light,
            backgroundImage: `url(${job.pictureUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : null}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <span
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: vertical.accent,
            backgroundColor: vertical.light,
            padding: "0.35rem 0.65rem",
            borderRadius: "999px",
            marginBottom: "0.75rem",
          }}
        >
          {remoteStatusLabel(job.remoteStatus)}
        </span>
        <h2
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: vertical.accent,
            margin: "0 0 0.75rem",
            lineHeight: 1.35,
          }}
        >
          {job.title}
        </h2>
        {job.pitch ? (
          <p
            style={{
              color: "#444444",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              margin: "0 0 1.25rem",
              flex: 1,
            }}
          >
            {job.pitch}
          </p>
        ) : (
          <div style={{ flex: 1 }} />
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {job.jobUrl ? (
            <Link
              href={job.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: vertical.accent,
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              View role →
            </Link>
          ) : null}
          {job.applyUrl ? (
            <Link
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: vertical.accent,
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.6rem 1.1rem",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Apply
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default async function RemoteJobsPage() {
  const result = await fetchAllRemoteJobs();

  return (
    <main
      style={{
        flex: 1,
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2.5rem 2rem 3.5rem",
        boxSizing: "border-box",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div
          aria-hidden
          style={{
            width: "3.5rem",
            height: "3.5rem",
            margin: "0 auto 1rem",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            backgroundColor: "#fff",
            border: `2px solid ${vertical.accent}`,
          }}
        >
          {vertical.emoji}
        </div>
        <h1
          style={{
            color: vertical.accent,
            fontSize: "2rem",
            fontWeight: 700,
            margin: "0 0 0.75rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {vertical.title}
        </h1>
        <p
          style={{
            color: "#444444",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          {vertical.description}
        </p>
      </header>

      {!result.ok ? (
        <p
          role="alert"
          style={{
            textAlign: "center",
            color: "#b00020",
            padding: "2rem",
            backgroundColor: "#ffebee",
            borderRadius: "12px",
          }}
        >
          Could not load jobs: {result.error}
        </p>
      ) : result.jobs.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#444444",
            fontSize: "1.05rem",
            padding: "2rem",
            backgroundColor: vertical.light,
            borderRadius: "12px",
          }}
        >
          No remote listings right now. Check back soon or explore our other categories.
        </p>
      ) : (
        <>
          <p
            style={{
              textAlign: "center",
              color: "#666666",
              fontSize: "0.95rem",
              marginBottom: "1.75rem",
            }}
          >
            {result.jobs.length} {result.jobs.length === 1 ? "role" : "roles"} open
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {result.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
