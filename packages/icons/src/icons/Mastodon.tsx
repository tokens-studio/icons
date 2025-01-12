import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMastodon = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M4.66675 9C4.66675 9 4.66675 7.1716 4.66675 6C4.66675 3.99999 8.00008 4.00001 8.00008 6C8.00008 6.78107 8.00008 8 8.00008 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 9C11.3333 9 11.3333 7.1716 11.3333 6C11.3333 3.99999 8 4.00001 8 6C8 6.78107 8 8 8 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.3332 11.3333C10.3332 12 13.9999 11.3333 13.9999 8.66663L13.9999 5.99996C14.0001 2.33329 11.3334 1.66663 9.99992 1.66663H5.99992C3.99984 1.66663 1.95499 2.33329 2.09116 5.99996C2.14044 7.32463 2.11532 8.92336 2.33325 10.6666C2.99996 16 9.33325 14.3333 10.3332 14V13C10.3332 13 4.99992 14 5.3332 11.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMastodon;
