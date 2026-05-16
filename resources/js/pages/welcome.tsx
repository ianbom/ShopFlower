import { Head } from '@inertiajs/react';
import {
    CalendarDays,
    ChevronRight,
    Gift,
    Heart,
    Leaf,
    Mail,
    MapPin,
    Menu,
    PackageCheck,
    Phone,
    Search,
    ShoppingBag,
    Sparkles,
    Star,
    Truck,
    Trophy,
    WalletCards,
} from 'lucide-react';
import { useEffect } from 'react';

type CardItem = {
    title: string;
    subtitle?: string;
    image: string;
};

type Product = CardItem & {
    price: string;
    badge?: string;
};

const image = {
    hero: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1400',
    category1:
        'https://images.pexels.com/photos/931167/pexels-photo-931167.jpeg?auto=compress&cs=tinysrgb&w=600',
    category2:
        'https://images.pexels.com/photos/2111192/pexels-photo-2111192.jpeg?auto=compress&cs=tinysrgb&w=600',
    category3:
        'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    category4:
        'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600',
    category5:
        'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600',
    category6:
        'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=600',
    category7:
        'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=600',
    category8:
        'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
    promo: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1600',
    final: 'https://images.pexels.com/photos/931170/pexels-photo-931170.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const categories: CardItem[] = [
    { title: 'Fresh Flowers', image: image.category1 },
    { title: 'Forever Flowers', image: image.category2 },
    { title: 'Flower Boxes', image: image.category3 },
    { title: 'Hampers', image: image.category4 },
    { title: 'Personalized Gifts', image: image.category5 },
    { title: 'Flower Boards', image: image.category6 },
    { title: 'Standing Flowers', image: image.category7 },
    { title: 'Cakes & Gifts', image: image.category8 },
];

