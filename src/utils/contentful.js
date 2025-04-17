import { createClient } from 'contentful';

// Create a Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '9djm3xjueo16',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'your-access-token-here',
});

// Fetch testimonials from Contentful
export const fetchTestimonials = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'testimonials',
    });
    
    return entries.items.map(item => ({
      id: item.sys.id,
      name: item.fields.clientName,
      image: item.fields.clientImage?.fields?.file?.url 
        ? `https:${item.fields.clientImage.fields.file.url}` 
        : '/placeholder.svg',
      rating: item.fields.rating || 5,
      quality: 'Client Testimonial', // Default quality text
      text: item.fields.testimonialDescription || '',
      dark: Math.random() > 0.5, // Randomly assign dark theme to some testimonials
    }));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}; 