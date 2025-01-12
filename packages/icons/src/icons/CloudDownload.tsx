import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudDownload = ({
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
			d='M8.99996 8.66669V14.6667M8.99996 14.6667L11.3333 12.3334M8.99996 14.6667L6.66663 12.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3333 11.7382C15.3291 11.348 16.3333 10.4592 16.3333 8.66665C16.3333 5.99998 14.1111 5.33331 13 5.33331C13 3.99998 13 1.33331 8.99996 1.33331C4.99996 1.33331 4.99996 3.99998 4.99996 5.33331C3.88885 5.33331 1.66663 5.99998 1.66663 8.66665C1.66663 10.4592 2.67081 11.348 3.66663 11.7382'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCloudDownload;
