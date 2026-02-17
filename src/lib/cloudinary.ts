// Minimal Cloudinary helper (optional)
export function buildCloudinaryUrl(publicId: string, options?: { width?: number; quality?: string }) {
    const params: string[] = [];
    if (options?.width) params.push(`w_${options.width}`);
    if (options?.quality) params.push(`q_${options.quality}`);
    const transformation = params.length ? params.join(',') + '/' : '';
    return `https://res.cloudinary.com/<your-cloud-name>/image/upload/${transformation}${publicId}`;
}
