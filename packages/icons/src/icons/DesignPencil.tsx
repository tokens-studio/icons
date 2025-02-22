import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDesignPencil = ({
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
			d='M7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 14.112V9.33335L7.99992 4.66669L10.6666 9.33335V14.112'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 9.33331C5.33325 9.33331 6.08443 9.99998 6.66659 9.99998C7.24872 9.99998 7.99992 9.33331 7.99992 9.33331C7.99992 9.33331 8.75112 9.99998 9.33325 9.99998C9.91539 9.99998 10.6666 9.33331 10.6666 9.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDesignPencil;
