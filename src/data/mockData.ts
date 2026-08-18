import { ServiceFeatureGroup, ReviewItem, FaqItem, CorePrinciple, StatItem, RouteOption } from '../types';

export const POPULAR_ROUTES: RouteOption[] = [
  {
    from: 'Hyderabad',
    to: 'Vijayawada',
    distance: '275 km',
    avgDuration: '4h 30m',
    estimatedFare: 480,
    busTrainFare: 850,
    savingsPercent: 43,
    popularPickups: ['Gachibowli ORR', 'LB Nagar Ring Road', 'Hitec City'],
    popularDrops: ['Benz Circle', 'PNBS Bus Station', 'Ramavarappadu Ring']
  },
  {
    from: 'Bangalore',
    to: 'Chennai',
    distance: '345 km',
    avgDuration: '5h 45m',
    estimatedFare: 590,
    busTrainFare: 1100,
    savingsPercent: 46,
    popularPickups: ['Electronic City Toll', 'Silk Board', 'Hebbal Flyover'],
    popularDrops: ['Koyambedu', 'Guindy', 'Tambaram']
  },
  {
    from: 'Pune',
    to: 'Mumbai',
    distance: '150 km',
    avgDuration: '3h 10m',
    estimatedFare: 320,
    busTrainFare: 650,
    savingsPercent: 50,
    popularPickups: ['Wakad Bridge', 'Hinjewadi Phase 1', 'Baner Phata'],
    popularDrops: ['Vashi Toll', 'Dadar TT Circle', 'BKC Kurla']
  },
  {
    from: 'Delhi',
    to: 'Jaipur',
    distance: '280 km',
    avgDuration: '4h 45m',
    estimatedFare: 490,
    busTrainFare: 900,
    savingsPercent: 45,
    popularPickups: ['Dhaula Kuan', 'IFFCO Chowk Gurgaon', 'Mahipalpur'],
    popularDrops: ['Sindhi Camp', 'Transport Nagar', 'Mansarovar Metro']
  },
  {
    from: 'Ahmedabad',
    to: 'Surat',
    distance: '260 km',
    avgDuration: '4h 15m',
    estimatedFare: 450,
    busTrainFare: 800,
    savingsPercent: 44,
    popularPickups: ['C.G. Road', 'Iskcon Cross Road', 'CTM Express Highway'],
    popularDrops: ['Kamrej Char Rasta', 'Surat Central', 'Varachha']
  },
  {
    from: 'Chandigarh',
    to: 'Delhi',
    distance: '245 km',
    avgDuration: '4h 00m',
    estimatedFare: 440,
    busTrainFare: 820,
    savingsPercent: 46,
    popularPickups: ['Tribune Chowk', 'ISBT Sector 43', 'Zirakpur Flyover'],
    popularDrops: ['Kashmere Gate', 'Karnal Bypass', 'Majnu Ka Tilla']
  }
];

