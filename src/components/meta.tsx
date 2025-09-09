const phone = "5305811987";
const cleaned = phone.replace(/\D/g, "");
const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
const formatted = match ? `(${match[1]}) ${match[2]}-${match[3]}` : "";

export const Meta = {
  title: "Jarrod Semmens Window Cleaning",
  description:
    "Jarrod Semmens Window Cleaning is a locally owned and operated business that provides professional window cleaning services to residential and commercial customers in Tahoe City, CA.",
  email: "service@jarrodsemmenswindowcleaning.com",
  phoneRaw: phone,
  phoneFormatted: formatted,

  address: {
    streetAddress: "PO Box 7614",
    addressLocality: "Tahoe City",
    addressRegion: "CA",
    postalCode: 96145,
  },

  screenFaciliity: {
    streetAddress: "5609 Uplands Road",
    addressLocality: "Carnelian Bay",
    addressRegion: "CA",
    postalCode: 96140,
  },
};
