/* eslint-disable @next/next/no-img-element */
import { Play } from 'lucide-react'

interface ImagePlaceholderProps {
	label?: string
	className?: string
	/** e.g. "3/4", "16/9" — applied via aspect-ratio */
	ratio?: string
	/** Where the caption sits — center by default, top when content overlays the middle */
	align?: 'center' | 'top'
	/** Video placeholders carry a play badge and render a <video> once src is set */
	kind?: 'image' | 'video'
	/** Real asset path; the placeholder shows until this is provided */
	src?: string
}

/**
 * Drop-in stand-in for real photography and video.
 * Pass `src` once assets are ready and the real media renders instead.
 */
const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
	label = 'Image',
	className = '',
	ratio,
	align = 'center',
	kind = 'image',
	src,
}) => {
	const style = ratio ? { aspectRatio: ratio } : undefined

	if (src) {
		return kind === 'video' ? (
			<video
				src={src}
				muted
				loop
				playsInline
				autoPlay
				style={style}
				className={`object-cover ${className}`}
			/>
		) : (
			<img src={src} alt={label} style={style} className={`object-cover ${className}`} />
		)
	}

	return (
		<div
			style={style}
			className={`relative flex justify-center overflow-hidden bg-primary-50 ${
				align === 'top' ? 'items-start pt-6' : 'items-center'
			} ${className}`}
		>
			<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(90,38,98,0.10)_25%,transparent_25%,transparent_50%,rgba(90,38,98,0.10)_50%,rgba(90,38,98,0.10)_75%,transparent_75%)] bg-[length:16px_16px]" />

			{kind === 'video' && (
				<span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-800/85">
					<Play className="ml-0.5 h-5 w-5 fill-white text-white" />
				</span>
			)}

			<span
				className={`relative z-10 px-4 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-primary-700/70 ${
					kind === 'video' && align === 'center' ? 'mt-20' : ''
				}`}
			>
				{label}
			</span>
		</div>
	)
}

export default ImagePlaceholder