export const TRUST_STATS: StatItem[] = [
  {
    value: '50,000+',
    label: 'Verified Commuters',
    subtext: 'Govt. ID & driving license authenticated',
    icon: 'ShieldCheck'
  },
  {
    value: '120+',
    label: 'Intercity Corridors',
    subtext: 'Connecting major business & university hubs',
    icon: 'MapPin'
  },
  {
    value: '250,000+',
    label: 'Safe Shared Journeys',
    subtext: 'With 100% OTP & live GPS safety protocol',
    icon: 'Car'
  },
  {
    value: '4.8 / 5',
    label: 'Community Rating',
    subtext: 'Based on 45,000+ authentic traveler reviews',
    icon: 'Star'
  }
];

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    id: 'pricing',
    title: 'Company-Controlled Algorithmic Pricing',
    desc: 'Transparent distance & fuel-based fares calculated by algorithm. Zero driver-passenger haggling or sudden surge surprises.',
    icon: 'Calculator',
    benefit: 'Guaranteed fair price for riders and predictable earnings for vehicle owners.'
  },
  {
    id: 'seats',
    title: 'Digital Seat Selection Map',
    desc: 'Choose your exact seat before boarding — just like booking an airline or bus ticket with full visibility of occupied spots.',
    icon: 'LayoutGrid',
    benefit: 'No cramped middle seats or confusion when stepping into the car.'
  },
  {
    id: 'boot',
    title: 'Digital Boot-Space Allocation',
    desc: 'Reserve trolley luggage space upfront. Guarantees your bag has an allotted spot in the trunk without trunk overflow.',
    icon: 'Luggage',
    benefit: 'Peace of mind that your luggage travels securely inside the dedicated boot.'
  },
  {
    id: 'transparency',
    title: 'Full Vehicle Visual Transparency',
    desc: 'View 7 mandatory inspection photos of the exact car (front, sides, rear, dashboard, front seats, rear seats, trunk) prior to booking.',
    icon: 'Camera',
    benefit: 'You always know the exact condition and comfort level of the vehicle you board.'
  },
  {
    id: 'driver-verify',
    title: 'Mandatory Driver & Document Verification',
    desc: 'Every driver undergoes strict verification of government driving license, RC book, vehicle insurance, and pollution certificate.',
    icon: 'FileCheck2',
    benefit: 'Only certified, safe, and accountable vehicle owners are allowed to host rides.'
  },
  {
    id: 'unique-vehicle',
    title: 'Mandatory Single-Account Vehicle Uniqueness',
    desc: 'One vehicle number can only be linked to a single verified driver account. Duplicate or shared vehicle profiles are strictly barred.',
    icon: 'Fingerprint',
    benefit: 'Prevents commercial fleet exploitation and guarantees individual driver accountability.'
  },
  {
    id: 'women-safety',
    title: 'Intelligent Women\'s Safety Seating Logic',
    desc: 'Solo female riders are auto-seated in front; pair female riders sit together in rear. Female passengers are never seated next to unrelated males.',
    icon: 'Shield',
    benefit: 'Comfortable, dignified, and proactive safety measures built directly into seat allocation.'
  },
  {
    id: 'driver-deposit',
    title: 'Driver Refundable Posting Deposit (₹100)',
    desc: 'Drivers deposit ₹100 when posting a ride to ensure reliability. 100% refunded upon ride completion; forfeited only upon driver cancellation.',
    icon: 'Coins',
    benefit: 'Eliminates last-minute driver dropouts and phantom ride postings.'
  },
  {
    id: 'passenger-advance',
    title: 'Passenger Booking Advance (₹50)',
    desc: 'A small ₹50 advance (₹10 platform fee + ₹40 driver advance) confirms serious intent and protects drivers against no-shows.',
    icon: 'CreditCard',
    benefit: 'Ensures committed co-travelers and prevents fake or duplicate seat blocks.'
  },
  {
    id: 'seating-rules',
    title: 'Vehicle-Aware Seating Comfort Rules',
    desc: 'Sedans/Hatchbacks carry maximum 3 passengers with NO middle seat occupied. Large MPVs carry maximum 5 passengers across 2 rows.',
    icon: 'Users',
    benefit: 'Spacious, relaxed highway travel without squeezing extra passengers.'
  },
  {
    id: 'route-stops',
    title: 'Sequential Multi-Stop Route Matching',
    desc: 'Up to 5 validated sequential pickup and drop points along the highway corridor, surfacing rides passing through your intermediate town.',
    icon: 'Route',
    benefit: 'Hop on or get dropped right along the arterial expressway without detours.'
  },
  {
    id: 'maps-eta',
    title: 'Google Maps ETA & Highway Drop Time',
    desc: 'Real-time traffic-synced arrival and departure estimates, combined with a clear 40-minute highway pickup window.',
    icon: 'Clock',
    benefit: 'Accurate scheduling with zero ambiguity on pickup windows.'
  }
];

