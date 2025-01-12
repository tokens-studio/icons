import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocMagnifyingGlassIn = ({
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
			d='M9.33331 10L10.3333 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66669 8.33331C5.66669 9.43791 6.56212 10.3333 7.66669 10.3333C8.21995 10.3333 8.72069 10.1086 9.08275 9.74565C9.44362 9.38385 9.66669 8.88465 9.66669 8.33331C9.66669 7.22871 8.77129 6.33331 7.66669 6.33331C6.56212 6.33331 5.66669 7.22871 5.66669 8.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66669 14.2666V1.73331C2.66669 1.5124 2.84577 1.33331 3.06669 1.33331H10.8344C10.9404 1.33331 11.0422 1.37545 11.1172 1.45047L13.2162 3.54949C13.2912 3.62451 13.3334 3.72625 13.3334 3.83233V14.2666C13.3334 14.4876 13.1543 14.6666 12.9334 14.6666H3.06669C2.84577 14.6666 2.66669 14.4876 2.66669 14.2666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.33331V3.59998C10.6667 3.82089 10.8458 3.99998 11.0667 3.99998H13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDocMagnifyingGlassIn;
