import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

export function buildCloudinaryUrl(publicId: string, options?: { width?: number; quality?: string }) {
    const params: string[] = [];
    if (options?.width) params.push(`w_${options.width}`);
    if (options?.quality) params.push(`q_${options.quality}`);
    const transformation = params.length ? params.join(',') + '/' : '';
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${transformation}${publicId}`;
}
