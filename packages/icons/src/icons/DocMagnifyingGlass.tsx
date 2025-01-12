import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocMagnifyingGlass = ({
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
			d='M13.6667 13.6667L14.6667 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 12C10 13.1046 10.8954 14 12 14C12.5533 14 13.054 13.7753 13.4161 13.4123C13.7769 13.0505 14 12.5513 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 7.99998V3.83233C13.3334 3.72625 13.2912 3.62451 13.2162 3.54949L11.1172 1.45047C11.0422 1.37545 10.9404 1.33331 10.8344 1.33331H3.06669C2.84577 1.33331 2.66669 1.5124 2.66669 1.73331V14.2666C2.66669 14.4876 2.84577 14.6666 3.06669 14.6666H7.33335'
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
export default SvgDocMagnifyingGlass;
