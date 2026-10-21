/* eslint-disable @next/next/no-img-element */

interface FlowerMarkProps {
	className?: string
	/** 0–1, how visible the watermark is */
	opacity?: number
}

/** Decorative flower lifted from the logo — purely ornamental. */
export const FlowerMark: React.FC<FlowerMarkProps> = ({
	className = '',
	opacity = 0.06,
}) => (
	<div
		aria-hidden
		style={{ opacity }}
		className={`pointer-events-none absolute select-none flower-mark ${className}`}
	/>
)

/** Full-area loading state: the logo flower, blooming. */
export const FlowerLoader: React.FC<{ label?: string; className?: string }> = ({
	label = 'Loading',
	className = '',
}) => (
	<div
		role="status"
		aria-live="polite"
		className={`flex min-h-[60vh] flex-col items-center justify-center gap-6 ${className}`}
	>
		<img
			src="/flower.png"
			alt=""
			aria-hidden
			className="h-20 w-20 animate-bloom"
		/>
		<span className="text-[11px] uppercase tracking-[0.4em] text-primary-400">
			{label}
		</span>
	</div>
)

export default FlowerMark
