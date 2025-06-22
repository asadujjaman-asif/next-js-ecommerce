type Review = {
    id: number;
    product_id: number;
    rating: number;
    comment: string;
    reviewerEmail?: string; 
    reviewer_name: string;
    reviewer_email: string;
    reviewed_at: string;
};

type MultiImage = {
    id: number;
    product_id: number;
    image_url: string;
};

export type Product = {
    id: number;
    title: string;
    description: string;
    category_id: number;
    brand_id: number;
    price: number;
    discount_percentage: number;
    rating: number;
    stock: number;
    weight: number;
    width: number;
    height: number;
    depth: number;
    warranty_information: string;
    shipping_information: string;
    availability_status: string;
    return_policy: string;
    minimum_order_quantity: number;
    sku: string;
    barcode: string;
    qr_code: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
    category: {
        id: number;
        name: string;
        slug: string;
    };
    reviews: Review[];
    multi_image: MultiImage[];
};

export type ProductApiResponse = {
    success: boolean;
    message: string;
    data: Product[]; 
    pagination: {
        current_page: number;
        next_page: number | null; 
        next_page_url: string | null;
        prev_page_url: string | null;
        last_page: number;
        per_page: number;
        total: number;
    };
};
