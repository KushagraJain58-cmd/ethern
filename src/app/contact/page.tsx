import { Mail, MapPin, Phone } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'
import SiteLayout from '@/components/site-layout'

export const metadata = { title: 'Contact Us | Etheerrn' }

const details = [
    { icon: Phone, label: 'Call / WhatsApp', value: '+91 00000 00000' },
    { icon: Mail, label: 'Email', value: 'hello@Etheerrn.com' },
    { icon: MapPin, label: 'Studio', value: 'Add your studio address here' },
]

export default function ContactPage() {
    return (
        <SiteLayout>
            <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <header className="text-center">
                    <h1 className="text-3xl font-light uppercase tracking-[0.18em] text-primary-800 sm:text-5xl">
                        Contact Us
                    </h1>
                    <span className="mx-auto mt-5 block h-px w-20 bg-primary-300" />
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-primary-900/60 sm:text-base">
                        Questions about sizing, custom orders or an existing order? We usually reply
                        within a day.
                    </p>
                </header>

                <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        {details.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4 border border-primary-100 p-5">
                                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" />
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-primary-400">
                                        {label}
                                    </p>
                                    <p className="mt-1 text-sm text-primary-900 sm:text-base">{value}</p>
                                </div>
                            </div>
                        ))}

                        <form className="space-y-4 pt-2">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-primary-200 px-4 py-3 text-sm outline-none focus:border-primary-800"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-primary-200 px-4 py-3 text-sm outline-none focus:border-primary-800"
                            />
                            <textarea
                                rows={5}
                                placeholder="How can we help?"
                                className="w-full border border-primary-200 px-4 py-3 text-sm outline-none focus:border-primary-800"
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary-800 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-primary-900"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* IMAGE PLACEHOLDER — studio / map */}
                    <ImagePlaceholder label="Studio / map" className="min-h-[420px] w-full" />
                </div>
            </main>
        </SiteLayout>
    )
}
