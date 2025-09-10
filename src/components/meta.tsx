const phone = "5305811987";
const cleaned = phone.replace(/\D/g, "");
const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
const formatted = match ? `(${match[1]}) ${match[2]}-${match[3]}` : "";

export const Meta = {
  title: "Jarrod Semmens Window Cleaning",
  description:
    "Jarrod Semmens Window Cleaning can supply you with a thorough washing of your windows inside and out. From our high-quality, professional staff to our effective cleaning techniques, you'll get the satisfaction of gleaming, sparkling results from a locally owned and operated company.",
  email: "service@jarrodsemmenswindowcleaning.com",
  WebSite: "https://www.jarrodsemmenswindowcleaning.com",
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

  keywords: [
    "window cleaning",
    "window washer",
    "window washing",
    "residential window cleaning",
    "commercial window cleaning",
    "screen cleaning",
    "Window cleaning Tahoe City",
    "Professional window washing CA",
    "Residential window cleaning Lake Tahoe",
    "Commercial window cleaning Tahoe area",
    "Broken screen replacement Tahoe City"
  ],

  areaServed: [
    "Tahoe City",
    "Meeks Bay",
    "Tahoma",
    "Homewood",
    "Tahoe Pines",
    "Timberland",
    "Dollar Point",
    "Ridgewood",
    "Carnelian Bay",
    "Kings Beach",
    "Incline Village",
    "Alpine Meadows",
    "Olympic Valley",
    "Truckee",
    "Northstar",
    "Donner Lake",
    "Glenshire",
    "South Lake Tahoe",
  ],

  image: 'https://jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com/jswc-og_image.jpg',
  openingHours: 'Mo, Tu, We, Th, Fr 09:00-17:00',
  faxNumber: '(530) 581-1981',
  slogan: 'We’re your local number one source in Window Cleaning in Tahoe City and surrounding areas.'

  // https://schema.org/logo
  // https://schema.org/image
};
