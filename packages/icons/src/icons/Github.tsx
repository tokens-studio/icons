import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGithub = ({
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
			d='M10.6666 14.6846V12.7712C10.6916 12.4534 10.6487 12.1338 10.5406 11.8338C10.4326 11.5338 10.2619 11.2602 10.04 11.0312C12.1333 10.7979 14.3333 10.0046 14.3333 6.36457C14.3331 5.43379 13.9751 4.5387 13.3333 3.86457C13.6372 3.05024 13.6157 2.15014 13.2733 1.35124C13.2733 1.35124 12.4866 1.1179 10.6666 2.3379C9.13864 1.92378 7.52798 1.92378 5.99997 2.3379C4.17997 1.1179 3.3933 1.35124 3.3933 1.35124C3.05088 2.15014 3.0294 3.05024 3.3333 3.86457C2.68672 4.5437 2.32832 5.44688 2.3333 6.38457C2.3333 9.99791 4.5333 10.7912 6.62663 11.0512C6.4073 11.2779 6.23814 11.5482 6.13017 11.8445C6.0222 12.1408 5.97784 12.4566 5.99997 12.7712V14.6846'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99998 13.3511C3.99998 13.9999 2.33331 13.3511 1.33331 11.3511'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGithub;
