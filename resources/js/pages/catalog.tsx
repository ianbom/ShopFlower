import { Head } from '@inertiajs/react';
import {
    ChevronDown,
    Gift,
    Heart,
    Leaf,
    Mail,
    MapPin,
    Menu,
    Phone,
    Search,
    ShoppingBag,
    SlidersHorizontal,
    Sparkles,
    Truck,
    X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

type Product = {
    name: string;
    category: string;
    occasion: string;
    color: string;
    price: number;
    image: string;
    badge?: string;
};

const products: Product[] = [
    {
        name: 'Classic Red Rose Bouquet',
        category: 'Fresh Flowers',
        occasion: 'Anniversary',
        color: 'Red',
        price: 129000,
        badge: 'Best Seller',
        image: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Blush Garden Bouquet',
        category: 'Fresh Flowers',
        occasion: 'Birthday',
        color: 'Pink',
        price: 159000,
        badge: 'Popular',
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Bloom Box - Pastel Love',
        category: 'Flower Boxes',
        occasion: 'Mother’s Day',
        color: 'Blush',
        price: 219000,
        badge: 'New',
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Sunrise Standing Flower',
        category: 'Standing Flowers',
        occasion: 'Congratulations',
        color: 'White',
        price: 299000,
        image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Sympathy Ivory Board',
        category: 'Flower Boards',
        occasion: 'Sympathy',
        color: 'White',
        price: 249000,
        image: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Anniversary Peony Wrap',
        category: 'Fresh Flowers',
        occasion: 'Anniversary',
        color: 'Pink',
        price: 189000,
        image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Preserved Rose Dome',
        category: 'Forever Flowers',
        occasion: 'Gifts',
        color: 'Blush',
        price: 269000,
        image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Celebration Gift Hamper',
        category: 'Hampers',
        occasion: 'Birthday',
        color: 'Champagne',
        price: 329000,
        image: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Personalized Floral Gift',
        category: 'Personalized Gifts',
        occasion: 'Gifts',
        color: 'Champagne',
        price: 149000,
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
];

const categories = [
    'Fresh Flowers',
    'Forever Flowers',
    'Flower Boxes',
    'Hampers',
    'Personalized Gifts',
    'Flower Boards',
    'Standing Flowers',
];

const occasions = [
    'Birthday',
    'Anniversary',
    'Congratulations',
    'Mother’s Day',
    'Sympathy',
    'Gifts',
];

const colors = ['Red', 'Pink', 'White', 'Blush', 'Champagne'];
const container = 'mx-auto w-full max-w-[1440px] px-4';

const filterButtonClass = (isActive: boolean) =>
    [
        'flex min-h-9 items-center gap-2 rounded-lg border px-2.5 text-left text-xs font-bold transition',
        isActive
            ? 'border-[#596B4A]/25 bg-[#EEF3E9] text-[#46563A]'
            : 'border-transparent text-[#5E6258] hover:border-[#596B4A]/20 hover:bg-[#EEF3E9] hover:text-[#46563A]',
    ].join(' ');

const swatches: Record<string, string> = {
    All: 'bg-[#DDE5D5]',
    Red: 'bg-[#B94B47]',
    Pink: 'bg-[#D9A69B]',
    White: 'bg-[#FFFDF8]',
    Blush: 'bg-[#EBC7BD]',
    Champagne: 'bg-[#EAD8BF]',
};

function Logo() {
    return (
        <a
            aria-label="SageBloom home"
            className="inline-flex items-center gap-2.5 text-[28px] leading-none font-[var(--font-heading)] font-medium text-[#596B4A]"
            href="/"
        >
            <span className="grid h-[42px] w-[42px] place-items-center rounded-full text-[#718164]">
                <Leaf size={34} strokeWidth={1.15} />
            </span>
            <span>SageBloom</span>
        </a>
    );
}

function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        maximumFractionDigits: 0,
        style: 'currency',
    }).format(price);
}

