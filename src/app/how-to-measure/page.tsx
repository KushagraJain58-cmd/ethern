import ImagePlaceholder from '@/components/image-placeholder'
import SiteLayout from '@/components/site-layout'

export const metadata = { title: 'How To Measure Yourself | Etheerrn' }

const steps = [
    { name: 'Bust', note: 'Measure around the fullest part, tape level all the way round.' },
    { name: 'Waist', note: 'The narrowest point of your natural waist — keep one finger of ease.' },
    { name: 'Hip', note: 'Around the fullest part of the hip, roughly 20 cm below the waist.' },
    { name: 'Shoulder', note: 'Across the back, from one shoulder seam point to the other.' },
    { name: 'Sleeve Length', note: 'From the shoulder point down to where you want the sleeve to end.' },
    { name: 'Full Length', note: 'From the shoulder point to the desired hem of the garment.' },
]

export default function HowToMeasurePage() {
    return (
        <SiteLayout>
            <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <header className="text-center">
                    <h1 className="text-3xl font-light uppercase tracking-[0.18em] text-primary-800 sm:text-5xl">
                        How To Measure Yourself
                    </h1>
                    <span className="mx-auto mt-5 block h-px w-20 bg-primary-300" />
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-primary-900/60 sm:text-base">
                        Use a soft measuring tape over light clothing, and keep it snug — not tight.
                        Have someone help you for the most accurate numbers.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                    {steps.map((step, i) => (
                        <article key={step.name}>
                            {/* IMAGE PLACEHOLDER — measurement diagram */}
                            <ImagePlaceholder label={`${step.name} diagram`} ratio="3/4" className="w-full" />
                            <h2 className="mt-3 text-xs uppercase tracking-[0.18em] text-primary-900 sm:text-sm">
                                {String(i + 1).padStart(2, '0')} · {step.name}
                            </h2>
                            <p className="mt-1 text-xs leading-relaxed text-primary-900/60 sm:text-sm">
                                {step.note}
                            </p>
                        </article>
                    ))}
                </div>
            </main>
        </SiteLayout>
    )
}
