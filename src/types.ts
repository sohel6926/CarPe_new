export type PageId = 'home' | 'about' | 'download' | 'services' | 'reviews' | 'faqs' | 'contact';

export interface ServiceFeatureGroup {
  id: string;
  number: number;
  title: string;
  shortIntro: string;
  iconName: string;
  colorTag: 'purple' | 'green';
  highlights: string[];
  detailedDescription: string;
  rules: { title: string; desc: string }[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: 'Passenger' | 'Verified Driver' | 'Frequent Commuter';
  avatarInitials: string;
  avatarColor: string;
  route: string;
  origin: string;
  destination: string;
  rating: number;
  date: string;
  category: 'Safety' | 'Pricing' | 'Comfort' | 'Reliability' | 'Verification';
  quote: string;
  verifiedBadge: boolean;
}

export interface FaqItem {
  id: string;
  category: 'Booking & Pricing' | 'Safety' | 'Seats & Luggage' | 'Rides & Cancellations' | 'Account & Roles';
  question: string;
  answer: string;
}

export interface CorePrinciple {
  id: string;
  title: string;
  desc: string;
  icon: string;
  benefit: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface RouteOption {
  from: string;
  to: string;
  distance: string;
  avgDuration: string;
  estimatedFare: number;
  busTrainFare: number;
  savingsPercent: number;
  popularPickups: string[];
  popularDrops: string[];
}
