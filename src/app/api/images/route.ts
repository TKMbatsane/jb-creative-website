import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const prefix = searchParams.get('prefix') || '';

        // Fetch images from Cloudinary
        const fetchParams: any = {
            type: 'upload',
            max_results: 12,
            resource_type: 'image',
        };

        // Only add prefix if provided
        if (prefix) {
            fetchParams.prefix = prefix;
        }

        const result = await cloudinary.api.resources(fetchParams);

        // Transform the response to match the expected format
        const images = result.resources.map((resource: any, index: number) => ({
            src: resource.secure_url,
            alt: `Gallery image ${index + 1}`,
            publicId: resource.public_id,
        }));

        return NextResponse.json({
            success: true,
            count: images.length,
            images,
            prefix: prefix || 'none',
        });
    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch images',
            },
            { status: 500 }
        );
    }
}