export default function Catalog() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [occasion, setOccasion] = useState('All');
    const [color, setColor] = useState('All');
    const [maxPrice, setMaxPrice] = useState(350000);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        ['Home', '/'],
        ['Flowers', '/catalog'],
        ['Occasions', '/#occasions'],
        ['Custom Bouquet', '/#custom-bouquet'],
        ['Contact', '/#contact'],
    ];

    const filteredProducts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return products.filter((product) => {
            const matchesSearch =
                !normalizedQuery ||
                product.name.toLowerCase().includes(normalizedQuery) ||
                product.category.toLowerCase().includes(normalizedQuery) ||
                product.occasion.toLowerCase().includes(normalizedQuery);

            return (
                matchesSearch &&
                (category === 'All' || product.category === category) &&
                (occasion === 'All' || product.occasion === occasion) &&
                (color === 'All' || product.color === color) &&
                product.price <= maxPrice
            );
        });
    }, [category, color, maxPrice, occasion, query]);

    const resetFilters = () => {
        setQuery('');
        setCategory('All');
        setOccasion('All');
        setColor('All');
        setMaxPrice(350000);
    };

    return (
        <>
            <Head title="Catalog Flowers - SageBloom">
                <meta
                    name="description"
                    content="Browse SageBloom flower catalog with search and filters for categories, occasions, colors, and budget."
                />
            </Head>

            <div className="min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_8%_10%,rgba(221,229,213,0.58),transparent_22rem),radial-gradient(circle_at_92%_24%,rgba(235,199,189,0.2),transparent_20rem),#FAF8F2] font-[var(--font-body)] text-[#2F352B]">
                <div className="flex min-h-[34px] items-center justify-center gap-11 overflow-x-auto bg-[#596B4A] px-4 text-xs font-medium whitespace-nowrap text-[#FFFDF8] max-md:justify-start">
                    {[
                        [Truck, 'Same-Day Delivery Available'],
                        [Leaf, 'Fresh Flowers, Handpicked Daily'],
                        [MapPin, 'Delivery Across Major Cities'],
                        [Gift, 'Premium Gifting & Packaging'],
                    ].map(([Icon, text]) => (
                        <span
                            className="inline-flex items-center gap-2"
                            key={text as string}
                        >
                            <Icon size={15} strokeWidth={1.6} />
                            {text as string}
                        </span>
                    ))}
                </div>

                <header className="sticky top-0 z-20 border-b border-[#E9DFD0]/75 bg-[#FFFDF8]/95 shadow-[0_1px_8px_rgba(47,53,43,0.035)] backdrop-blur">
                    <div
                        className={`${container} grid min-h-[76px] grid-cols-[220px_1fr_auto] items-center gap-6 max-[1100px]:grid-cols-[1fr_auto]`}
                    >
                        <Logo />
                        <nav
                            aria-label="Primary navigation"
                            className="flex items-center justify-center gap-6 max-[1100px]:hidden"
                        >
                            {navLinks.map(([label, href]) => (
                                <a
                                    className="text-xs font-semibold text-[#2F352B] transition hover:text-[#596B4A]"
                                    href={href}
                                    key={label}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-3.5">
                            <button
                                aria-label="Search"
                                className="grid h-8 w-8 place-items-center text-[#2F352B] max-md:hidden"
                            >
                                <Search size={22} strokeWidth={1.55} />
                            </button>
                            <button
                                aria-label="Wishlist"
                                className="grid h-8 w-8 place-items-center text-[#2F352B] max-md:hidden"
                            >
                                <Heart size={22} strokeWidth={1.55} />
                            </button>
                            <button
                                aria-label="Cart"
                                className="relative grid h-8 w-8 place-items-center text-[#2F352B] max-md:hidden"
                            >
                                <ShoppingBag size={22} strokeWidth={1.55} />
                                <b className="absolute top-0 right-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#596B4A] text-[8px] text-[#FFFDF8]">
                                    2
                                </b>
                            </button>
                            <a
                                className="inline-flex min-h-[38px] items-center justify-center rounded-[7px] border border-[#596B4A] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#46563A] max-md:hidden"
                                href="#catalog"
                            >
                                Order Now
                            </a>
                            <button
                                aria-label="Open menu"
                                className="hidden h-8 w-8 place-items-center text-[#2F352B] max-[1100px]:grid"
                                onClick={() => setIsMenuOpen(true)}
                                type="button"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-[#2F352B]/35 backdrop-blur-sm min-[1101px]:hidden">
                        <aside className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-[#FFFDF8] p-6 shadow-[0_10px_28px_rgba(47,53,43,0.18)]">
                            <div className="flex items-center justify-between">
                                <Logo />
                                <button
                                    aria-label="Close menu"
                                    className="grid h-9 w-9 place-items-center rounded-full border border-[#E9DFD0] text-[#2F352B]"
                                    onClick={() => setIsMenuOpen(false)}
                                    type="button"
                                >
                                    <X size={20} strokeWidth={1.6} />
                                </button>
                            </div>
                            <nav className="mt-8 grid gap-3">
                                {navLinks.map(([label, href]) => (
                                    <a
                                        className="rounded-xl border border-[#E9DFD0] px-4 py-3 text-sm font-bold text-[#2F352B] transition hover:bg-[#EEF3E9]"
                                        href={href}
                                        key={label}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {label}
                                    </a>
                                ))}
                            </nav>
                            <a
                                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[7px] bg-[#596B4A] px-5 text-sm font-bold text-[#FFFDF8]"
                                href="#catalog"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Order Now
                            </a>
                        </aside>
                    </div>
                )}

                <main>
                    <section className="border-b border-[#E9DFD0]/70 bg-[linear-gradient(90deg,#FAF8F2_0%,#F5F0E7_58%,#EEF3E9_100%)] py-14 md:py-[70px]">
                        <div className={container}>
                            <span className="mb-3 inline-flex text-lg font-[var(--font-heading)] text-[#718164]">
                                Freshly arranged daily
                            </span>
                            <h1 className="text-[46px] leading-[0.98] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B] md:text-[68px]">
                                Flower Catalog
                            </h1>
                            <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#5E6258]">
                                Browse handcrafted bouquets, boards, hampers,
                                and preserved flowers by occasion, color, and
                                budget.
                            </p>
                        </div>
                    </section>

                    <section
                        className={`${container} grid items-start gap-6 py-9 md:gap-[34px] md:py-[58px] lg:grid-cols-[300px_1fr]`}
                        id="catalog"
                    >
                        <aside
                            className="rounded-2xl border border-[#E9DFD0] bg-[#FFFDF8]/90 p-6 shadow-[0_1px_2px_rgba(47,53,43,0.04)] lg:sticky lg:top-[104px]"
                            aria-label="Catalog filters"
                        >
                            <div className="flex items-center gap-2.5 text-[#596B4A]">
                                <SlidersHorizontal
                                    size={18}
                                    strokeWidth={1.6}
                                />
                                <h2 className="text-[27px] leading-none font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                                    Filter Flowers
                                </h2>
                            </div>

                            <label className="relative mt-6 grid gap-2">
                                <span className="text-xs font-extrabold text-[#2F352B]">
                                    Search
                                </span>
                                <Search
                                    className="absolute bottom-[13px] left-[13px] text-[#718164]"
                                    size={17}
                                    strokeWidth={1.6}
                                />
                                <input
                                    className="min-h-11 rounded-[9px] border border-[#E9DFD0] bg-[#FFFDF8] px-3.5 pl-9 text-xs text-[#2F352B] outline-[#718164]"
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    placeholder="Search bouquet, hamper..."
                                    type="search"
                                    value={query}
                                />
                            </label>

                            <div className="mt-6 grid gap-2">
                                <h3 className="text-xs font-extrabold text-[#2F352B]">
                                    Category
                                </h3>
                                {['All', ...categories].map((item) => (
                                    <button
                                        className={filterButtonClass(
                                            category === item,
                                        )}
                                        key={item}
                                        onClick={() => setCategory(item)}
                                        type="button"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div className="relative mt-6 grid gap-2">
                                <h3 className="text-xs font-extrabold text-[#2F352B]">
                                    Occasion
                                </h3>
                                <select
                                    className="min-h-11 appearance-none rounded-[9px] border border-[#E9DFD0] bg-[#FFFDF8] px-3.5 pr-9 text-xs text-[#2F352B] outline-[#718164]"
                                    aria-label="Filter by occasion"
                                    onChange={(event) =>
                                        setOccasion(event.target.value)
                                    }
                                    value={occasion}
                                >
                                    {['All', ...occasions].map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                                <ChevronDown
                                    className="pointer-events-none absolute right-[13px] bottom-3.5 text-[#718164]"
                                    size={16}
                                    strokeWidth={1.6}
                                />
                            </div>

                            <div className="mt-6 grid gap-2">
                                <h3 className="text-xs font-extrabold text-[#2F352B]">
                                    Color Palette
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {['All', ...colors].map((item) => (
                                        <button
                                            className={filterButtonClass(
                                                color === item,
                                            )}
                                            key={item}
                                            onClick={() => setColor(item)}
                                            type="button"
                                        >
                                            <span
                                                className={`h-[11px] w-[11px] rounded-full border border-[#2F352B]/10 ${swatches[item]}`}
                                            />
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <label className="mt-6 grid gap-3">
                                <span className="text-xs font-extrabold text-[#2F352B]">
                                    Budget up to {formatPrice(maxPrice)}
                                </span>
                                <input
                                    className="accent-[#596B4A]"
                                    max="350000"
                                    min="100000"
                                    onChange={(event) =>
                                        setMaxPrice(Number(event.target.value))
                                    }
                                    step="10000"
                                    type="range"
                                    value={maxPrice}
                                />
                            </label>

                            <button
                                className="mt-6 flex min-h-9 w-full items-center justify-center gap-2 rounded-lg border border-[#E9DFD0] bg-[#FFFDF8] px-2.5 text-xs font-bold text-[#5E6258] transition hover:border-[#596B4A]/20 hover:bg-[#EEF3E9] hover:text-[#46563A]"
                                onClick={resetFilters}
                                type="button"
                            >
                                <X size={15} strokeWidth={1.7} />
                                Clear filters
                            </button>
                        </aside>

                        <div className="min-w-0">
                            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E9DFD0] bg-[#FFFDF8]/90 px-6 py-5 shadow-[0_1px_2px_rgba(47,53,43,0.04)] md:flex-row md:items-center">
                                <div>
                                    <h2 className="text-[31px] leading-[1.08] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                                        All Arrangements
                                    </h2>
                                    <p className="mt-1 text-xs text-[#5E6258]">
                                        {filteredProducts.length} curated
                                        products available for delivery.
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE5D5] bg-[#EEF3E9] px-3 py-2 text-xs font-extrabold whitespace-nowrap text-[#46563A]">
                                    <Sparkles size={17} strokeWidth={1.6} />
                                    Handcrafted daily
                                </div>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="mt-6 grid gap-[22px] md:grid-cols-2 xl:grid-cols-3">
                                    {filteredProducts.map((product) => (
                                        <article
                                            className="relative flex min-h-[346px] flex-col rounded-xl border border-[#E9DFD0] bg-[#FFFDF8] p-3 shadow-[0_1px_2px_rgba(47,53,43,0.04)] transition hover:-translate-y-0.5 hover:border-[#596B4A]/30 hover:shadow-[0_4px_12px_rgba(47,53,43,0.06)]"
                                            key={product.name}
                                        >
                                            {product.badge && (
                                                <span className="absolute top-3.5 left-3.5 rounded-full bg-[#EEF3E9] px-2 py-1 text-[9px] font-extrabold text-[#596B4A]">
                                                    {product.badge}
                                                </span>
                                            )}
                                            <button
                                                aria-label={`Add ${product.name} to wishlist`}
                                                className="absolute top-3.5 right-3.5 grid h-7 w-7 place-items-center rounded-full bg-[#FFFDF8]/90 text-[#718164]"
                                            >
                                                <Heart
                                                    size={16}
                                                    strokeWidth={1.55}
                                                />
                                            </button>
                                            <img
                                                alt={product.name}
                                                className="aspect-[1/0.94] w-full rounded-[9px] bg-[#F5F0E7] object-cover"
                                                src={product.image}
                                            />
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <span className="rounded-full bg-[#EEF3E9] px-2 py-1 text-[10px] font-extrabold text-[#718164]">
                                                    {product.category}
                                                </span>
                                                <span className="rounded-full bg-[#EEF3E9] px-2 py-1 text-[10px] font-extrabold text-[#718164]">
                                                    {product.occasion}
                                                </span>
                                            </div>
                                            <h3 className="mt-3 text-xs leading-[1.35] font-semibold text-[#2F352B]">
                                                {product.name}
                                            </h3>
                                            <strong className="mt-1 text-sm text-[#2F352B]">
                                                {formatPrice(product.price)}
                                            </strong>
                                            <button className="mt-auto min-h-[30px] rounded-md bg-[#596B4A] text-[11px] font-bold text-[#FFFDF8] transition hover:bg-[#46563A]">
                                                Order Now
                                            </button>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="mt-6 grid min-h-[390px] place-items-center justify-items-center rounded-2xl border border-[#E9DFD0] bg-[#FFFDF8]/90 p-10 text-center shadow-[0_1px_2px_rgba(47,53,43,0.04)]">
                                    <Leaf
                                        className="text-[#596B4A]"
                                        size={38}
                                        strokeWidth={1.3}
                                    />
                                    <h3 className="mt-3.5 text-[32px] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                                        No flowers match these filters
                                    </h3>
                                    <p className="my-3 max-w-[420px] text-[13px] leading-[1.65] text-[#5E6258]">
                                        Try a softer budget, broader category,
                                        or clear filters to see more
                                        arrangements.
                                    </p>
                                    <button
                                        className="inline-flex min-h-[38px] items-center justify-center rounded-[7px] border border-[#596B4A] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8] transition hover:-translate-y-0.5 hover:border-[#46563A] hover:bg-[#46563A] active:translate-y-px"
                                        onClick={resetFilters}
                                        type="button"
                                    >
                                        Reset Catalog
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                </main>

                <footer className="mt-14 border-t border-[#E9DFD0] bg-[#FFFDF8]/90 py-16 pb-8">
                    <div
                        className={`${container} grid min-h-[190px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(5,1fr)]`}
                    >
                        <div>
                            <Logo />
                            <p className="mt-4 flex items-start gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                Crafting heartfelt floral experiences with
                                premium flowers, thoughtful gifts and
                                exceptional service.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                                Quick Links
                            </h3>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/"
                            >
                                Home
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/catalog"
                            >
                                Flowers
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#occasions"
                            >
                                Occasions
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#custom-bouquet"
                            >
                                Custom Bouquet
                            </a>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                                Customer Service
                            </h3>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#contact"
                            >
                                Help Center
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#contact"
                            >
                                Track Order
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#contact"
                            >
                                Returns & Refunds
                            </a>
                            <a
                                className="mt-2 block text-[11px] text-[#5E6258]"
                                href="/#contact"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                                Contact Us
                            </h3>
                            <p className="mt-2 flex items-start gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                <Phone size={13} /> +91 98765 43210
                            </p>
                            <p className="mt-2 flex items-start gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                <Mail size={13} /> hello@sagebloom.com
                            </p>
                            <p className="mt-2 flex items-start gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                <MapPin size={13} /> Bengaluru, India
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                                We Deliver To
                            </h3>
                            <p className="text-[11px] leading-[1.55] text-[#5E6258]">
                                Bengaluru
                                <br />
                                Mumbai
                                <br />
                                Delhi NCR
                                <br />
                                Hyderabad
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                                Hours
                            </h3>
                            <p className="text-[11px] leading-[1.55] text-[#5E6258]">
                                Mon - Sat: 9:00 AM - 8:00 PM
                                <br />
                                Sun: 10:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                    <p className="mt-10 flex justify-center text-[11px] text-[#8A8C82]">
                        © 2026 SageBloom Florist. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}
