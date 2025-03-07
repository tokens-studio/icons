import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArchive = ({
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
			d='M4.66669 4H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 6H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 11.3333H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.99998 7.99999H1.73331C1.5124 7.99999 1.33331 8.17906 1.33331 8.39999V14.2667C1.33331 14.4876 1.5124 14.6667 1.73331 14.6667H14.2666C14.4876 14.6667 14.6666 14.4876 14.6666 14.2667V8.39999C14.6666 8.17906 14.4876 7.99999 14.2666 7.99999H14M1.99998 7.99999V1.73333C1.99998 1.51241 2.17907 1.33333 2.39998 1.33333H13.6C13.8209 1.33333 14 1.51241 14 1.73333V7.99999M1.99998 7.99999H14'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgArchive;
