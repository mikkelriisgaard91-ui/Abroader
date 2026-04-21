"use client";

import { FormEvent, useMemo, useState } from "react";

const SERVICE_OPTIONS = [
  "Database access",
  "Active search & direct recruitment",
  "Embedded recruiter",
  "Advertising & visibility",
] as const;

export default function EmployersContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(
    () =>
      Boolean(
        name.trim() &&
          company.trim() &&
          email.trim() &&
          phone.trim() &&
          services.length > 0,
      ),
    [company, email, name, phone, services.length],
  );

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please fill in all fields and choose at least one service.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/employers-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          services,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error ?? "Could not send your request. Please try again.");
        return;
      }

      setSubmitted(true);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setServices([]);
    } catch {
      setError("Could not send your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#ffffff26] bg-white/10 p-6 text-left backdrop-blur-sm md:p-8">
        <h3 className="font-[Georgia,serif] text-2xl font-bold text-white">
          Thanks, we received your request.
        </h3>
        <p className="mt-2 text-white/80">
          Our team will contact you shortly to discuss your hiring needs.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#ffffff26] bg-white/10 p-6 text-left backdrop-blur-sm md:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white">Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-xl border border-white/25 bg-white px-4 py-3 text-sm text-[#16343c] outline-none ring-0 transition focus:border-[#fcba36]"
            placeholder="Jane Smith"
            required
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white">Company</span>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="rounded-xl border border-white/25 bg-white px-4 py-3 text-sm text-[#16343c] outline-none ring-0 transition focus:border-[#fcba36]"
            placeholder="Acme Ltd"
            required
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-xl border border-white/25 bg-white px-4 py-3 text-sm text-[#16343c] outline-none ring-0 transition focus:border-[#fcba36]"
            placeholder="jane@company.com"
            required
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white">Phone number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="rounded-xl border border-white/25 bg-white px-4 py-3 text-sm text-[#16343c] outline-none ring-0 transition focus:border-[#fcba36]"
            placeholder="+44 7000 000000"
            required
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-white">
          Services you are interested in
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          {SERVICE_OPTIONS.map((service) => {
            const selected = services.includes(service);
            return (
              <label
                key={service}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${
                  selected
                    ? "border-[#fcba36] bg-[#fcba36]/20 text-white"
                    : "border-white/25 bg-white/5 text-white/90 hover:bg-white/15"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 accent-[#fcba36]"
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {error ? <p className="mt-4 text-sm text-[#ffd8d8]">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#fcba36] px-7 py-3 text-sm font-semibold text-[#2a1f0a] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
