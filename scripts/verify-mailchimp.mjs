#!/usr/bin/env node
/**
 * Validates Mailchimp credentials before deploy (no emails added).
 * From the `abroader/` directory:
 *   node --env-file=.env.local scripts/verify-mailchimp.mjs
 * Or set MAILCHIMP_* in the environment and run the same command without --env-file.
 */

function normalizeEnv(value) {
  if (value == null) return "";
  let s = String(value).trim();
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1).trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

function datacenterFromApiKey(apiKey) {
  const i = apiKey.lastIndexOf("-");
  if (i <= 0 || i >= apiKey.length - 1) return undefined;
  return apiKey.slice(i + 1);
}

function authHeader(apiKey) {
  const token = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return {
    Authorization: `Basic ${token}`,
    "Content-Type": "application/json",
  };
}

async function main() {
  const apiKey = normalizeEnv(process.env.MAILCHIMP_API_KEY);
  const audienceId = normalizeEnv(process.env.MAILCHIMP_AUDIENCE_ID);
  const envServer = normalizeEnv(process.env.MAILCHIMP_SERVER);
  const keyServer = apiKey ? datacenterFromApiKey(apiKey) : undefined;
  const server = keyServer || envServer;

  if (!apiKey || !audienceId) {
    console.error(
      "Missing MAILCHIMP_API_KEY or MAILCHIMP_AUDIENCE_ID. Use .env.local with node --env-file=.env.local scripts/verify-mailchimp.mjs"
    );
    process.exit(1);
  }
  if (!server) {
    console.error(
      "Could not determine Mailchimp datacenter: API key must end with -us21 (etc.) or set MAILCHIMP_SERVER."
    );
    process.exit(1);
  }

  const base = `https://${server}.api.mailchimp.com/3.0`;
  const headers = authHeader(apiKey);

  const pingRes = await fetch(`${base}/ping`, { method: "GET", headers });
  const pingBody = await pingRes.json().catch(() => ({}));
  if (!pingRes.ok) {
    console.error("[verify-mailchimp] GET /ping failed:", pingRes.status, pingBody);
    process.exit(1);
  }
  console.log("[verify-mailchimp] Ping OK:", pingBody.health_status ?? pingBody);

  const listRes = await fetch(`${base}/lists/${encodeURIComponent(audienceId)}`, {
    method: "GET",
    headers,
  });
  const listBody = await listRes.json().catch(() => ({}));
  if (!listRes.ok) {
    console.error(
      "[verify-mailchimp] GET /lists/{audience} failed — check MAILCHIMP_AUDIENCE_ID and API key permissions:",
      listRes.status,
      listBody
    );
    process.exit(1);
  }
  console.log(
    "[verify-mailchimp] Audience OK:",
    listBody.name ?? "(no name)",
    "| id:",
    listBody.id ?? audienceId
  );
  console.log("[verify-mailchimp] All checks passed. Safe to deploy with these env vars on Vercel.");
}

main().catch((e) => {
  console.error("[verify-mailchimp] Unexpected error:", e);
  process.exit(1);
});
