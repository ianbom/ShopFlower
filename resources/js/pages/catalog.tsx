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
        price: 1299,
        badge: 'Best Seller',
        image: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Blush Garden Bouquet',
        category: 'Fresh Flowers',
        occasion: 'Birthday',
        color: 'Pink',
        price: 1599,
        badge: 'Popular',
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Bloom Box - Pastel Love',
        category: 'Flower Boxes',
        occasion: 'Mother’s Day',
        color: 'Blush',
        price: 2199,
        badge: 'New',
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Sunrise Standing Flower',
        category: 'Standing Flowers',
        occasion: 'Congratulations',
        color: 'White',
        price: 2999,
        image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Sympathy Ivory Board',
        category: 'Flower Boards',
        occasion: 'Sympathy',
        color: 'White',
        price: 2499,
        image: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Anniversary Peony Wrap',
        category: 'Fresh Flowers',
        occasion: 'Anniversary',
        color: 'Pink',
        price: 1899,
        image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Preserved Rose Dome',
        category: 'Forever Flowers',
        occasion: 'Gifts',
        color: 'Blush',
        price: 2699,
        image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Celebration Gift Hamper',
        category: 'Hampers',
        occasion: 'Birthday',
        color: 'Champagne',
        price: 3299,
        image: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=700',
    },
    {
        name: 'Personalized Floral Gift',
        category: 'Personalized Gifts',
        occasion: 'Gifts',
        color: 'Champagne',
        price: 1499,
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

function Logo() {
    return (
        <a aria-label="SageBloom home" className="sb-logo" href="/">
            <span className="sb-logo-mark">
                <Leaf size={34} strokeWidth={1.15} />
            </span>
            <span>SageBloom</span>
        </a>
    );
}

function formatPrice(price: number) {
    return `₹${price.toLocaleString('en-IN')}`;
}

export default function Catalog() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [occasion, setOccasion] = useState('All');
    const [color, setColor] = useState('All');
    const [maxPrice, setMaxPrice] = useState(3500);

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
        setMaxPrice(3500);
    };

    return (
        <>
            <Head title="Catalog Flowers - SageBloom">
                <meta
                    name="description"
                    content="Browse SageBloom flower catalog with search and filters for categories, occasions, colors, and budget."
                />
            </Head>

            <div className="sb-page sb-catalog-page">
                <div className="sb-topbar">
                    {[
                        [Truck, 'Same-Day Delivery Available'],
                        [Leaf, 'Fresh Flowers, Handpicked Daily'],
                        [MapPin, 'Delivery Across Major Cities'],
                        [Gift, 'Premium Gifting & Packaging'],
                    ].map(([Icon, text]) => (
                        <span key={text as string}>
                            <Icon size={15} strokeWidth={1.6} />
                            {text as string}
                        </span>
                    ))}
                </div>

                <header className="sb-navbar">
                    <div className="sb-container sb-nav-inner">
                        <Logo />
                        <nav aria-label="Primary navigation">
                            <a href="/">Home</a>
                            <a href="/catalog">Flowers</a>
                            <a href="/#occasions">Occasions</a>
                            <a href="/#custom-bouquet">Custom Bouquet</a>
                            <a href="/#contact">Contact</a>
                        </nav>
                        <div className="sb-actions">
                            <button aria-label="Search">
                                <Search size={22} strokeWidth={1.55} />
                            </button>
                            <button aria-label="Wishlist">
                                <Heart size={22} strokeWidth={1.55} />
                            </button>
                            <button aria-label="Cart" className="sb-cart">
                                <ShoppingBag size={22} strokeWidth={1.55} />
                                <b>2</b>
                            </button>
                            <a
                                className="sb-btn sb-btn-primary"
                                href="#catalog"
                            >
                                Order Now
                            </a>
                            <button aria-label="Open menu" className="sb-menu">
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </header>

                <main>
                    <section className="sb-catalog-hero">
                        <div className="sb-container">
                            <span>Freshly arranged daily</span>
                            <h1>Flower Catalog</h1>
                            <p>
                                Browse handcrafted bouquets, boards, hampers,
                                and preserved flowers by occasion, color, and
                                budget.
                            </p>
                        </div>
                    </section>

                    <section
                        className="sb-container sb-catalog-layout"
                        id="catalog"
                    >
                        <aside
                            className="sb-catalog-sidebar"
                            aria-label="Catalog filters"
                        >
                            <div className="sb-filter-title">
                                <SlidersHorizontal
                                    size={18}
                                    strokeWidth={1.6}
                                />
                                <h2>Filter Flowers</h2>
                            </div>

                            <label className="sb-filter-search">
                                <span>Search</span>
                                <Search size={17} strokeWidth={1.6} />
                                <input
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    placeholder="Search bouquet, hamper..."
                                    type="search"
                                    value={query}
                                />
                            </label>

                            <div className="sb-filter-block">
                                <h3>Category</h3>
                                {['All', ...categories].map((item) => (
                                    <button
                                        className={
                                            category === item ? 'is-active' : ''
                                        }
                                        key={item}
                                        onClick={() => setCategory(item)}
                                        type="button"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div className="sb-filter-block">
                                <h3>Occasion</h3>
                                <select
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
                                <ChevronDown size={16} strokeWidth={1.6} />
                            </div>

                            <div className="sb-filter-block">
                                <h3>Color Palette</h3>
                                <div className="sb-color-filter">
                                    {['All', ...colors].map((item) => (
                                        <button
                                            className={
                                                color === item
                                                    ? 'is-active'
                                                    : ''
                                            }
                                            key={item}
                                            onClick={() => setColor(item)}
                                            type="button"
                                        >
                                            <span
                                                className={`sb-swatch sb-swatch-${item.toLowerCase().replace('’', '').replace(' ', '-')}`}
                                            />
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <label className="sb-price-filter">
                                <span>
                                    Budget up to {formatPrice(maxPrice)}
                                </span>
                                <input
                                    max="3500"
                                    min="1000"
                                    onChange={(event) =>
                                        setMaxPrice(Number(event.target.value))
                                    }
                                    step="100"
                                    type="range"
                                    value={maxPrice}
                                />
                            </label>

                            <button
                                className="sb-filter-reset"
                                onClick={resetFilters}
                                type="button"
                            >
                                <X size={15} strokeWidth={1.7} />
                                Clear filters
                            </button>
                        </aside>

                        <div className="sb-catalog-content">
                            <div className="sb-catalog-toolbar">
                                <div>
                                    <h2>All Arrangements</h2>
                                    <p>
                                        {filteredProducts.length} curated
                                        products available for delivery.
                                    </p>
                                </div>
                                <div>
                                    <Sparkles size={17} strokeWidth={1.6} />
                                    Handcrafted daily
                                </div>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="sb-catalog-grid">
                                    {filteredProducts.map((product) => (
                                        <article
                                            className="sb-product-card sb-catalog-product"
                                            key={product.name}
                                        >
                                            {product.badge && (
                                                <span className="sb-badge">
                                                    {product.badge}
                                                </span>
                                            )}
                                            <button
                                                aria-label={`Add ${product.name} to wishlist`}
                                                className="sb-wishlist"
                                            >
                                                <Heart
                                                    size={16}
                                                    strokeWidth={1.55}
                                                />
                                            </button>
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                            />
                                            <div className="sb-product-meta">
                                                <span>{product.category}</span>
                                                <span>{product.occasion}</span>
                                            </div>
                                            <h3>{product.name}</h3>
                                            <strong>
                                                {formatPrice(product.price)}
                                            </strong>
                                            <button className="sb-product-btn">
                                                Order Now
                                            </button>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="sb-catalog-empty">
                                    <Leaf size={38} strokeWidth={1.3} />
                                    <h3>No flowers match these filters</h3>
                                    <p>
                                        Try a softer budget, broader category,
                                        or clear filters to see more
                                        arrangements.
                                    </p>
                                    <button
                                        className="sb-btn sb-btn-primary"
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

                <footer className="sb-footer">
                    <div className="sb-container sb-footer-grid">
                        <div>
                            <Logo />
                            <p>
                                Crafting heartfelt floral experiences with
                                premium flowers, thoughtful gifts and
                                exceptional service.
                            </p>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <a href="/">Home</a>
                            <a href="/catalog">Flowers</a>
                            <a href="/#occasions">Occasions</a>
                            <a href="/#custom-bouquet">Custom Bouquet</a>
                        </div>
                        <div>
                            <h3>Customer Service</h3>
                            <a href="/#contact">Help Center</a>
                            <a href="/#contact">Track Order</a>
                            <a href="/#contact">Returns & Refunds</a>
                            <a href="/#contact">Privacy Policy</a>
                        </div>
                        <div>
                            <h3>Contact Us</h3>
                            <p>
                                <Phone size={13} /> +91 98765 43210
                            </p>
                            <p>
                                <Mail size={13} /> hello@sagebloom.com
                            </p>
                            <p>
                                <MapPin size={13} /> Bengaluru, India
                            </p>
                        </div>
                        <div>
                            <h3>We Deliver To</h3>
                            <p>
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
                            <h3>Hours</h3>
                            <p>
                                Mon - Sat: 9:00 AM - 8:00 PM
                                <br />
                                Sun: 10:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                    <p className="sb-copy">
                        © 2026 SageBloom Florist. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}
