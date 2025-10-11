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
	type: 'landscape' | 'portrait' | 'square';
}

export interface GraveyardProject {
	title: string;
	description: string;
	type: 'website' | 'bot' | 'other';
	tags: string[];
	image?: {
		type: 'landscape' | 'portrait' | 'square';
		url: string;
	};
	killed?: boolean;
	groupSize?: number;
}

export interface Share {
	title: string;
	description: string;
	url: string;
	type: 'youtube' | 'link';
}
