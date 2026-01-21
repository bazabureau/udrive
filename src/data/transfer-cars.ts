export interface TransferRoute {
  destination: string;
  price: string;
}

export interface TransferPackage {
  name: string;
  years: string;
  passengers?: string;
  routes: TransferRoute[];
  cityPackagePrice: string;
}

export const transferPackages: TransferPackage[] = [
  {
    name: "Mercedes V-Class",
    years: "2018-2019",
    passengers: "7",
    cityPackagePrice: "250 AZN",
    routes: [
      { destination: "Shahdagh", price: "360 AZN" },
      { destination: "Guba", price: "360 AZN" },
      { destination: "Gabala", price: "400 AZN" },
      { destination: "Sheki", price: "450 AZN" },
      { destination: "Gence", price: "600 AZN" },
      { destination: "Yalama", price: "400 AZN" },
      { destination: "Agstafa", price: "700 AZN" },
      { destination: "Sea Breeze", price: "120 AZN" },
      { destination: "Airport", price: "100 AZN" },
      { destination: "Lankaran", price: "360 AZN" },
      { destination: "Naftalan", price: "500 AZN" },
      { destination: "Gobustan", price: "200 AZN" },
    ],
  },
  {
    name: "Mercedes Sprinter",
    years: "2015-2018",
    passengers: "18-20",
    cityPackagePrice: "160 AZN",
    routes: [
      { destination: "Shahdagh", price: "350 AZN" },
      { destination: "Guba", price: "320 AZN" },
      { destination: "Gabala", price: "350 AZN" },
      { destination: "Sheki", price: "400 AZN" },
      { destination: "Gence", price: "450 AZN" },
      { destination: "Yalama", price: "330 AZN" },
      { destination: "Agstafa", price: "550 AZN" },
      { destination: "Sea Breeze", price: "100 AZN" },
      { destination: "Airport", price: "80 AZN" },
      { destination: "Lankaran", price: "350 AZN" },
      { destination: "Naftalan", price: "330 AZN" },
      { destination: "Gobustan", price: "130 AZN" },
    ],
  },
  {
    name: "Viano",
    years: "2012-2013",
    passengers: "7",
    cityPackagePrice: "120 AZN",
    routes: [
      { destination: "Shahdagh", price: "240 AZN" },
      { destination: "Guba", price: "220 AZN" },
      { destination: "Gabala", price: "240 AZN" },
      { destination: "Sheki", price: "300 AZN" },
      { destination: "Gence", price: "330 AZN" },
      { destination: "Yalama", price: "250 AZN" },
      { destination: "Agstafa", price: "450 AZN" },
      { destination: "Sea Breeze", price: "90 AZN" },
      { destination: "Airport", price: "50 AZN" },
      { destination: "Lankaran", price: "300 AZN" },
      { destination: "Naftalan", price: "300 AZN" },
      { destination: "Gobustan", price: "130 AZN" },
    ],
  },
  {
    name: "Mercedes E-Class",
    years: "2018-2019",
    cityPackagePrice: "200 AZN",
    routes: [
      { destination: "Shahdagh", price: "300 AZN" },
      { destination: "Guba", price: "250 AZN" },
      { destination: "Gabala", price: "300 AZN" },
      { destination: "Sheki", price: "350 AZN" },
      { destination: "Gence", price: "430 AZN" },
      { destination: "Yalama", price: "250 AZN" },
      { destination: "Agstafa", price: "450 AZN" },
      { destination: "Balaken", price: "450 AZN" },
      { destination: "Sea Breeze", price: "80 AZN" },
      { destination: "Airport", price: "80 AZN" },
      { destination: "Naftalan", price: "360 AZN" },
      { destination: "Gobustan", price: "200 AZN" },
    ],
  },
];

export const transferCars = transferPackages;
