export type WarrantyStatus = 'active' | 'expiring' | 'expired';
export type Category = 'Kitchen' | 'Laundry' | 'Heating/Cooling' | 'Plumbing' | 'Electrical' | 'Security' | 'Outdoor';

export interface Appliance {
  id: string;
  name: string;
  category: Category;
  brand: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  purchasePrice: number;
  retailer: string;
  location: string;
  warrantyExpires: string;
  extendedWarrantyExpires?: string;
  warrantyProvider: string;
  warrantyPhone: string;
  coverageDetails: string[];
  exclusions: string[];
  notes: string;
  emoji: string;
  image?: string;
  status: WarrantyStatus;
  daysUntilExpiry: number;
}

export interface MaintenanceLog {
  id: string;
  applianceId: string;
  applianceName: string;
  date: string;
  type: 'routine' | 'repair' | 'inspection' | 'replacement';
  description: string;
  cost: number;
  technician?: string;
  notes: string;
  nextDueDate?: string;
}

export interface Reminder {
  id: string;
  applianceId: string;
  applianceName: string;
  type: 'warranty-expiry' | 'maintenance' | 'inspection';
  dueDate: string;
  daysUntil: number;
  priority: 'high' | 'medium' | 'low';
  dismissed: boolean;
  description: string;
}

