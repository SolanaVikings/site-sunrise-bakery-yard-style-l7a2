// config.js
const SITE_KEY = 'sunrise-bakery-yard-style-l7a2';
const SUPABASE_URL = 'https://xwbgqkbwutjuodzhknhr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Ymdxa2J3dXRqdW9kemhrbmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjAxNTUsImV4cCI6MjA4ODI5NjE1NX0.YLx9GUU52AcJcZfC2Tg9jtrPo4urPa-n-hVvd5YM-O0';

const SCHEMA = [
  { key: 'nav.brand', type: 'text', placeholder: 'Sunrise bakery Yard style' },
  { key: 'hero.headline', type: 'text', placeholder: 'Fresh Jamaican Baked Goods, Made with Love' },
  { key: 'hero.tagline', type: 'text', placeholder: 'Granny\'s recipes brought to life in every bite' },
  { key: 'hero.description', type: 'textarea', placeholder: 'Since 2020, we\'ve been crafting authentic Jamaican baked goods using traditional family recipes passed down through generations.' },
  { key: 'hero.cta', type: 'text', placeholder: 'Order Now' },
  { key: 'services.heading', type: 'text', placeholder: 'Authentic Jamaican Baked Goods' },
  { key: 'service.1.name', type: 'text', placeholder: 'Jamaican Patties' },
  { key: 'service.1.description', type: 'textarea', placeholder: 'Flaky, golden pastries filled with seasoned spiced beef.' },
  { key: 'service.2.name', type: 'text', placeholder: 'Coco Bread' },
  { key: 'service.2.description', type: 'textarea', placeholder: 'Soft, pillowy bread with a touch of coconut sweetness.' },
  { key: 'service.3.name', type: 'text', placeholder: 'Bun and Cheese' },
  { key: 'service.3.description', type: 'textarea', placeholder: 'The perfect marriage of sweet and savory.' },
  { key: 'service.4.name', type: 'text', placeholder: 'Hardoe Bread' },
  { key: 'service.4.description', type: 'textarea', placeholder: 'Dense, hearty bread with deep Caribbean flavors.' },
  { key: 'about.heading', type: 'text', placeholder: 'Granny\'s Legacy Lives On' },
  { key: 'about.description', type: 'textarea', placeholder: 'Sunrise bakery Yard style was born in 2020 with a simple dream: to bring the warmth and authenticity of Jamaican baking to London.' },
  { key: 'about.description2', type: 'textarea', placeholder: 'What started as a family passion has grown into a community treasure.' },
  { key: 'about.quote', type: 'text', placeholder: '"Real food doesn\'t have ingredients, it IS ingredients."' },
  { key: 'contact.heading', type: 'text', placeholder: 'Order Your Fresh Baked Goods Today' },
  { key: 'contact.address', type: 'textarea', placeholder: '123 see street\nLondon' },
  { key: 'contact.email', type: 'text', placeholder: 'solvikings23@gmail.com' },
  { key: 'contact.phone_cta', type: 'text', placeholder: 'Call to Order' },
  { key: 'footer.brand', type: 'text', placeholder: 'Sunrise bakery Yard style' }
];