import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGithubCircle = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.556 12.667v-1.242a1.4 1.4 0 0 0-.084-.609 1.45 1.45 0 0 0-.334-.52C10.533 10.143 12 9.628 12 7.265c0-.604-.239-1.185-.667-1.623a2.14 2.14 0 0 0-.04-1.631s-.524-.152-1.737.64a6.1 6.1 0 0 0-3.112 0c-1.213-.792-1.737-.64-1.737-.64a2.14 2.14 0 0 0-.04 1.631A2.32 2.32 0 0 0 4 7.28c0 2.345 1.467 2.86 2.862 3.03a1.423 1.423 0 0 0-.418 1.117v1.24'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.444 11.801c-1.333.421-2.444 0-3.11-1.298'
		/>
	</svg>
);
export default SvgGithubCircle;