export const appliances: Appliance[] = [
  {
    id: '1',
    name: 'LG French Door Refrigerator',
    category: 'Kitchen',
    brand: 'LG',
    model: 'LRFXS2503S',
    serialNumber: 'LG204A738291',
    purchaseDate: '2022-03-08',
    purchasePrice: 1849,
    retailer: "Best Buy",
    location: 'Kitchen',
    warrantyExpires: '2025-03-08',
    extendedWarrantyExpires: '2027-03-08',
    warrantyProvider: 'LG USA',
    warrantyPhone: '1-800-243-0000',
    coverageDetails: [
      'Parts and labor for manufacturing defects',
      'Compressor covered for 10 years',
      'Sealed system parts covered for 5 years',
      'In-home service included',
      'Food loss coverage up to $200',
    ],
    exclusions: [
      'Cosmetic damage',
      'Damage from improper installation',
      'Commercial use',
      'Normal wear and tear',
    ],
    notes: 'Purchased stainless steel finish. Extended warranty through Geek Squad active.',
    emoji: '❄️',
    status: 'expiring',
    daysUntilExpiry: 67,
  },
  {
    id: '2',
    name: 'Samsung Electric Range',
    category: 'Kitchen',
    brand: 'Samsung',
    model: 'NE63A6711SS',
    serialNumber: 'SA031B829477',
    purchaseDate: '2024-02-12',
    purchasePrice: 999,
    retailer: 'Home Depot',
    location: 'Kitchen',
    warrantyExpires: '2025-02-12',
    warrantyProvider: 'Samsung Electronics',
    warrantyPhone: '1-800-726-7864',
    coverageDetails: [
      'Parts and labor for first 12 months',
      'Ceramic glass cooktop defects covered',
      'Heating element failures covered',
      'Control board defects covered',
    ],
    exclusions: [
      'Scratches on glass cooktop from pots',
      'Damage from power surges',
      'Misuse or abuse',
    ],
    notes: 'Slide-in range with air fry mode. Register at Samsung for extended offer.',
    emoji: '🍳',
    status: 'expiring',
    daysUntilExpiry: 42,
  },
  {
    id: '3',
    name: 'Carrier Central A/C & Heat',
    category: 'Heating/Cooling',
    brand: 'Carrier',
    model: '24ACC636A003',
    serialNumber: 'CA190721034',
    purchaseDate: '2021-03-29',
    purchasePrice: 4200,
    retailer: 'Blue Dot HVAC',
    location: 'Mechanical Room',
    warrantyExpires: '2025-03-29',
    extendedWarrantyExpires: '2031-03-29',
    warrantyProvider: 'Carrier Corporation',
    warrantyPhone: '1-800-227-7437',
    coverageDetails: [
      '10-year parts warranty on compressor',
      '10-year parts warranty on coil',
      'Limited 5-year labor warranty',
      'Refrigerant coverage for first 2 years',
      'Annual maintenance included first year',
    ],
    exclusions: [
      'Filters and maintenance items',
      'Ductwork not installed by Carrier dealer',
      'Damage from flooding',
    ],
    notes: 'Installed by Blue Dot HVAC. Registration confirmed online. Annual tune-up in fall.',
    emoji: '🌬️',
    status: 'expiring',
    daysUntilExpiry: 88,
  },
  {
    id: '4',
    name: 'Bosch 500 Series Dishwasher',
    category: 'Kitchen',
    brand: 'Bosch',
    model: 'SHPM88Z75N',
    serialNumber: 'BSH8821093',
    purchaseDate: '2023-06-15',
    purchasePrice: 1149,
    retailer: 'AJ Madison',
    location: 'Kitchen',
    warrantyExpires: '2026-06-15',
    warrantyProvider: 'BSH Home Appliances',
    warrantyPhone: '1-800-944-2904',
    coverageDetails: [
      '3-year full parts and labor coverage',
      'Water damage from internal components covered',
      'Electronic controls covered',
      'Door seal and tub liner covered',
    ],
    exclusions: [
      'Damage from hard water (install softener)',
      'Broken racks from overloading',
      'Cosmetic damage after delivery',
    ],
    notes: '500 Series with CrystalDry. 44 dBA rated. Very quiet.',
    emoji: '🫧',
    status: 'active',
    daysUntilExpiry: 532,
  },
  {
    id: '5',
    name: 'Whirlpool Front Load Washer',
    category: 'Laundry',
    brand: 'Whirlpool',
    model: 'WFW5000DW',
    serialNumber: 'WPL20380029',
    purchaseDate: '2022-09-03',
    purchasePrice: 799,
    retailer: 'Lowes',
    location: 'Laundry Room',
    warrantyExpires: '2025-09-03',
    warrantyProvider: 'Whirlpool Corporation',
    warrantyPhone: '1-800-253-1301',
    coverageDetails: [
      '1-year full parts and labor',
      'Cabinet and tub: 5 years',
      'Drive motor: 10 years',
      'Electronic controls: 2 years',
    ],
    exclusions: [
      'Drum scratches from metal objects',
      'Hose damage from incorrect installation',
      'Mold from improper ventilation',
    ],
    notes: 'Use HE detergent only. Leave door open after each cycle. Clean drum monthly.',
    emoji: '🌊',
    status: 'active',
    daysUntilExpiry: 247,
  },
  {
    id: '6',
    name: 'Rheem Performance Water Heater',
    category: 'Plumbing',
    brand: 'Rheem',
    model: 'PROG40-38N RH60',
    serialNumber: 'RHM18C00928',
    purchaseDate: '2020-11-14',
    purchasePrice: 549,
    retailer: 'Home Depot',
    location: 'Utility Closet',
    warrantyExpires: '2022-11-14',
    warrantyProvider: 'Rheem Manufacturing',
    warrantyPhone: '1-800-432-8373',
    coverageDetails: [
      '6-year tank warranty (expired)',
      '1-year parts and labor (expired)',
    ],
    exclusions: [
      'Sediment buildup from hard water',
      'Damage from improper pressure settings',
    ],
    notes: 'Warranty expired. Consider replacing anode rod — last checked 2022. Flush annually.',
    emoji: '🔥',
    status: 'expired',
    daysUntilExpiry: -790,
  },
  {
    id: '7',
    name: 'Whirlpool Electric Dryer',
    category: 'Laundry',
    brand: 'Whirlpool',
    model: 'WED5000DW',
    serialNumber: 'WPL20380030',
    purchaseDate: '2022-09-03',
    purchasePrice: 699,
    retailer: 'Lowes',
    location: 'Laundry Room',
    warrantyExpires: '2025-09-03',
    warrantyProvider: 'Whirlpool Corporation',
    warrantyPhone: '1-800-253-1301',
    coverageDetails: [
      '1-year full parts and labor',
      'Drum and motor: 5 years',
      'Heating element: 2 years',
    ],
    exclusions: [
      'Drum scratches from belt buckles',
      'Lint trap damage from lack of cleaning',
    ],
    notes: 'Matching unit with washer. Clean lint trap every load. Annual vent cleaning done Dec 2024.',
    emoji: '💨',
    status: 'active',
    daysUntilExpiry: 247,
  },
  {
    id: '8',
    name: 'Ring Video Doorbell Pro 2',
    category: 'Security',
    brand: 'Ring',
    model: 'Video Doorbell Pro 2',
    serialNumber: 'RNG2209AM3',
    purchaseDate: '2023-01-20',
    purchasePrice: 249,
    retailer: 'Amazon',
    location: 'Front Door',
    warrantyExpires: '2024-01-20',
    warrantyProvider: 'Ring LLC (Amazon)',
    warrantyPhone: '1-800-656-1918',
    coverageDetails: [
      '1-year limited hardware warranty',
      'Replacement unit if hardware fails',
    ],
    exclusions: [
      'Damage from weather extremes',
      'Theft of device',
      'Software issues',
    ],
    notes: 'Warranty expired. Ring Protect Plus subscription active through Jan 2026. Works great.',
    emoji: '🔔',
    status: 'expired',
    daysUntilExpiry: -370,
  },
];

