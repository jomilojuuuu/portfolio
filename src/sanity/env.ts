function getEnvValue(key: string, fallback?: string): string {
  // Next.js injects NEXT_PUBLIC_* envs at build time into process.env.*
  const value =
    (typeof process !== "undefined" && process.env?.[key]) ||
    (typeof import.meta !== "undefined" && import.meta.env?.[key]);

  if (value) return value;

  if (fallback !== undefined) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`⚠️ Missing env var ${key}, using fallback: ${fallback}`);
    }
    return fallback;
  }

  // In dev, show a warning instead of crashing the client
  if (process.env.NODE_ENV === "development") {
    console.warn(`⚠️ Missing environment variable: ${key}`);
  }

  return ""; // return empty string instead of throwing on client
}

export const apiVersion = getEnvValue("NEXT_PUBLIC_SANITY_API_VERSION", "2025-07-01");
export const dataset = getEnvValue("NEXT_PUBLIC_SANITY_DATASET", "production");
export const projectId = getEnvValue("NEXT_PUBLIC_SANITY_PROJECT_ID", "j14w2zrd");
