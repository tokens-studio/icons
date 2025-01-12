import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudSync = ({
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
			d='M14.3333 11.7382C15.3291 11.348 16.3333 10.4592 16.3333 8.66665C16.3333 5.99998 14.1111 5.33331 13 5.33331C13 3.99998 13 1.33331 8.99996 1.33331C4.99996 1.33331 4.99996 3.99998 4.99996 5.33331C3.88885 5.33331 1.66663 5.99998 1.66663 8.66665C1.66663 10.4592 2.67081 11.348 3.66663 11.7382'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.05371 12.9916L7.23222 14.1701C8.27365 15.2115 9.96205 15.2115 11.0035 14.1701L11.2392 13.9344'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.28941 14.6415L6.05371 12.9916L7.70359 13.2273L6.28941 14.6415Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.8654 11.2677L10.6869 10.0893C9.64547 9.04788 7.95701 9.04788 6.91564 10.0893L6.67993 10.3249'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6297 9.61786L11.8654 11.2678L10.2155 11.0321L11.6297 9.61786Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCloudSync;
