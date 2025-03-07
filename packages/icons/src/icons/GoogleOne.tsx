import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleOne = ({
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
			d='M7.33325 3.33333V12.6667C7.33325 13.4031 7.93019 14 8.66659 14C9.40299 14 9.99992 13.4031 9.99992 12.6667V3.33333C9.99992 2.59695 9.40299 2 8.66659 2C7.93019 2 7.33325 2.59695 7.33325 3.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.75982 2.35274L4.4983 5.44784C3.96414 5.95473 3.94204 6.79863 4.44894 7.33283C4.95582 7.86697 5.79976 7.88903 6.33391 7.38217L9.59548 4.28707C10.1296 3.78019 10.1517 2.93625 9.64482 2.4021C9.13795 1.86795 8.29402 1.84585 7.75982 2.35274Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGoogleOne;
