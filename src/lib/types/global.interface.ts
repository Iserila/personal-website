export interface UseCategory {
    category: string;
    items: UseItem[];
}

interface UseItem {
    name: string;
    description: string;
    icon?: string; // skillicons.dev
    image?: ImageType;
    note?: string;
}

interface ImageType {
    url: string;
    type: 'landscape' | 'portrait' | 'square'
}