export const SERVICE_FEATURE_GROUPS: ServiceFeatureGroup[] = [
  {
    id: 'registration',
    number: 1,
    title: 'Driver & Passenger Registration',
    shortIntro: 'Seamless onboarding with deep document authentication and dual passenger/driver mode.',
    iconName: 'IdCard',
    colorTag: 'purple',
    highlights: [
      'Mobile OTP sign-up with 3 mandatory emergency contacts',
      'Driver license & vehicle document verification',
      '7-angle vehicle photo requirement (front, rear, dash, seats, boot)',
      'Register up to 3 personal vehicles per driver account',
      'Switch between rider and driver mode from a single unified profile'
    ],
    detailedDescription: 'CarPe ensures that every member on the road is known and verified. Passengers sign up in seconds via mobile OTP and register three trusted emergency contacts who receive automatic journey safety updates. Vehicle owners upload government driving credentials and 7 comprehensive vehicle inspection photos before posting their first trip.',
    rules: [
      { title: 'Passenger Verification', desc: 'Phone verification with OTP and setting up 3 trusted contacts is mandatory prior to first ride booking.' },
      { title: 'Driver 7-Photo Inspection', desc: 'Drivers must submit clear photos of Front, Rear, Sides, Dashboard, Front seats, Rear seats, and the open Boot Space.' },
      { title: 'Multi-Vehicle Management', desc: 'A driver can register up to 3 personal vehicles under one authenticated driver profile.' },
      { title: 'Unified Dual Role', desc: 'Any verified user can book rides on weekdays and share their own car on weekend getaways without switching accounts.' }
    ]
  },
  {
    id: 'pricing',
    number: 2,
    title: 'Smart, Transparent Pricing',
    shortIntro: 'Automated distance & fuel algorithms eliminate price negotiation and unexpected surges.',
    iconName: 'BadgePercent',
    colorTag: 'green',
    highlights: [
      'Fares calculated automatically based on exact distance and fuel type',
      'Drivers cannot inflate, hike, or negotiate fares',
      'Full upfront breakdown shown to passengers before booking',
      'Transparent driver fuel-share earnings displayed before posting'
    ],
    detailedDescription: 'Informal carpooling often leads to awkward bargaining or unpredictable charges. CarPe fixes this permanently with algorithmic company-controlled pricing. Fares reflect actual highway distances and vehicle efficiency (Petrol/Diesel/EV/CNG), guaranteeing fair cost-sharing for riders and honest fuel compensation for drivers.',
    rules: [
      { title: 'No Manual Price Setting', desc: 'Pricing is fixed by CarPe’s central fare engine. Neither driver nor passenger can alter the rate.' },
      { title: 'Fuel Efficiency Calibration', desc: 'Calculated using base highway running costs + standard toll division across occupied seats.' },
      { title: 'Zero Hidden Fees', desc: 'Every rupee is itemized upfront: base ride share, toll contribution, and platform maintenance fee.' },
      { title: 'Driver Earnings Clarity', desc: 'Drivers see the exact net reimbursement deposited to their UPI/bank account for each passenger.' }
    ]
  },
  {
    id: 'seat-selection',
    number: 3,
    title: 'Digital Seat Selection & Vehicle-Aware Seating',
    shortIntro: 'Bus and airline-style visual seat map booking with strict no-middle-seat comfort standards.',
    iconName: 'LayoutGrid',
    colorTag: 'purple',
    highlights: [
      'Interactive visual seat map showing front & rear seat availability in real time',
      'Sedan / Hatchback / Compact SUV: Max 3 passengers (Zero middle seats)',
      'MPV / Large SUV (Innova, Ertiga): Max 5 passengers across two rear rows',
      'Instant real-time locking of selected seats during checkout'
    ],
    detailedDescription: 'Forget guessing where you will sit. CarPe introduces a digital visual seat selection interface where you pick your window or front seat before confirming. To ensure premium comfort on highway trips, we strictly ban middle seat bookings on standard 5-seater cars.',
    rules: [
      { title: 'Interactive Seat Map', desc: 'See the exact car layout (Driver seat, Front Passenger, Rear Left, Rear Right) before reserving.' },
      { title: 'Sedan / Hatchback Limit', desc: 'Maximum 3 passengers permitted: 1 Front Passenger + 2 Rear Window seats. The middle seat stays vacant.' },
      { title: 'MPV / 7-Seater Limit', desc: 'Maximum 5 passengers across middle and rear rows with designated aisle space.' },
      { title: 'Instant Status Update', desc: 'Booked seats turn gray with gender-safe status indicators for upcoming co-passengers.' }
    ]
  },
  {
    id: 'womens-safety',
    number: 4,
    title: 'Women’s Safety Seating Logic',
    shortIntro: 'Thoughtful algorithmic seating protocols that ensure security, comfort, and peace of mind.',
    iconName: 'Shield',
    colorTag: 'green',
    highlights: [
      'Solo female passenger is automatically allocated the front passenger seat',
      'Two female passengers booking separately are seated together in the rear row',
      'Prevents female passengers from being seated directly beside unrelated male passengers',
      'Couples and families booking together can choose adjacent seating freely'
    ],
    detailedDescription: 'Safety is not an afterthought at CarPe. Our intelligent seating algorithm respects the personal comfort of female commuters. When a woman books an intercity ride, the system automatically arranges seating so she never finds herself trapped between unknown male passengers.',
    rules: [
      { title: 'Solo Woman Allocation', desc: 'Single female traveler is automatically allotted the front passenger seat alongside the verified driver.' },
      { title: 'Pair Seating Harmony', desc: 'If two independent women book a ride, the system reserves the rear row for them.' },
      { title: 'Buffer Protection', desc: 'The algorithm blocks adjacent seat bookings by unrelated males when a single female is booked in that section.' },
      { title: 'Group & Couple Exemption', desc: 'Co-travelers on the same booking ID can freely choose neighboring seats.' }
    ]
  },
  {
    id: 'boot-space',
    number: 5,
    title: 'Digital Boot Space & Luggage Management',
    shortIntro: 'Upfront trunk reservation guarantees your suitcase has a dedicated slot without clutter.',
    iconName: 'Luggage',
    colorTag: 'purple',
    highlights: [
      'Reserve luggage trunk space digitally during ride checkout',
      'Standard allowance: 1 medium trolley bag (up to 24") per registered passenger',
      'Handbags, laptop backpacks, and small totes stay with passengers in the cabin',
      'Strict rule: No boot space claim allowed without prior digital reservation'
    ],
    detailedDescription: 'Highway journeys with baggage often cause awkward disputes over trunk space. On CarPe, luggage is treated as an active inventory item. You reserve your boot slot at checkout, ensuring the driver’s trunk is never overloaded.',
    rules: [
      { title: 'Advance Trunk Reservation', desc: 'Select "1 Trolley Bag" while choosing your seat to lock in boot space.' },
      { title: 'Cabin Carry-On Allowed', desc: 'Personal laptop bags, purses, and small backpacks ride comfortably on your lap or floorboard.' },
      { title: 'No Unreserved Overloading', desc: 'Drivers can refuse unreserved heavy luggage at pickup to protect other passengers’ baggage rights.' },
      { title: 'Trunk Capacity Cap', desc: 'Total luggage reservations are hard-capped to the car’s verified boot capacity (shown in photos).' }
    ]
  },
  {
    id: 'trust-verification',
    number: 6,
    title: 'Trust & Multi-Point Verification',
    shortIntro: 'Single-account vehicle locking, real photo inspection, and dual OTP ride check-in.',
    iconName: 'CheckCircle2',
    colorTag: 'green',
    highlights: [
      'Every vehicle license plate is uniquely locked to one driver account',
      'Zero duplicate or multi-account vehicle hijacking',
      'Inspect 7 real photos of the car before you book',
      'Secure 4-digit OTP shared between passenger and driver to start ride'
    ],
    detailedDescription: 'We eliminate rogue commercial aggregators pretending to be casual carpoolers. With our 1-Car-1-Account rule, real-time photographic inspection, and start-ride OTP verification, every trip begins with absolute certainty.',
    rules: [
      { title: 'Unique Plate Locking', desc: 'Vehicle registration numbers are cryptographically linked to the owner’s driver ID to prevent proxy driving.' },
      { title: 'Visual Car Preview', desc: 'Riders can browse current photos of the car upholstery, dashboard, and cleanliness score.' },
      { title: 'Dual OTP Ride Handshake', desc: 'The ride only starts on the driver’s app once the passenger provides the unique 4-digit start OTP at the pickup spot.' },
      { title: 'Community History', desc: 'View driver experience, total completed intercity km, and verified ratings.' }
    ]
  },
  {
    id: 'emergency-features',
    number: 7,
    title: 'Safety & Emergency Features',
    shortIntro: 'One-tap Emergency SOS broadcasts real-time GPS telemetry to your 3 trusted contacts.',
    iconName: 'AlertTriangle',
    colorTag: 'purple',
    highlights: [
      'Dedicated one-tap Emergency SOS button on active ride screen',
      'Instant SMS and push notification to all 3 emergency contacts with live tracking link',
      'Automated trip progress alerts at major highway milestone checkpoints',
      'Direct priority bridge to 24/7 CarPe Safety Desk and Highway Patrol'
    ],
    detailedDescription: 'Peace of mind for both passengers and their loved ones at home. CarPe’s active ride dashboard features an instant Emergency Button. In the rare event of an issue, a single tap immediately alerts your emergency contacts with real-time GPS location.',
    rules: [
      { title: 'Instant Live Link Broadcast', desc: 'Your emergency contacts receive an instant SMS with a browser-accessible live tracking map.' },
      { title: 'Continuous GPS Heartbeat', desc: 'The app streams location telemetry even when your phone screen is locked or in low-network pockets.' },
      { title: 'Safety Desk Response', desc: 'CarPe’s safety desk is notified immediately to verify rider safety and dispatch highway assistance if needed.' },
      { title: 'Driver Code of Conduct', desc: 'Zero tolerance for deviations from the agreed highway route without prior passenger consensus.' }
    ]
  },
  {
    id: 'route-matching',
    number: 8,
    title: 'Smart Highway Route Matching',
    shortIntro: 'Intelligent corridor matching surfaces en-route pickups and drops without tedious detours.',
    iconName: 'Route',
    colorTag: 'green',
    highlights: [
      'Surfaces rides that match your exact route, start before, or continue beyond',
      'Example: Searching Hyderabad → Vijayawada also finds Hyderabad → Nuzividu rides',
      'Up to 5 verified pickup points and 5 drop points per journey',
      'All stops strictly validated along the sequential highway corridor'
    ],
    detailedDescription: 'Why should you miss a great ride just because the driver is traveling 30 km further down the same highway? CarPe’s corridor engine analyzes arterial road geometries to match riders boarding or departing anywhere along the driver’s transit line.',
    rules: [
      { title: 'Corridor Overlap Search', desc: 'Searches match any overlapping sub-segment along a driver’s published highway route.' },
      { title: 'Max 5 Pickup / 5 Drop Points', desc: 'Drivers can set up to 5 strategic highway toll plazas or ring road junctions as stopping spots.' },
      { title: 'Sequential Route Validation', desc: 'Stops must follow the forward highway trajectory with zero backtrack loops.' },
      { title: 'Fair Segment Fares', desc: 'Intermediate passengers only pay for the exact sub-distance traveled.' }
    ]
  },
  {
    id: 'accountability',
    number: 9,
    title: 'Mutual Accountability & Deposit System',
    shortIntro: 'Financial deposits and performance-linked commission maintain 99.4% ride fulfillment.',
    iconName: 'Scale',
    colorTag: 'purple',
    highlights: [
      'Drivers pay refundable ₹100 deposit to post a ride (forfeited only if driver cancels)',
      'Passengers pay ₹50 booking advance (₹10 CarPe platform fee + ₹40 driver advance)',
      'Rating accountability: Ratings ≤ 3★ increase driver fee to ₹20 for next ride only',
      '100% refund for passengers if driver cancels, plus replacement ride priority'
    ],
    detailedDescription: 'Unreliable cancellations are the single biggest frustration in carpooling. CarPe introduces balanced economic commitments. A small refundable deposit ensures drivers show up, while a modest booking advance ensures passenger commitment.',
    rules: [
      { title: '₹100 Driver Deposit', desc: 'Locked upon ride publishing, credited back immediately upon successful trip completion.' },
      { title: '₹50 Passenger Advance', desc: '₹10 goes to platform verification; ₹40 is deducted directly from the final cash/UPI fare paid to the driver.' },
      { title: 'Cancellation Penalty', desc: 'If a driver cancels without an emergency waiver, their ₹100 deposit is credited to affected passengers.' },
      { title: 'Quality-Linked Commission', desc: 'Drivers maintaining high ratings enjoy the base ₹10 commission. Sub-3-star rides trigger a one-time ₹20 fee.' }
    ]
  },
  {
    id: 'journey-experience',
    number: 10,
    title: 'Polished Journey Experience',
    shortIntro: 'Google Maps highway ETA, 40-minute pickup window, 100% AC standard, and silent-ride norms.',
    iconName: 'Sparkles',
    colorTag: 'green',
    highlights: [
      'Real-time ETA and drop-time updates powered by Google Maps traffic integration',
      '40-minute flexible pickup window clearly communicated upfront',
      '100% Air-Conditioned vehicle standard with fair seasonal policies',
      'Community etiquette guidelines: personal earphone audio and courteous cabin atmosphere',
      'Post-ride 1-to-5 star bilateral rating and feedback'
    ],
    detailedDescription: 'Highway journeys should be peaceful, comfortable, and productive. CarPe establishes clear expectations before you step into the car: guaranteed AC, accurate traffic-aware ETAs, a transparent pickup window, and thoughtful etiquette.',
    rules: [
      { title: 'Google Maps Highway Sync', desc: 'Live highway congestion data computes realistic pickup arrival times and drop ETAs.' },
      { title: '40-Minute Pickup Window', desc: 'To account for city exit traffic, a 4:00 PM ride allows arrival between 4:00 PM and 4:40 PM.' },
      { title: 'Standard AC Inclusions', desc: 'All rides include active air conditioning as part of the algorithmic fuel calculation.' },
      { title: 'Cabin Audio Etiquette', desc: 'Passengers use headphones for phone calls and media playback to maintain a calm shared environment.' }
    ]
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Pricing Mechanism',
    carpe: 'Automated distance & fuel algorithm (Zero haggling)',
    informalGroups: 'Unregulated driver bargaining & sudden surge',
    rideHailingApps: 'High commercial taxi rates + 25-35% commission'
  },
  {
    feature: 'Seat Selection',
    carpe: 'Digital interactive seat map (choose front/rear)',
    informalGroups: 'First-come chaotic scramble at pickup spot',
    rideHailingApps: 'Random allocation, no choice'
  },
  {
    feature: 'Middle Seat Policy',
    carpe: 'Strictly zero middle seats on 5-seaters',
    informalGroups: 'Frequently overcrowded to maximize cash',
    rideHailingApps: 'Middle seats regularly filled'
  },
  {
    feature: 'Women\'s Safety Logic',
    carpe: 'Algorithmic front / paired rear allocation',
    informalGroups: 'No gender protection or rules',
    rideHailingApps: 'No seating preference logic'
  },
  {
    feature: 'Luggage Guarantee',
    carpe: 'Digital boot space booking upfront',
    informalGroups: 'Uncertain trunk space, baggage fights',
    rideHailingApps: 'Trunk shared with CNG tank or driver belongings'
  },
  {
    feature: 'Vehicle Photos',
    carpe: '7 real inspection photos before booking',
    informalGroups: 'No photos, surprise car condition',
    rideHailingApps: 'Generic car icon only'
  },
  {
    feature: 'Cancellation Protection',
    carpe: '₹100 driver deposit + ₹50 booking advance',
    informalGroups: 'High driver ghosting rate with zero recourse',
    rideHailingApps: 'Unpredictable driver cancellations'
  },
  {
    feature: 'Emergency Protocol',
    carpe: '1-tap SOS + live link to 3 trusted contacts',
    informalGroups: 'None',
    rideHailingApps: 'Generic call support only'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Ananya Deshmukh',
    role: 'Passenger',
    avatarInitials: 'AD',
    avatarColor: 'bg-purple-600',
    route: 'Hyderabad ⇄ Vijayawada',
    origin: 'Hyderabad',
    destination: 'Vijayawada',
    rating: 5,
    date: '3 days ago',
    category: 'Safety',
    verifiedBadge: true,
    quote: 'As a solo female traveler heading home for the weekend on the NH65, the automatic front seat allocation gave me immense peace of mind. The car was spotless, the driver verified, and my family tracked my live location the entire way.'
  },
  {
    id: 'rev-2',
    name: 'Rajesh Kulkarni',
    role: 'Verified Driver',
    avatarInitials: 'RK',
    avatarColor: 'bg-emerald-600',
    route: 'Pune ⇄ Mumbai',
    origin: 'Pune',
    destination: 'Mumbai',
    rating: 5,
    date: '1 week ago',
    category: 'Reliability',
    verifiedBadge: true,
    quote: 'I commute between Wakad and BKC every Monday morning. With CarPe’s ₹50 passenger booking advance and automated pricing, I haven’t had a single no-show in 4 months. It offsets my expressway toll and fuel completely.'
  },
  {
    id: 'rev-3',
    name: 'Karthik Ramanathan',
    role: 'Frequent Commuter',
    avatarInitials: 'KR',
    avatarColor: 'bg-indigo-600',
    route: 'Bangalore ⇄ Chennai',
    origin: 'Bangalore',
    destination: 'Chennai',
    rating: 5,
    date: '2 weeks ago',
    category: 'Comfort',
    verifiedBadge: true,
    quote: 'The digital seat selection is a game changer! Being 6\'2", knowing that no one was squeezed into the middle seat on a 6-hour highway ride made it as comfortable as a personal executive sedan.'
  },
  {
    id: 'rev-4',
    name: 'Pooja Verma',
    role: 'Passenger',
    avatarInitials: 'PV',
    avatarColor: 'bg-purple-700',
    route: 'Delhi ⇄ Jaipur',
    origin: 'Delhi',
    destination: 'Jaipur',
    rating: 5,
    date: '2 weeks ago',
    category: 'Verification',
    verifiedBadge: true,
    quote: 'Being able to view all 7 real inspection photos of the Honda City before booking gave me total confidence. The driver was polite, OTP check-in was seamless, and the car’s AC was running perfectly.'
  },
  {
    id: 'rev-5',
    name: 'Hardik Patel',
    role: 'Frequent Commuter',
    avatarInitials: 'HP',
    avatarColor: 'bg-teal-600',
    route: 'Ahmedabad ⇄ Surat',
    origin: 'Ahmedabad',
    destination: 'Surat',
    rating: 4,
    date: '3 weeks ago',
    category: 'Pricing',
    verifiedBadge: true,
    quote: 'The fare was ₹450 compared to ₹900 on last-minute private buses. Algorithmic pricing meant zero arguments over tolls or fuel, and luggage reservation meant my suitcase fit into the boot with zero hassle.'
  },
  {
    id: 'rev-6',
    name: 'Manpreet Singh',
    role: 'Verified Driver',
    avatarInitials: 'MS',
    avatarColor: 'bg-emerald-700',
    route: 'Chandigarh ⇄ Delhi',
    origin: 'Chandigarh',
    destination: 'Delhi',
    rating: 5,
    date: '1 month ago',
    category: 'Reliability',
    verifiedBadge: true,
    quote: 'The smart route matching surfaced a passenger needing a drop at Karnal Bypass along my route to Delhi. Made ₹440 extra on empty seats without deviating an inch off the Grand Trunk Road.'
  },
  {
    id: 'rev-7',
    name: 'Divya Sundaram',
    role: 'Passenger',
    avatarInitials: 'DS',
    avatarColor: 'bg-purple-600',
    route: 'Coimbatore ⇄ Bangalore',
    origin: 'Coimbatore',
    destination: 'Bangalore',
    rating: 5,
    date: '1 month ago',
    category: 'Safety',
    verifiedBadge: true,
    quote: 'I tested the live journey tracking link with my sister. She could see my exact car position near Salem and Hosur in real-time. CarPe brings a level of trust that informal WhatsApp ride groups never could.'
  },
  {
    id: 'rev-8',
    name: 'Siddharth Rao',
    role: 'Frequent Commuter',
    avatarInitials: 'SR',
    avatarColor: 'bg-slate-700',
    route: 'Hyderabad ⇄ Warangal',
    origin: 'Hyderabad',
    destination: 'Warangal',
    rating: 5,
    date: '1 month ago',
    category: 'Pricing',
    verifiedBadge: true,
    quote: 'Switching between driver mode when taking my own car and passenger mode when traveling light is seamless on the same account. The ₹100 driver deposit keeps flaky drivers out of the network.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  // Booking & Pricing
  {
    id: 'faq-1',
    category: 'Booking & Pricing',
    question: 'How is my ride fare calculated on CarPe?',
    answer: 'CarPe uses a proprietary distance and fuel-efficiency algorithm. The fare is computed based on the exact kilometer distance between your selected pickup and drop points, vehicle fuel type (Petrol, Diesel, EV, or CNG), and standardized highway toll division. Neither drivers nor passengers can alter or haggle over this price.'
  },
  {
    id: 'faq-2',
    category: 'Booking & Pricing',
    question: 'Can drivers change or negotiate the fare at pickup?',
    answer: 'No. Price negotiation is strictly prohibited on CarPe. The fare shown to you during booking confirmation is the exact total you pay. Drivers who attempt to demand additional offline cash risk immediate account suspension and forfeiture of their posting deposit.'
  },
  {
    id: 'faq-3',
    category: 'Booking & Pricing',
    question: 'What is the ₹50 passenger booking advance for?',
    answer: 'The ₹50 advance secures your booking commitment. ₹10 is CarPe’s platform and verification fee, while the remaining ₹40 is credited toward the driver’s fare. When you meet the driver, you only pay the remaining balance. This advance protects drivers from frivolous cancellations.'
  },

  // Safety
  {
    id: 'faq-4',
    category: 'Safety',
    question: 'How does CarPe ensure women\'s safety while allocating seats?',
    answer: 'Our algorithmic seating logic automatically reserves the front passenger seat for solo female riders and pairs female passengers together in the rear row. The system actively prevents a solo female traveler from being seated directly beside an unrelated male passenger. Group bookings made together can choose seats freely.'
  },
  {
    id: 'faq-5',
    category: 'Safety',
    question: 'What does the Emergency SOS button do during an active ride?',
    answer: 'Tapping the in-app Emergency Button immediately sends an automated SMS with your live GPS tracking map link to your three registered trusted contacts. It also alerts the 24/7 CarPe Safety Desk to initiate immediate check-in and coordinate with highway patrol authorities if necessary.'
  },
  {
    id: 'faq-6',
    category: 'Safety',
    question: 'Are drivers and vehicles verified before they can post rides?',
    answer: 'Yes, 100%. Every driver must upload their government driving license, vehicle Registration Certificate (RC), commercial/private insurance, and 7 mandatory vehicle inspection photos (including dashboard, interior, and trunk). Every submission is authenticated by our compliance team.'
  },

  // Seats & Luggage
  {
    id: 'faq-7',
    category: 'Seats & Luggage',
    question: 'How does digital seat selection work?',
    answer: 'Similar to airline or bus ticket booking, CarPe shows an interactive seat map of the car during checkout. You can visually select available front or rear window seats. For passenger comfort, middle seats are never sold on standard 5-seater sedans or hatchbacks.'
  },
  {
    id: 'faq-8',
    category: 'Seats & Luggage',
    question: 'Can I book boot space for my heavy luggage?',
    answer: 'Yes. When booking your seat, simply toggle the "1 Trolley Bag" option to digitally reserve space in the car\'s boot. Standard carry-on laptop backpacks and small purses stay in the cabin with you at no extra charge.'
  },
  {
    id: 'faq-9',
    category: 'Seats & Luggage',
    question: 'What happens if I bring extra unreserved luggage?',
    answer: 'Drivers have the right to decline bulky unreserved luggage that exceeds the trunk capacity or encroaches upon other booked passengers\' reserved boot space. We strongly recommend booking your boot slot during checkout.'
  },

  // Rides & Cancellations
  {
    id: 'faq-10',
    category: 'Rides & Cancellations',
    question: 'What happens if a driver cancels a posted ride?',
    answer: 'To ensure reliability, drivers pay a refundable ₹100 deposit to post a ride. If a driver cancels without an approved emergency waiver, their ₹100 deposit is forfeited and distributed as compensation credit to affected passengers, who also receive top priority for re-booking.'
  },
  {
    id: 'faq-11',
    category: 'Rides & Cancellations',
    question: 'What if there is highway traffic — is there a pickup flexibility window?',
    answer: 'Yes. To accommodate city exit traffic and toll delays, CarPe communicates a standard 40-minute pickup window upfront. For instance, for a 4:00 PM scheduled ride, the driver arrival window is 4:00 PM to 4:40 PM, with live Google Maps ETA updates.'
  },
  {
    id: 'faq-12',
    category: 'Rides & Cancellations',
    question: 'How does the OTP verification work at pickup?',
    answer: 'When you meet your driver, you verify the vehicle plate against your app and provide your secret 4-digit ride OTP. The driver enters this into their CarPe driver app to officially start the ride and trigger the safety tracking protocol.'
  },

  // Account & Roles
  {
    id: 'faq-13',
    category: 'Account & Roles',
    question: 'Can I be both a passenger and a driver on the same account?',
    answer: 'Yes! CarPe allows seamless dual-role usage. Once your profile and documents are authenticated, you can switch between "Ride as Passenger" and "Offer a Ride as Driver" with a single tap in your profile menu.'
  },
  {
    id: 'faq-14',
    category: 'Account & Roles',
    question: 'How many vehicles can a driver register?',
    answer: 'A single verified driver profile can register and manage up to 3 personal vehicles, each verified with its own RC book and 7-photo inspection.'
  },
  {
    id: 'faq-15',
    category: 'Account & Roles',
    question: 'Can two different accounts register the same vehicle number?',
    answer: 'No. CarPe enforces a strict 1-Vehicle-1-Account rule to prevent unauthorized commercial pooling, fleet exploitation, and proxy driving. Each vehicle plate is uniquely tied to one authenticated driver.'
  }
];
