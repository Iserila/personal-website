import type { UseCategory } from "$lib/types/global.interface";

export default [
    {
        category: 'Development',
        items: [
            { name: 'SvelteKit', description: 'Frontend framework', icon: 'svelte' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: 'tailwind' },
            { name: 'PocketBase', description: 'Lightweight backend & database', icon: 'sqlite' },
            { name: 'pnpm', description: 'Fast package manager', icon: 'pnpm' },
            { name: 'Node.js', description: 'JavaScript runtime', icon: 'nodejs' },
            { name: 'Prisma', description: 'Node.js and TypeScript ORM for SQL databases', icon: 'prisma' },
            { name: 'SQL (MySQL / PostgreSQL)', description: 'Relational databases', icon: 'mysql' },
        ],
    },
    {
        category: 'Editor & Tools',
        items: [
            { name: 'VS Code', description: 'Code editor of choice', icon: 'vscode', 'note': 'Zen Nightly for Windows is out, gonna give it a shot!' },
            { name: 'Obsidian', description: 'Markdown-based knowledge management', icon: 'obsidian' },
            { name: 'Docker', description: 'Containerization (still learning to add it to my own programs 😅)', icon: 'docker', note: 'Hosting stuff people made with Docker is easy. Making things with Docker in mind is what I struggle with a bit.' },
            { name: 'Git & GitHub', description: 'Version control & back-up for my code', icon: 'github' },
        ],
    },
    {
        category: 'Hardware',
        items: [
            { name: 'Dell Precision 3571', description: 'Main school & dev laptop', image: { url: '/uses/laptop.png' } },
            { name: 'Logitech G305', description: 'Wireless gaming mouse', image: { url: '/uses/mouse.png', type: 'square' } },
            { name: 'NuPhy Halo 75 v2', description: 'Mechanical keyboard', image: { url: '/uses/keyboard.png', type: 'square' } },
            { name: 'Bambu Lab A1', description: '3D printer', image: { url: '/uses/3d-printer.jpg', type: 'portrait' } },
        ],
    },
    {
        category: 'Audio & Media',
        items: [
            { name: 'MusicBee', description: 'Music management & playback software', image: { url: '/uses/musicbee.png' }, note: 'It\'s the one app that makes managing a local music library managable.' },
            { name: 'Calibre', description: 'E-book management & metadata editor', image: { url: '/uses/calibre.png' }, note: 'Lets me manage my ebook collection and send stuff straight to my Kobo.' },
            { name: 'HiBy R3 II', description: 'Digital Audio Player (DAP)', image: { url: '/uses/dap.jpg', type: 'portrait' } },
            { name: 'Salnotes 7Hz x Crinacle ZERO:2', description: 'In-ear monitors', image: { url: '/uses/iem.jpg', type: 'portrait' }, note: 'I have more, but as of now these are my favorites. Also, yes, my DAP is in this picture too.' },
            { name: 'Kobo Clara 2 BW', description: 'E-reader for books', image: { url: '/uses/e-reader.jpg', type: 'portrait' } },
        ],
    },
] as UseCategory[];