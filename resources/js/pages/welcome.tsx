import { Head, Link } from '@inertiajs/react';
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
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type CardItem = { title: string; subtitle?: string; image: string };
type Product = CardItem & { price: string; badge?: string };

const container = 'mx-auto w-full max-w-[1440px] px-4';
const reveal =
    'reveal translate-y-7 opacity-0 transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100';
const heading =
    'font-[var(--font-heading)] font-normal tracking-[-0.025em] text-[#2F352B]';
const card =
    'rounded-xl border border-[#E9DFD0] bg-[#FFFDF8] shadow-[0_1px_2px_rgba(47,53,43,0.04)]';

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
        price: 'Rp129.000',
        badge: 'Best Seller',
        image: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Graduation Bouquet',
        price: 'Rp159.000',
        badge: 'Popular',
        image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Bloom Box - Pastel Love',
        price: 'Rp219.000',
        badge: 'New',
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Sunrise Standing Flower',
        price: 'Rp299.000',
        image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Sympathy Flower Board',
        price: 'Rp249.000',
        image: 'https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Anniversary Bouquet',
        price: 'Rp189.000',
        image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const occasions: CardItem[] = [
    {
        title: 'Birthday',
        subtitle: 'Make their day extra special.',
        image: image.category1,
    },
    {
        title: 'Anniversary',
        subtitle: 'Celebrate love beautifully.',
        image: image.category3,
    },
    {
        title: 'Congratulations',
        subtitle: 'Cheers to new beginnings.',
        image: image.final,
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
        image: image.category7,
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
    image.hero,
    image.final,
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

function Logo({ href = '#home' }: { href?: string }) {
    return (
        <a
            aria-label="SageBloom home"
            className="inline-flex items-center gap-2.5 text-[28px] leading-none font-[var(--font-heading)] font-medium text-[#596B4A]"
            href={href}
        >
            <span className="grid h-[42px] w-[42px] place-items-center rounded-full text-[#718164]">
                <Leaf size={34} strokeWidth={1.15} />
            </span>
            <span>SageBloom</span>
        </a>
    );
}

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        ['Home', '#home'],
        ['Flowers', '#flowers'],
        ['Gifts', '#flowers'],
        ['Occasions', '#occasions'],
        ['Custom Bouquet', '#custom-bouquet'],
        ['About', '#contact'],
        ['Contact', '#contact'],
    ];

    return (
        <>
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
                        className="flex items-center justify-center gap-6 max-[1100px]:hidden"
                        aria-label="Primary navigation"
                    >
                        {links.map(([item, href]) => (
                            <a
                                className="text-xs font-semibold text-[#2F352B] transition hover:text-[#596B4A]"
                                href={href}
                                key={item}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3.5">
                        {[Search, Heart].map((Icon, index) => (
                            <button
                                aria-label={index === 0 ? 'Search' : 'Wishlist'}
                                className="grid h-8 w-8 place-items-center text-[#2F352B] max-md:hidden"
                                key={index}
                            >
                                <Icon size={22} strokeWidth={1.55} />
                            </button>
                        ))}
                        <button
                            aria-label="Cart"
                            className="relative grid h-8 w-8 place-items-center text-[#2F352B] max-md:hidden"
                        >
                            <ShoppingBag size={22} strokeWidth={1.55} />
                            <b className="absolute top-0 right-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#596B4A] text-[8px] text-[#FFFDF8]">
                                2
                            </b>
                        </button>
                        <Link
                            className="inline-flex min-h-[38px] items-center justify-center rounded-[7px] border border-[#596B4A] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#46563A] max-md:hidden"
                            href={'/catalog'}
                        >
                            Order Now
                        </Link>
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
                            {links.map(([item, href]) => (
                                <a
                                    className="rounded-xl border border-[#E9DFD0] px-4 py-3 text-sm font-bold text-[#2F352B] transition hover:bg-[#EEF3E9]"
                                    href={href}
                                    key={item}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                        <Link
                            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[7px] bg-[#596B4A] px-5 text-sm font-bold text-[#FFFDF8]"
                            href="/catalog"
                        >
                            Order Now
                        </Link>
                    </aside>
                </div>
            )}
        </>
    );
}

function SectionHeader({ title, link }: { title: string; link: string }) {
    return (
        <div className="mb-4 flex items-center justify-between gap-4">
            <h2
                className={`${heading} text-[31px] leading-[1.12] max-md:text-[27px]`}
            >
                {title}
            </h2>
            <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#596B4A] transition hover:text-[#46563A]"
                href="#flowers"
            >
                {link}
                <ChevronRight size={15} strokeWidth={1.6} />
            </a>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <article
            className={`${card} relative flex min-h-[268px] flex-col p-3 transition hover:-translate-y-0.5 hover:border-[#596B4A]/30 hover:shadow-[0_4px_12px_rgba(47,53,43,0.06)]`}
        >
            {product.badge && (
                <span className="absolute top-3.5 left-3.5 rounded-full bg-[#EEF3E9] px-2 py-1 text-[9px] font-extrabold text-[#596B4A]">
                    {product.badge}
                </span>
            )}
            <button
                aria-label={`Add ${product.title} to wishlist`}
                className="absolute top-3.5 right-3.5 grid h-7 w-7 place-items-center rounded-full bg-[#FFFDF8]/90 text-[#718164]"
            >
                <Heart size={16} strokeWidth={1.55} />
            </button>
            <img
                alt={product.title}
                className="aspect-[1/0.94] w-full rounded-[9px] bg-[#F5F0E7] object-cover"
                src={product.image}
            />
            <h3 className="mt-3 text-xs leading-[1.35] font-semibold text-[#2F352B]">
                {product.title}
            </h3>
            <strong className="mt-1 text-sm text-[#2F352B]">
                {product.price}
            </strong>
            <button className="mt-auto min-h-[30px] rounded-md bg-[#596B4A] text-[11px] font-bold text-[#FFFDF8] transition hover:bg-[#46563A]">
                Order Now
            </button>
        </article>
    );
}

function Footer() {
    return (
        <footer
            className={`${reveal} mt-14 border-t border-[#E9DFD0] bg-[#FFFDF8]/90 py-16 pb-8`}
            id="contact"
        >
            <div
                className={`${container} grid min-h-[190px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(5,1fr)]`}
            >
                <div>
                    <Logo />
                    <p className="mt-4 flex items-start gap-2 text-[11px] leading-[1.55] text-[#5E6258]">
                        Crafting heartfelt floral experiences with premium
                        flowers, thoughtful gifts and exceptional service.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 text-xs font-extrabold text-[#2F352B]">
                        Quick Links
                    </h3>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#home"
                    >
                        Home
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#flowers"
                    >
                        Flowers
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#occasions"
                    >
                        Occasions
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#custom-bouquet"
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
                        href="#contact"
                    >
                        Help Center
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#contact"
                    >
                        Track Order
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#contact"
                    >
                        Returns & Refunds
                    </a>
                    <a
                        className="mt-2 block text-[11px] text-[#5E6258]"
                        href="#contact"
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
                        <br />
                        Pune & more cities
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
    );
}

export default function Welcome() {
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('.reveal');
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) =>
                    entry.target.classList.toggle(
                        'is-visible',
                        entry.isIntersecting,
                    ),
                ),
            { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
        );

        sections.forEach((section) => observer.observe(section));

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
            <div
                className="min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_3%_6%,rgba(113,129,100,0.14),transparent_16rem),radial-gradient(circle_at_96%_16%,rgba(221,229,213,0.62),transparent_15rem),#FAF8F2] font-[var(--font-body)] text-[#2F352B]"
                id="home"
            >
                <Header />
                <main>
                    <section
                        className={`${reveal} relative overflow-hidden bg-[linear-gradient(90deg,#FAF8F2_0%,#F5F0E7_54%,#EEF3E9_100%)] before:absolute before:top-9 before:left-[-66px] before:h-[92px] before:w-40 before:rotate-[-30deg] before:rounded-full before:bg-[#596B4A]/20 before:blur-[34px] after:absolute after:right-[-58px] after:bottom-8 after:h-[110px] after:w-[180px] after:rotate-[28deg] after:rounded-full after:bg-[#596B4A]/20 after:blur-[34px]`}
                    >
                        <div
                            className={`${container} grid min-h-[430px] grid-cols-[0.88fr_1.12fr] items-center gap-x-6 py-11 pb-8 max-md:grid-cols-1 max-md:py-11`}
                        >
                            <div className="relative z-[2] pl-4 max-[1100px]:pl-0">
                                <h1
                                    className={`${heading} max-w-[520px] text-[clamp(42px,5vw,62px)] leading-[0.98] max-md:text-[40px]`}
                                >
                                    Flowers for Every Meaningful Moment
                                </h1>
                                <p className="mt-4 max-w-[462px] text-[15px] leading-[1.62] text-[#5E6258]">
                                    Handcrafted bouquets, flower boards, gifts &
                                    hampers delivered with love. Same-day
                                    delivery across major cities.
                                </p>
                                <div className="mt-7 flex gap-4 max-[480px]:flex-col max-[480px]:items-start">
                                    <a
                                        className="inline-flex min-h-[38px] items-center justify-center rounded-[7px] border border-[#596B4A] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#46563A]"
                                        href="#flowers"
                                    >
                                        Shop Flowers
                                    </a>
                                    <a
                                        className="inline-flex min-h-[38px] items-center justify-center rounded-[7px] border border-[#596B4A]/45 bg-[#FFFDF8]/70 px-5 text-xs font-bold text-[#596B4A] transition hover:-translate-y-0.5 hover:bg-[#EEF3E9]"
                                        href="#occasions"
                                    >
                                        Shop by Occasion
                                    </a>
                                </div>
                            </div>
                            <div className="relative min-h-[350px] self-stretch max-md:mt-5 max-md:min-h-[260px]">
                                <img
                                    alt="Large blush and white wrapped flower bouquet"
                                    className="absolute top-0 right-[-72px] h-full w-[min(820px,122%)] object-cover object-center mix-blend-multiply [clip-path:ellipse(62%_52%_at_56%_50%)] max-md:right-auto max-md:left-1/2 max-md:w-[116%] max-md:-translate-x-1/2"
                                    src={image.hero}
                                />
                            </div>
                            <div className="col-span-full mt-1 grid grid-cols-2 gap-5 md:grid-cols-4">
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
                                        className="flex items-center gap-3"
                                        key={title as string}
                                    >
                                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#DDE5D5] bg-[#FFFDF8]/80 text-[#596B4A]">
                                            <Icon
                                                size={21}
                                                strokeWidth={1.45}
                                            />
                                        </span>
                                        <div>
                                            <strong className="block text-xs font-bold">
                                                {title as string}
                                            </strong>
                                            <small className="mt-0.5 block text-[10px] text-[#8A8C82]">
                                                {subtitle as string}
                                            </small>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        className={`${container} ${reveal} py-16 pb-7`}
                        id="flowers"
                    >
                        <SectionHeader
                            title="Shop by Category"
                            link="View All Categories"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                            {categories.map((item) => (
                                <article
                                    className="text-center transition hover:-translate-y-0.5"
                                    key={item.title}
                                >
                                    <img
                                        alt={item.title}
                                        className="aspect-[1/0.92] w-full rounded-xl object-cover"
                                        src={item.image}
                                    />
                                    <h3 className="mt-2.5 text-xs font-semibold">
                                        {item.title}
                                    </h3>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className={`${container} ${reveal} py-16 pb-7`}>
                        <SectionHeader
                            title="Best Sellers"
                            link="View All Products"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.title}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>

                    <section className={`${container} ${reveal}`}>
                        <div
                            className={`${card} my-16 grid gap-5 px-7 py-5 md:grid-cols-2 lg:grid-cols-4`}
                        >
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
                        className={`${container} ${reveal} py-16 pb-7`}
                        id="occasions"
                    >
                        <SectionHeader
                            title="Shop by Occasion"
                            link="Explore All Occasions"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                            {occasions.map((item) => (
                                <article
                                    className={`${card} overflow-hidden text-center transition hover:-translate-y-0.5 hover:border-[#596B4A]/30 hover:shadow-[0_4px_12px_rgba(47,53,43,0.06)]`}
                                    key={item.title}
                                >
                                    <img
                                        alt={item.title}
                                        className="aspect-[1/0.92] w-full object-cover"
                                        src={item.image}
                                    />
                                    <div className="px-2 pb-3">
                                        <h3 className="mt-2.5 text-xs font-semibold">
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

                    <section
                        className={`${container} ${reveal} mt-[70px] min-h-[222px] overflow-hidden rounded-[18px] bg-[linear-gradient(90deg,rgba(238,243,233,0.96)_0%,rgba(245,240,231,0.82)_43%,rgba(245,240,231,0.14)_66%),url('https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-right shadow-[0_4px_12px_rgba(47,53,43,0.06)]`}
                    >
                        <div className="max-w-[440px] px-6 py-9 md:px-12 md:py-10">
                            <span className="text-[17px] font-[var(--font-heading)] text-[#718164]">
                                Timeless Elegance
                            </span>
                            <h2
                                className={`${heading} mt-2 text-[34px] leading-[1.04] md:text-[43px]`}
                            >
                                Luxury Preserved Flowers
                            </h2>
                            <p className="my-3 max-w-[330px] text-[13px] text-[#5E6258]">
                                Long-lasting blooms that stay beautiful, just
                                like your cherished memories.
                            </p>
                            <a
                                className="inline-flex min-h-[38px] items-center rounded-[7px] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8]"
                                href="#flowers"
                            >
                                Explore Collection
                            </a>
                        </div>
                    </section>

                    <section
                        className={`${container} ${reveal} grid gap-5 pt-[70px] pb-8 lg:grid-cols-[0.72fr_2.28fr]`}
                        id="custom-bouquet"
                    >
                        <article className={`${card} rounded-2xl p-6`}>
                            <h2 className={`${heading} text-[28px]`}>
                                Custom Bouquet
                            </h2>
                            <strong className="mb-3 block text-sm">
                                Made Just for You
                            </strong>
                            <p className="mb-4 text-[11px] leading-[1.55] text-[#5E6258]">
                                Tell us your vision and we'll craft a bouquet
                                that perfectly expresses your feelings.
                            </p>
                            <a
                                className="inline-flex min-h-[38px] items-center rounded-[7px] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8]"
                                href="#contact"
                            >
                                Request Custom Bouquet
                            </a>
                        </article>
                        <article
                            className={`${card} relative grid gap-4 rounded-2xl p-6 before:absolute before:top-[45px] before:right-[230px] before:left-[76px] before:hidden before:border-t before:border-dashed before:border-[#D8C9B5] lg:grid-cols-[repeat(4,1fr)_170px] lg:items-end lg:before:block`}
                        >
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
                                <div
                                    className="relative z-[1]"
                                    key={title as string}
                                >
                                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#DDE5D5] bg-[#FFFDF8] text-[#596B4A]">
                                        <Icon size={23} strokeWidth={1.45} />
                                    </span>
                                    <b className="mt-4 block text-[31px] font-[var(--font-heading)] font-normal text-[#718164]">
                                        {index + 1}
                                    </b>
                                    <h3 className="text-xs font-extrabold">
                                        {title as string}
                                    </h3>
                                    <p className="text-[11px] leading-[1.55] text-[#5E6258]">
                                        {text as string}
                                    </p>
                                </div>
                            ))}
                            <img
                                alt="Custom bouquet preview"
                                className="h-[122px] w-[168px] self-center rounded-xl object-cover max-lg:hidden"
                                src={image.final}
                            />
                        </article>
                    </section>

                    <section className={`${container} ${reveal} py-16 pb-7`}>
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

                    <section
                        className={`${container} ${reveal} py-[70px] pb-10`}
                    >
                        <h2 className={`${heading} text-[31px] leading-[1.12]`}>
                            What Our Customers Say
                        </h2>
                        <div className="mt-3.5 grid items-center gap-3 md:grid-cols-[34px_1fr_34px]">
                            <button
                                aria-label="Previous testimonial"
                                className="hidden h-8 w-8 place-items-center rounded-full border border-[#E9DFD0] bg-[#FFFDF8] text-2xl text-[#596B4A] md:grid"
                            >
                                ‹
                            </button>
                            <div className="grid gap-6 md:grid-cols-3">
                                {testimonials.map(([name, city, quote]) => (
                                    <article
                                        className={`${card} p-5`}
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
                                            <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[linear-gradient(135deg,#EBC7BD,#DDE5D5)] font-extrabold">
                                                {name.charAt(0)}
                                            </span>
                                            <strong className="grid text-xs">
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
                                className="hidden h-8 w-8 place-items-center rounded-full border border-[#E9DFD0] bg-[#FFFDF8] text-2xl text-[#596B4A] md:grid"
                            >
                                ›
                            </button>
                        </div>
                    </section>

                    <section
                        className={`${container} ${reveal} ${card} my-[46px] mb-[68px] grid min-h-[250px] gap-8 overflow-hidden rounded-2xl p-6 md:grid-cols-[1fr_330px] md:p-[36px_42px]`}
                    >
                        <div>
                            <h2
                                className={`${heading} text-[31px] leading-[1.12]`}
                            >
                                Frequently Asked Questions
                            </h2>
                            <div className="mt-5 grid gap-x-4 gap-y-2.5 md:grid-cols-2">
                                {faqs.map((faq) => (
                                    <button
                                        className="flex min-h-[52px] items-center justify-between rounded-lg border border-[#E9DFD0] bg-[#FFFDF8] px-4 text-left text-xs font-bold"
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
                            src={image.final}
                        />
                    </section>

                    <section
                        className={`${container} ${reveal} mt-[70px] grid min-h-[170px] items-center gap-5 overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_12%_42%,rgba(235,199,189,0.28),transparent_2rem),linear-gradient(90deg,#EEF3E9,#F5F0E7)] px-6 py-7 md:grid-cols-[0.92fr_1fr_0.9fr] md:px-11 md:py-6`}
                    >
                        <div>
                            <h2
                                className={`${heading} text-[34px] leading-[1.02] md:text-[39px]`}
                            >
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
                                className="inline-flex min-h-[38px] items-center rounded-[7px] bg-[#596B4A] px-5 text-xs font-bold text-[#FFFDF8]"
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
                <Footer />
            </div>
        </>
    );
}
