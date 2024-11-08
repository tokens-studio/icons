import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCigaretteSlash = ({
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
			d='M12 10v2M12 7.333C12 6.667 11.333 6 10 6h-.667a2 2 0 0 1-2-2V1.333M14.667 7.333c0-4-2.667-4-2.667-4s2.667.667 2.667-2M14.667 10v2'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.733 12H12l-2-2H1.733a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m2 2 12 12'
		/>
	</svg>
);
export default SvgCigaretteSlash;