const products: Product[] = [
    {
        title: 'Classic Red Rose Bouquet',
        price: '₹1,299',
        badge: 'Best Seller',
        image: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Graduation Bouquet',
        price: '₹1,599',
        badge: 'Popular',
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Bloom Box - Pastel Love',
        price: '₹2,199',
        badge: 'New',
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Sunrise Standing Flower',
        price: '₹2,999',
        image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Sympathy Flower Board',
        price: '₹2,499',
        image: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Anniversary Bouquet',
        price: '₹1,899',
        image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const occasions: CardItem[] = [
    {
        title: 'Birthday',
        subtitle: 'Make their day extra special.',
        image: 'https://images.pexels.com/photos/931167/pexels-photo-931167.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Anniversary',
        subtitle: 'Celebrate love beautifully.',
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Congratulations',
        subtitle: 'Cheers to new beginnings.',
        image: 'https://images.pexels.com/photos/931170/pexels-photo-931170.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Graduation',
        subtitle: 'Proud moments deserve flowers.',
        image: 'https://images.pexels.com/photos/112396/pexels-photo-112396.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Wedding',
        subtitle: 'For your big day & beyond.',
        image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Newborn',
        subtitle: 'Welcome little blessings.',
        image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Sympathy',
        subtitle: 'Thoughts & prayers with flowers.',
        image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: "Mother's Day",
        subtitle: 'Thank her for everything.',
        image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const gallery = [
    'https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/931170/pexels-photo-931170.jpeg?auto=compress&cs=tinysrgb&w=700',
];

const testimonials = [
    [
        'Neha Sharma',
        'Mumbai',
        'The bouquet was absolutely stunning and delivered right on time. SageBloom never disappoints.',
    ],
    [
        'Arjun Mehta',
        'Bengaluru',
        'Beautiful flowers, premium packaging and excellent customer service. Highly recommended.',
    ],
    [
        'Priya Iyer',
        'Hyderabad',
        'I ordered a custom bouquet for my mom and it was beyond perfect. She loved it.',
    ],
];

const faqs = [
    'Do you offer custom bouquets?',
    'Do you provide greeting cards?',
    'Do you offer same-day delivery?',
    'How can I place an order?',
    'Which cities do you deliver to?',
    'Do you have gifts and hampers?',
];

function SectionHeader({ title, link }: { title: string; link: string }) {
    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[31px] leading-[1.12] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                {title}
            </h2>
            <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#596B4A] transition-colors hover:text-[#46563A]"
                href="#flowers"
            >
                {link}
                <ChevronRight size={15} strokeWidth={1.6} />
            </a>
        </div>
    );
}

function Logo() {
    return (
        <a aria-label="SageBloom home" className="sb-logo" href="#home">
            <span className="sb-logo-mark">
                <Leaf size={34} strokeWidth={1.15} />
            </span>
            <span>SageBloom</span>
        </a>
    );
}

export default function Welcome() {
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('.sb-reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        'sb-in-view',
                        entry.isIntersecting,
                    );
                });
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
        );

        sections.forEach((section, index) => {
            section.style.setProperty('--reveal-delay', `${index * 55}ms`);
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head title="SageBloom Florist">
                <meta
                    name="description"
                    content="Premium handcrafted bouquets, flower boards, gifts and hampers delivered across major cities."
                />
            </Head>

            <div className="sb-page" id="home">
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
                            {[
                                'Home',
                                'Flowers',
                                'Gifts',
                                'Occasions',
                                'Custom Bouquet',
                                'About',
                                'Contact',
                            ].map((item) => (
                                <a
                                    href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                                    key={item}
                                >
                                    {item}
                                </a>
                            ))}
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
                                href="#flowers"
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
                    <section className="sb-hero sb-reveal">
                        <div className="sb-container sb-hero-grid">
                            <div className="sb-hero-copy">
                                <h1>Flowers for Every Meaningful Moment</h1>
                                <p>
                                    Handcrafted bouquets, flower boards, gifts &
                                    hampers delivered with love. Same-day
                                    delivery across major cities.
                                </p>
                                <div className="sb-hero-ctas">
                                    <a
                                        className="sb-btn sb-btn-primary"
                                        href="#flowers"
                                    >
                                        Shop Flowers
                                    </a>
                                    <a
                                        className="sb-btn sb-btn-secondary"
                                        href="#occasions"
                                    >
                                        Shop by Occasion
                                    </a>
                                </div>
                            </div>
                            <div className="sb-hero-media">
                                <img
                                    alt="Large blush and white wrapped flower bouquet"
                                    src={image.hero}
                                />
                            </div>
                            <div className="sb-feature-row">
                                {[
                                    [Leaf, 'Fresh Flowers', 'Handpicked Daily'],
                                    [
                                        Truck,
                                        'Same-Day Delivery',
                                        'Across Major Cities',
                                    ],
                                    [Gift, 'Curated Gifts', 'For Every Moment'],
                                    [Heart, 'Handcrafted', 'With Love & Care'],
                                ].map(([Icon, title, subtitle]) => (
                                    <article
                                        className="sb-feature"
                                        key={title as string}
                                    >
                                        <span>
                                            <Icon
                                                size={21}
                                                strokeWidth={1.45}
                                            />
                                        </span>
                                        <div>
                                            <strong>{title as string}</strong>
                                            <small>{subtitle as string}</small>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        className="sb-container sb-section sb-reveal"
                        id="flowers"
                    >
                        <SectionHeader
                            title="Shop by Category"
                            link="View All Categories"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                            {categories.map((item) => (
                                <article
                                    className="text-center transition-transform hover:-translate-y-0.5"
                                    key={item.title}
                                >
                                    <img
                                        alt={item.title}
                                        className="aspect-[1/0.92] w-full rounded-xl object-cover"
                                        src={item.image}
                                    />
                                    <h3 className="mt-2.5 text-xs font-semibold text-[#2F352B]">
                                        {item.title}
                                    </h3>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="sb-container sb-section sb-reveal">
                        <SectionHeader
                            title="Best Sellers"
                            link="View All Products"
                        />
                        <div className="sb-product-grid">
                            {products.map((product) => (
                                <article
                                    className="sb-product-card"
                                    key={product.title}
                                >
                                    {product.badge && (
                                        <span className="sb-badge">
                                            {product.badge}
                                        </span>
                                    )}
                                    <button
                                        aria-label={`Add ${product.title} to wishlist`}
                                        className="sb-wishlist"
                                    >
                                        <Heart size={16} strokeWidth={1.55} />
                                    </button>
                                    <img
                                        alt={product.title}
                                        src={product.image}
                                    />
                                    <h3>{product.title}</h3>
                                    <strong>{product.price}</strong>
                                    <button className="sb-product-btn">
                                        Order Now
                                    </button>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="sb-container sb-reveal">
                        <div className="my-[66px] grid rounded-[14px] border border-[#E9DFD0] bg-[#FFFDF8] px-7 py-5 shadow-[0_1px_2px_rgba(47,53,43,0.04)] md:grid-cols-2 lg:grid-cols-4">
                            {[
                                [
                                    Trophy,
                                    'Leading Flower & Gifting Brand',
                                    'Trusted by thousands of happy customers.',
                                ],
                                [
                                    Leaf,
                                    'Best Quality Arrangements',
                                    'Fresh, premium blooms arranged by experts.',
                                ],
                                [
                                    Gift,
                                    'Wide Product Selection',
                                    'Bouquets, gifts, hampers & more for every occasion.',
                                ],
                                [
                                    Truck,
                                    'Same-Day Delivery Available',
                                    'Timely delivery to make every moment special.',
                                ],
                            ].map(([Icon, title, text], index) => (
                                <article
                                    className={`flex gap-4 px-3 text-[#596B4A] ${index > 0 ? 'lg:border-l lg:border-[#E9DFD0]' : ''}`}
                                    key={title as string}
                                >
                                    <Icon size={37} strokeWidth={1.35} />
                                    <div>
                                        <h3 className="text-[13px] font-bold text-[#2F352B]">
                                            {title as string}
                                        </h3>
                                        <p className="text-[11px] leading-[1.55] text-[#5E6258]">
                                            {text as string}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section
                        className="sb-container sb-section sb-reveal"
                        id="occasions"
                    >
                        <SectionHeader
                            title="Shop by Occasion"
                            link="Explore All Occasions"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                            {occasions.map((item) => (
                                <article
                                    className="overflow-hidden rounded-xl border border-[#E9DFD0] bg-[#FFFDF8] text-center shadow-[0_1px_2px_rgba(47,53,43,0.04)] transition hover:-translate-y-0.5 hover:border-[#596B4A]/30 hover:shadow-[0_4px_12px_rgba(47,53,43,0.06)]"
                                    key={item.title}
                                >
                                    <img
                                        alt={item.title}
                                        className="aspect-[1/0.92] w-full object-cover"
                                        src={item.image}
                                    />
                                    <div className="px-2 pb-3">
                                        <h3 className="mt-2.5 text-xs font-semibold text-[#2F352B]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] leading-[1.55] text-[#5E6258]">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="sb-container sb-promo sb-reveal">
                        <div>
                            <span>Timeless Elegance</span>
                            <h2>Luxury Preserved Flowers</h2>
                            <p>
                                Long-lasting blooms that stay beautiful, just
                                like your cherished memories.
                            </p>
                            <a
                                className="sb-btn sb-btn-primary"
                                href="#flowers"
                            >
                                Explore Collection
                            </a>
                        </div>
                    </section>

                    <section
                        className="sb-container sb-custom sb-reveal"
                        id="custom-bouquet"
                    >
                        <article className="sb-custom-intro">
                            <h2>Custom Bouquet</h2>
                            <strong>Made Just for You</strong>
                            <p>
                                Tell us your vision and we'll craft a bouquet
                                that perfectly expresses your feelings.
                            </p>
                            <a
                                className="sb-btn sb-btn-primary"
                                href="#contact"
                            >
                                Request Custom Bouquet
                            </a>
                        </article>
                        <article className="sb-process">
                            {[
                                [
                                    CalendarDays,
                                    'Choose Occasion',
                                    'Tell us the moment and purpose.',
                                ],
                                [
                                    Sparkles,
                                    'Share Style',
                                    'Share your preferred flowers & style.',
                                ],
                                [
                                    WalletCards,
                                    'Set Budget',
                                    'Let us know your comfortable budget.',
                                ],
                                [
                                    Truck,
                                    'We Arrange & Deliver',
                                    'We craft with love & deliver on time.',
                                ],
                            ].map(([Icon, title, text], index) => (
                                <div className="sb-step" key={title as string}>
                                    <span>
                                        <Icon size={23} strokeWidth={1.45} />
                                    </span>
                                    <b>{index + 1}</b>
                                    <h3>{title as string}</h3>
                                    <p>{text as string}</p>
                                </div>
                            ))}
                            <img
                                alt="Custom bouquet preview"
                                src={image.final}
                            />
                        </article>
                    </section>

                    <section className="sb-container sb-section sb-reveal">
                        <SectionHeader
                            title="Floral Inspiration"
                            link="View Full Gallery"
                        />
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                            {gallery.map((src, index) => (
                                <img
                                    alt={`Floral inspiration ${index + 1}`}
                                    className="aspect-[1.35/1] w-full rounded-[10px] object-cover shadow-[0_1px_2px_rgba(47,53,43,0.04)]"
                                    key={src}
                                    src={src}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="sb-container sb-reveal py-[70px] pb-10">
                        <h2 className="text-[31px] leading-[1.12] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                            What Our Customers Say
                        </h2>
                        <div className="mt-3.5 grid items-center gap-3 md:grid-cols-[34px_1fr_34px]">
                            <button
                                aria-label="Previous testimonial"
                                className="hidden h-8 w-8 place-items-center rounded-full border border-[#E9DFD0] bg-[#FFFDF8] text-2xl leading-none text-[#596B4A] md:grid"
                            >
                                ‹
                            </button>
                            <div className="grid gap-6 md:grid-cols-3">
                                {testimonials.map(([name, city, quote]) => (
                                    <article
                                        className="rounded-[14px] border border-[#E9DFD0] bg-[#FFFDF8] p-5 shadow-[0_1px_2px_rgba(47,53,43,0.04)]"
                                        key={name}
                                    >
                                        <div className="flex gap-[3px] text-[#C8A35D]">
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                    <Star
                                                        fill="currentColor"
                                                        key={i}
                                                        size={12}
                                                        strokeWidth={1.2}
                                                    />
                                                ),
                                            )}
                                        </div>
                                        <p className="my-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                            "{quote}"
                                        </p>
                                        <div className="flex items-center gap-2.5">
                                            <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[linear-gradient(135deg,#EBC7BD,#DDE5D5)] font-extrabold text-[#2F352B]">
                                                {name.charAt(0)}
                                            </span>
                                            <strong className="grid text-xs text-[#2F352B]">
                                                {name}
                                                <small className="text-[10px] font-medium text-[#8A8C82]">
                                                    {city}
                                                </small>
                                            </strong>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <button
                                aria-label="Next testimonial"
                                className="hidden h-8 w-8 place-items-center rounded-full border border-[#E9DFD0] bg-[#FFFDF8] text-2xl leading-none text-[#596B4A] md:grid"
                            >
                                ›
                            </button>
                        </div>
                    </section>

                    <section className="sb-container sb-reveal my-[46px] mb-[68px] grid min-h-[250px] gap-8 overflow-hidden rounded-2xl border border-[#E9DFD0] bg-[#FFFDF8] p-6 shadow-[0_1px_2px_rgba(47,53,43,0.04)] md:grid-cols-[1fr_330px] md:p-[36px_42px]">
                        <div>
                            <h2 className="text-[31px] leading-[1.12] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]">
                                Frequently Asked Questions
                            </h2>
                            <div className="mt-5 grid gap-x-4 gap-y-2.5 md:grid-cols-2">
                                {faqs.map((faq) => (
                                    <button
                                        className="flex min-h-[52px] items-center justify-between rounded-lg border border-[#E9DFD0] bg-[#FFFDF8] px-4 text-left text-xs font-bold text-[#2F352B]"
                                        key={faq}
                                    >
                                        {faq}
                                        <span>+</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <img
                            alt="White floral arrangement"
                            className="h-60 w-full self-center rounded-[14px] object-cover md:h-[220px]"
                            src="https://images.pexels.com/photos/931170/pexels-photo-931170.jpeg?auto=compress&cs=tinysrgb&w=900"
                        />
                    </section>

                    <section className="sb-container sb-reveal mt-[70px] grid min-h-[170px] items-center gap-5 overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_12%_42%,rgba(235,199,189,0.28),transparent_2rem),linear-gradient(90deg,#EEF3E9,#F5F0E7)] px-6 py-7 md:grid-cols-[0.92fr_1fr_0.9fr] md:px-11 md:py-6">
                        <div>
                            <h2 className="text-[34px] leading-[1.02] font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B] md:text-[39px]">
                                Make Every Moment Bloom
                            </h2>
                            <p className="flex items-center gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                                From everyday smiles to life's biggest
                                celebrations, we're here to deliver happiness.
                            </p>
                        </div>
                        <img
                            alt="Soft bouquet arrangement"
                            className="h-[150px] w-full object-cover mix-blend-multiply [clip-path:ellipse(48%_45%_at_50%_52%)]"
                            src={image.final}
                        />
                        <div className="grid gap-6 md:justify-items-end">
                            <a
                                className="sb-btn sb-btn-primary"
                                href="#flowers"
                            >
                                Order Flowers Now
                            </a>
                            <p className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#718164] md:justify-end">
                                <Leaf size={15} /> Fresh & Handpicked{' '}
                                <Truck size={15} /> On-Time Delivery{' '}
                                <PackageCheck size={15} /> Beautifully Packaged
                            </p>
                        </div>
                    </section>
                </main>

                <footer className="sb-footer sb-reveal" id="contact">
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
                            <a href="#home">Home</a>
                            <a href="#flowers">Flowers</a>
                            <a href="#occasions">Occasions</a>
                            <a href="#custom-bouquet">Custom Bouquet</a>
                        </div>
                        <div>
                            <h3>Customer Service</h3>
                            <a href="#contact">Help Center</a>
                            <a href="#contact">Track Order</a>
                            <a href="#contact">Returns & Refunds</a>
                            <a href="#contact">Privacy Policy</a>
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
                                <br />
                                Pune & more cities
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
