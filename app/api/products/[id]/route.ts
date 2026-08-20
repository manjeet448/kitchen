import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        categoryId: data.categoryId,
        name: data.name,
        slug: data.slug,
        sku: data.sku,
        brand: data.brand,
        shortDesc: data.shortDesc,
        description: data.description,
        price: parseFloat(data.price),
        discountPrice: data.discountPrice ? parseFloat(data.discountPrice) : null,
        stock: parseInt(data.stock),
        status: data.status,
        featured: data.featured,
        specifications: data.specifications,
        features: data.features,
      }
    });

    if (data.primaryImage) {
      await prisma.productImage.deleteMany({
        where: { productId: params.id, isPrimary: true }
      });
      await prisma.productImage.create({
        data: {
          productId: params.id,
          url: data.primaryImage,
          isPrimary: true
        }
      });
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.product.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
