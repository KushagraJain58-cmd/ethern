import { Globe, Truck, CreditCard, Headphones, Shield } from 'lucide-react'
import Reveal from '@/components/reveal'

interface Service {
    icon: React.ComponentType<{ className?: string }>
    title: string
    subtitle: string
    description: string
}

const services: Service[] = [
    {
        icon: Globe,
        title: 'Worldwide',
        subtitle: 'Delivery',
        description: 'We ship to over 100 countries worldwide.',
    },
    {
        icon: Truck,
        title: 'Free',
        subtitle: 'Shipping',
        description: 'Complimentary shipping on orders over ₹2,000.',
    },
    {
        icon: CreditCard,
        title: 'Cash On',
        subtitle: 'Delivery',
        description: 'Pay when your order reaches your door.',
    },
    {
        icon: Headphones,
        title: 'Easy Customer',
        subtitle: 'Support',
        description: 'Reach us any day on call or WhatsApp.',
    },
    {
        icon: Shield,
        title: 'Secure',
        subtitle: 'Payments',
        description: 'Safe, encrypted and hassle-free checkout.',
    },
]

const Services: React.FC = () => (
    <section className="border-t border-primary-100 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-px bg-primary-100 sm:grid-cols-2 lg:grid-cols-5">
                {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                        <Reveal key={service.title} delay={index * 110} className="h-full">
                            <div className="group relative h-full overflow-hidden bg-white p-7 transition-colors duration-500">
                                <div className="absolute inset-0 translate-y-full bg-primary-800 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-y-0" />

                                <div className="relative">
                                    <span className="absolute right-0 top-0 font-mono text-[11px] text-primary-300 transition-colors duration-500 group-hover:text-white/50">
                                        0{index + 1}
                                    </span>
                                    <IconComponent className="mb-6 h-7 w-7 text-primary-800 transition-colors duration-500 group-hover:text-white" />
                                    <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.15em] text-primary-900 transition-colors duration-500 group-hover:text-white">
                                        {service.title}
                                        <br />
                                        {service.subtitle}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-primary-900/60 transition-colors duration-500 group-hover:text-white/80">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    </section>
)

export default Services
