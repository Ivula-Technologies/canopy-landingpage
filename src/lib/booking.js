// One-on-one Google Meet calls with Bius. The default goes to the booking page
// on the Ivula website, which shows his Google Calendar appointment schedule.
// Set VITE_BOOKING_URL at build time to point somewhere else.
export const bookingUrl =
  import.meta.env.VITE_BOOKING_URL || "https://www.ivulatechnologies.com/book/?about=canopy";
