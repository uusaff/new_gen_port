import { useEffect } from 'react';

export const SEO = ({ title, description }) => {
  useEffect(() => {
    // Set Title
    if (title) {
      document.title = title;
    }

    // Set Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);

  return null;
};
