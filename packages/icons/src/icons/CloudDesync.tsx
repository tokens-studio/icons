import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudDesync = ({
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
			d='M11.9468 12.9916L10.7683 14.1701C9.72689 15.2115 8.03843 15.2115 6.99705 14.1701L6.76135 13.9344'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.7111 14.6415L11.9468 12.9916L10.2969 13.2273L11.7111 14.6415Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.05371 11.2677L7.23222 10.0893C8.27365 9.04788 9.96205 9.04788 11.0035 10.0893L11.2392 10.3249'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.28941 9.61786L6.05371 11.2678L7.70359 11.0321L6.28941 9.61786Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCloudDesync;
