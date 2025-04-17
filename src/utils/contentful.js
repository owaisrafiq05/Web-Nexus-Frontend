import { createClient } from 'contentful';

// Create a Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '9djm3xjueo16',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'dpSyxtiUQtyW1yoOX2ruTuMeiYLfmAtZ7zcABAdkoXU',
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

// Fetch FAQs from Contentful
export const fetchFAQs = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'faq', // Assuming 'faq' is the content type ID in Contentful
    });
    
    return entries.items.map(item => ({
      id: item.sys.id,
      question: item.fields.question || 'Question not available',
      answer: item.fields.answer || 'Answer not available',
    }));
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
};

// Fetch all blogs from Contentful
export const fetchBlogs = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogs',
      order: '-sys.createdAt', // Order by newest first
    });
    
    return entries.items.map(item => ({
      id: item.sys.id,
      slug: item.sys.id, // Using ID as slug for now
      title: item.fields.blogName,
      description: item.fields.blogDescription,
      image: item.fields.blogImage?.fields?.file?.url 
        ? `https:${item.fields.blogImage.fields.file.url}` 
        : '/placeholder.svg',
      createdAt: item.sys.createdAt,
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Fetch a single blog by ID
export const fetchBlogById = async (id) => {
  try {
    const entry = await client.getEntry(id);
    
    if (!entry) {
      return null;
    }
    
    return {
      id: entry.sys.id,
      slug: entry.sys.id,
      title: entry.fields.blogName,
      description: entry.fields.blogDescription,
      image: entry.fields.blogImage?.fields?.file?.url 
        ? `https:${entry.fields.blogImage.fields.file.url}` 
        : '/placeholder.svg',
      createdAt: entry.sys.createdAt,
    };
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return null;
  }
}; 