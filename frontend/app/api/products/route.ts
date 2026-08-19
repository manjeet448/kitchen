import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        images: true
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const product = await prisma.product.create({
      data: {
        categoryId: data.categoryId,
        name: data.name,
        slug: slug,
        sku: data.sku,
        brand: data.brand,
        shortDesc: data.shortDesc,
        description: data.description,
        price: parseFloat(data.price),
        discountPrice: data.discountPrice ? parseFloat(data.discountPrice) : null,
        stock: parseInt(data.stock),
        status: data.status || 'ACTIVE',
        featured: data.featured || false,
        specifications: data.specifications,
        features: data.features,
      }
    });

    if (data.primaryImage) {
      await prisma.productImage.create({
        data: {
          productId: product.id,
          url: data.primaryImage,
          isPrimary: true
        }
      });
    }
    
    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'A product with this slug or SKU already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