export const maintenanceLogs: MaintenanceLog[] = [
  {
    id: 'm1',
    applianceId: '3',
    applianceName: 'Carrier HVAC System',
    date: '2025-01-04',
    type: 'replacement',
    description: 'HVAC Filter Replacement',
    cost: 28,
    notes: 'Replaced 16×25×1 MERV-11 filter. Changed every 90 days. Next due April 4.',
    nextDueDate: '2025-04-04',
  },
  {
    id: 'm2',
    applianceId: '7',
    applianceName: 'Whirlpool Dryer',
    date: '2024-12-18',
    type: 'routine',
    description: 'Annual Dryer Vent Cleaning',
    cost: 95,
    technician: 'AirFlow Plus Services',
    notes: 'Pro cleaning. Removed lint from 14ft duct run. No blockages found.',
    nextDueDate: '2025-12-18',
  },
  {
    id: 'm3',
    applianceId: '6',
    applianceName: 'Rheem Water Heater',
    date: '2024-12-05',
    type: 'routine',
    description: 'Annual Water Heater Flush',
    cost: 0,
    notes: 'DIY flush to remove sediment. Anode rod checked — still good. Pilot looks clean.',
    nextDueDate: '2025-12-05',
  },
  {
    id: 'm4',
    applianceId: '3',
    applianceName: 'Carrier HVAC System',
    date: '2024-10-15',
    type: 'inspection',
    description: 'Fall HVAC Tune-Up',
    cost: 129,
    technician: 'Blue Dot HVAC',
    notes: 'Checked refrigerant levels, cleaned coils, inspected blower. All systems normal. Freon OK.',
    nextDueDate: '2025-04-15',
  },
  {
    id: 'm5',
    applianceId: '5',
    applianceName: 'Whirlpool Washer',
    date: '2024-09-10',
    type: 'routine',
    description: 'Drum Cleaning Cycle + Gasket Wipe',
    cost: 0,
    notes: 'DIY monthly cleaning with Affresh tablet. Wiped door gasket with diluted bleach. No mold.',
    nextDueDate: '2025-01-10',
  },
  {
    id: 'm6',
    applianceId: '1',
    applianceName: 'LG Refrigerator',
    date: '2024-08-22',
    type: 'repair',
    description: 'Ice Maker Repair',
    cost: 0,
    technician: 'LG Authorized Service',
    notes: 'Ice maker stopped producing. Technician replaced water inlet valve under warranty. Working now.',
  },
  {
    id: 'm7',
    applianceId: '4',
    applianceName: 'Bosch Dishwasher',
    date: '2024-07-05',
    type: 'routine',
    description: 'Filter Cleaning + Spray Arm Check',
    cost: 0,
    notes: 'Monthly filter cleaning per manual. Soaked in warm water. Spray arms clear. Citric acid tablet run.',
    nextDueDate: '2025-01-05',
  },
];

export const reminders: Reminder[] = [
  {
    id: 'r1',
    applianceId: '2',
    applianceName: 'Samsung Electric Range',
    type: 'warranty-expiry',
    dueDate: '2025-02-12',
    daysUntil: 42,
    priority: 'high',
    dismissed: false,
    description: 'Manufacturer warranty expires in 42 days. Consider purchasing extended coverage.',
  },
  {
    id: 'r2',
    applianceId: '1',
    applianceName: 'LG Refrigerator',
    type: 'warranty-expiry',
    dueDate: '2025-03-08',
    daysUntil: 67,
    priority: 'high',
    dismissed: false,
    description: 'Base warranty expires in 67 days. Extended Geek Squad warranty active until 2027.',
  },
  {
    id: 'r3',
    applianceId: '3',
    applianceName: 'Carrier HVAC System',
    type: 'maintenance',
    dueDate: '2025-04-04',
    daysUntil: 94,
    priority: 'medium',
    dismissed: false,
    description: 'HVAC filter replacement due. Replace 16×25×1 MERV-11 every 90 days.',
  },
  {
    id: 'r4',
    applianceId: '3',
    applianceName: 'Carrier HVAC System',
    type: 'inspection',
    dueDate: '2025-04-15',
    daysUntil: 105,
    priority: 'medium',
    dismissed: false,
    description: 'Spring HVAC tune-up due. Schedule with Blue Dot HVAC.',
  },
  {
    id: 'r5',
    applianceId: '3',
    applianceName: 'Carrier HVAC System',
    type: 'warranty-expiry',
    dueDate: '2025-03-29',
    daysUntil: 88,
    priority: 'high',
    dismissed: false,
    description: 'Parts warranty expires. 10-year extended labor warranty continues until 2031.',
  },
  {
    id: 'r6',
    applianceId: '6',
    applianceName: 'Rheem Water Heater',
    type: 'maintenance',
    dueDate: '2025-12-05',
    daysUntil: 339,
    priority: 'low',
    dismissed: false,
    description: 'Annual water heater flush scheduled. DIY task — drain 2 gallons to remove sediment.',
  },
];