import Reveal from '@/components/reveal'

interface SectionHeadingProps {
	eyebrow?: string
	title: string
	description?: string
	align?: 'center' | 'left'
	tone?: 'dark' | 'light'
}

/** Shared heading treatment: eyebrow · thin rule · light uppercase title. */
const SectionHeading: React.FC<SectionHeadingProps> = ({
	eyebrow,
	title,
	description,
	align = 'center',
	tone = 'dark',
}) => (
	<div className={align === 'center' ? 'text-center' : 'text-left'}>
		{eyebrow && (
			<Reveal>
				<p
					className={`text-[11px] font-medium uppercase tracking-[0.4em] ${tone === 'dark' ? 'text-primary-400' : 'text-white/60'
						}`}
				>
					{eyebrow}
				</p>
			</Reveal>
		)}
		<Reveal delay={100}>
			<h2
				className={`mt-4 text-3xl font-light uppercase tracking-[0.18em] sm:text-4xl md:text-5xl ${tone === 'dark' ? 'text-primary-800' : 'text-white'
					}`}
			>
				{title}
			</h2>
			<span
				className={`mt-5 block h-px w-20 ${align === 'center' ? 'mx-auto' : ''} ${tone === 'dark' ? 'bg-primary-300' : 'bg-white/40'
					}`}
			/>
		</Reveal>
		{description && (
			<Reveal delay={200}>
				<p
					className={`mt-5 text-sm leading-relaxed sm:text-base ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'
						} ${tone === 'dark' ? 'text-primary-900/60' : 'text-white/70'}`}
				>
					{description}
				</p>
			</Reveal>
		)}
	</div>
)

export default SectionHeading
