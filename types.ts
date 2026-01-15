
export interface LocationInfo {
  name: string;
  address: string;
  activities: string[];
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface Message {
  role: 'user' | 'bot';
  text: string;
}
