import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocStar = ({
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
			d='M10.8704 11.4089L11.4764 10.1238C11.5542 9.95875 11.779 9.95875 11.8568 10.1238L12.4629 11.4089L13.8183 11.6162C13.9922 11.6428 14.0615 11.8665 13.9356 11.9949L12.955 12.9945L13.1864 14.4067C13.2162 14.588 13.0343 14.7264 12.8787 14.6407L11.6666 13.9736L10.4546 14.6407C10.299 14.7264 10.1171 14.588 10.1468 14.4067L10.3782 12.9945L9.39764 11.9949C9.27177 11.8665 9.34104 11.6428 9.51497 11.6162L10.8704 11.4089Z'
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
export default SvgDocStar;
